import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	FlatList,
	Keyboard,
	KeyboardAvoidingView,
	Alert
} from 'react-native'
import { Screen } from 'react-native-chunky'

import { Data } from 'react-chunky'

import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import MapView from 'react-native-maps'

import firebase from '../../configs/firebase'

import GeoFencing from 'react-native-geo-fencing'

const { width, height } = Dimensions.get('window')

const circleToPolygon = require('circle-to-polygon')

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const alerts = []
const keys = []

export default class AlertsScreen extends Screen {

	constructor(props) {
		super(props)
		const { data, alert } = this.props.navigation.state.params
		this.state = {
			isLoading: true,
			showInputs: false,
			alertToDelete: null
		}
	}

	componentDidMount() {
		super.componentDidMount()
		this.getAlerts()
	}

	componentWillUnmount() {
		super.componentWillMount()
	}

	renderDataError() {
		return this.renderData()
	}

	renderDataDefaults() {
		return this.renderData()
	}

	handlePolygonPress = (event) => {
		const { coordinate } = event

		const geoFencePoint = {
			lat: coordinate.latitude,
			lng: coordinate.longitude
		}

		const polygon = []
    for ( let i = 0; i < alerts.length; i++ ) {
      let alertCoordinates = [
        alerts[i].coordinate.latitude,
        alerts[i].coordinate.longitude
      ]
      const { radius } = alerts[i]
       polygon.push(circleToPolygon(alertCoordinates,radius, 32 ))
    }

		if (polygon.length) {
			for (let i = 0; i < polygon.length; i++) {
				const geoFenceArray = []
				for (let j = 0; j < polygon[i].coordinates[0].length; j++) {
					geoFenceArray.push({
						lat: polygon[i].coordinates[0][j][0],
						lng: polygon[i].coordinates[0][j][1]
					})
				}

				GeoFencing.containsLocation(geoFencePoint, geoFenceArray)
					.then((data) => {
						this.setState({
							showInputs: true,
							alertToDelete: i
						})
					})
					.catch(() => {

					})
			}
		}
	}

	getAlerts = () => {
		const self = this
		let data
		Data.Cache.retrieveCachedItem('userData')
    .then((userData) => {
        firebase.database().ref('/alerts/').on('value', (snapshot) => {
					data = snapshot.val()
          const { email, uid } = userData
          for (let key in data) {
            if (data[key].userData && data[key].userData.email === email && data[key].userData.uid === uid) {
							alerts.push(data[key])
							keys.push(key)
            }
          }
          self.setState({
						isLoading: false,
						showInputs: false
          })
        })
      })
      .catch(() => {
        self.setState({
          isLoading: false
        })
      })
	}

	removeAlert = () => {
		const { alertToDelete } = this.state
		const self = this
		if ( alertToDelete === null ) return
		firebase.database().ref('/alerts/').child(keys[alertToDelete]).remove()
			.then(res => {
				alerts=[]
				self.getAlerts()
			})
			.catch(err => {
				console.warn('err', err);
			})
	}

	cancelSubmit = () => {
		this.setState({
			showInputs: false,
			alertToDelete: null
		})
	}


	render() {
		return (
			<View>
				{this.renderContent()}
			</View>
		)
	}

	renderContent() {
		const self = this

		const polygon = []
		const polygonCoordinates = []
    for ( let i = 0; i < alerts.length; i++ ) {
      let alertCoordinates = [
        alerts[i].coordinate.latitude,
        alerts[i].coordinate.longitude
      ]
      const { radius } = alerts[i]
       polygon.push(circleToPolygon(alertCoordinates,radius, 32 ))
		}

		if ( polygon.length ) {
      for (let i = 0; i < polygon.length; i++) {
        const coordinatesArray = []
        for (let j = 0; j < polygon[i].coordinates[0].length; j++) {
          coordinatesArray.push(
            {
              latitude: polygon[i].coordinates[0][j][0],
              longitude: polygon[i].coordinates[0][j][1]
            }
          )
        }
				polygonCoordinates.push({ coord: coordinatesArray})
      }
		}

		return (
			<KeyboardAvoidingView style={styles.container}>
				<Button
					containerViewStyle={[styles.buttonContainer, {marginTop: 30, marginBottom: 20 }]}
					buttonStyle={{
						backgroundColor: '#2196F3'
					}}
					icon={{ name: 'arrow-back' }}
					title='Go back to profile screen'
					onPress={() => this.props.navigation.goBack()} />
				<View style={[styles.mapContainer, {height: this.state.showInputs ? height * 0.5 : height}]}>
					<MapView
						style={styles.map}
						region={{
							latitude: 46.769350,
							longitude: 23.589462,
							latitudeDelta: LATITUDE_DELTA,
							longitudeDelta: LONGITUDE_DELTA
						}}
						showsUserLocation={true}
						onPress={(e) => this.handlePolygonPress(e.nativeEvent) }
					>
					{
						polygonCoordinates.map( (polygon, index) => (
							<MapView.Polygon
								coordinates={polygon.coord}
								strokeColor={this.state.alertToDelete === index ? 'red' : '#000'}
								strokeWidth={this.state.alertToDelete === index ? 2 : 1}
							/>
						))
					}
					</MapView>
				</View>
				{
					this.state.showInputs ?
							<View style={styles.inputContainer}>
								<Button
									containerViewStyle={styles.buttonContainer}
									raised
									icon={{ name: 'delete-forever' }}
									title='Remove alert'
									onPress={this.removeAlert} />
								<Button
									containerViewStyle={styles.buttonContainer}
									buttonStyle={{
										backgroundColor: '#2196F3'
									}}
									raised
									icon={{ name: 'cancel' }}
									title='Cancel'
									onPress={this.cancelSubmit} />
							</View>
						:
							null
				}
			</KeyboardAvoidingView>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		height: height
	},
	buttonContainer: {
		margin: 20
	},
	mapContainer: {
		marginTop: 70,
		...StyleSheet.absoluteFillObject,
		width: width,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	map: {
		...StyleSheet.absoluteFillObject
	},
	inputContainer: {
		marginTop: 0.5 * height,
		height: 0.25 * height
	}
})