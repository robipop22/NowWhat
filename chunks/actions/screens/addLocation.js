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
		this.state = {
			showInputs: false,
			title: '',
			description: ''
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

	addNewLocation = () => {
		const data = markers[0]
		data.latlng = { latitude: this.state.markerLatitude, longitude: this.state.markerLongitude}
		data.picture = 'http://teamorange.in/wp-content/uploads/2017/01/event-management-blog-1-performance.jpg'
		const placesRef = firebase.database().ref().child('places')
		placesRef.push(data)
		.then( (data) => {
			console.log('success', data)
			Alert.alert(
				'Success!',
				'The place have been saved',
				[
					{ text: 'Ok', onPress: () => this.props.navigation.goBack() },
				],
			)

		})
		.catch( (data) => {
			console.log('err', data)
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
		return (
			<KeyboardAvoidingView style={styles.container}>
				<Button
					containerViewStyle={styles.buttonContainer}
					raised
					icon={{ name: 'arrow-back' }}
					title='Go back to actions'
					onPress={() => this.props.navigation.goBack()} />
				<View style={[styles.mapContainer]}>
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
						<View style={styles.inputContainer}>
							<FormLabel>Title of the location</FormLabel>
							<FormInput onChangeText={(text) => this.addTitle(text)} />
							<FormLabel>Description of the location</FormLabel>
							<FormInput onChangeText={(text) => this.addDescription(text)} />
							<Button
								containerViewStyle={styles.buttonContainer}
								raised
								icon={{ name: 'check' }}
								title='Submit'
								onPress={this.addNewLocation} />
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
		alignItems: 'center',
		height: 0.35 * height
	},
	map: {
		...StyleSheet.absoluteFillObject
	},
	inputContainer: {
		marginTop: 0.35 * height,
		height: 0.25 * height
	}
})