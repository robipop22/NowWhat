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

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let markers = []

export default class AddLocationScreen extends Screen {

	constructor(props) {
		super(props)
		const { data, alert } = this.props.navigation.state.params
		this.state = {
			showInputs: false,
			title: '',
			description: '',
			data,
			alert
		}
	}

	componentDidMount() {
		super.componentDidMount()
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

	handleMapPress = (event) => {
		const { coordinate } = event
		markers = []
		markers.push({
			coordinate
		})
		this.setState({
			showInputs: true,
			markerLatitude: coordinate.latitude,
			markerLongitude: coordinate.longitude
		})
	}

	addTitle = (title) => {
		markers[0].title = title
		this.setState({
			ttile: title
		})
	}

	addDescription = (description) => {
		markers[0].description = description
		this.setState({
			description: description
		})
	}

	addRadius = (radius) => {
		markers[0].radius = radius
		this.setState({
			radius
		})
	}

	addNewLocation = () => {
		const data = markers[0]
		data.latlng = { latitude: this.state.markerLatitude, longitude: this.state.markerLongitude}
		data.picture = 'http://teamorange.in/wp-content/uploads/2017/01/event-management-blog-1-performance.jpg'
		const placesRef = firebase.database().ref().child('places')
		placesRef.push(data)
		.then( (data) => {
			Alert.alert(
				'Success!',
				'The place has been saved',
				[
					{ text: 'Ok', onPress: () => this.props.navigation.goBack() },
				],
			)

		})
		.catch( (data) => {
			console.warn('err', data)
		})
	}

	addNewAlert = () =>{
		const data = markers[0]
		Data.Cache.retrieveCachedItem('userData')
			.then((userData) => {
				data.userData = userData
				const alertsRef = firebase.database().ref().child('alerts')
				alertsRef.push(data)
					.then( data => {
						Alert.alert(
							'Success!',
							'The alert has been saved', [{
								text: 'Ok',
								onPress: () => this.props.navigation.goBack()
							}, ],
						)
					})
					.catch( data => {
						console.warn('err', data)
					})
			})
			.catch(() => {
				Alert.alert(
					'Warning!',
					'You are not logged in.'
				)
			})
	}

	cancelSubmit = () => {
		markers = []
		this.setState({showInputs: false})
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
		return (
			<KeyboardAvoidingView style={styles.container}>
				<Button
					containerViewStyle={[styles.buttonContainer, {marginTop: 30, marginBottom: 20 }]}
					buttonStyle={{
						backgroundColor: '#2196F3'
					}}
					icon={{ name: 'arrow-back' }}
					title='Go back to actions'
					onPress={() => this.props.navigation.goBack()} />
				<View style={[styles.mapContainer, {height: this.state.showInputs ? height * 0.35 : height}]}>
					<MapView
						style={styles.map}
						region={{
							latitude: 46.769350,
							longitude: 23.589462,
							latitudeDelta: LATITUDE_DELTA,
							longitudeDelta: LONGITUDE_DELTA
						}}
						showsUserLocation={true}
						onPress={(e) => this.handleMapPress(e.nativeEvent) }
					>
						{markers.map(marker => (
							<MapView.Marker
								coordinate={marker.coordinate}
								title={self.state.title}
								description={self.state.description}
							/>
						))}
					</MapView>
				</View>
				{
					this.state.showInputs ?
						this.state.alert ?
							<View style={styles.inputContainer}>
								<FormLabel>Add the radius of the alert (in meters):</FormLabel>
								<FormInput type='number' onChangeText={(text) => this.addRadius(text)} />
								<Button
									containerViewStyle={styles.buttonContainer}
									raised
									icon={{ name: 'check' }}
									title='Submit'
									onPress={this.addNewAlert} />
								<Button
									containerViewStyle={styles.buttonContainer}
									raised
									icon={{ name: 'cancel' }}
									title='Cancel'
									onPress={this.cancelSubmit} />
							</View>
							:
								<View style={styles.inputContainer}>
									<FormLabel>Title of the location</FormLabel>
									<FormInput onChangeText={(text) => this.addTitle(text)} />
									<FormLabel>Description of the location</FormLabel>
									<FormInput onChangeText={(text) => this.addDescription(text)} />
									<Button
										containerViewStyle={styles.buttonContainer}
										buttonStyle={{
											backgroundColor: '#2196F3'
										}}
										raised
										icon={{ name: 'check' }}
										title='Submit'
										onPress={this.addNewLocation} />
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
		marginTop: 0.35 * height,
		height: 0.25 * height
	}
})