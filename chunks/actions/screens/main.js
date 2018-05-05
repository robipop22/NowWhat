import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Alert
} from 'react-native'

import { Screen } from 'react-native-chunky'

import { Data } from 'react-chunky'

import { Button } from 'react-native-elements'

import { TextToSpeech, SpeechToText } from 'react-native-watson'


export default class MainActionsScreen extends Screen {

	constructor(props) {
		super(props)
		this.state = {
			registeredText: 'No recorded text yet!'
		}
	}

	componentDidMount() {
		super.componentDidMount()
		TextToSpeech.initialize('472574a2-75cf-42ac-a43e-ef73f95ffff7', 'aUtumEFkENdd')
		SpeechToText.initialize('5d43b47a-92cd-49dd-854b-59b9d1ccdcc6', '5WswxXxdpJcu')
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

	addNewLocation = () => {
		Data.Cache.retrieveCachedItem('userData')
			.then((data) => {
				this.transitions.showAddlocation({alert: false, data})
			})
			.catch( () => {
				 Alert.alert(
				 	'Warning!',
				 	'In order to submit a new location you must log in.'
				 )
			})
	}

	addNewAlert = () => {
		Data.Cache.retrieveCachedItem('userData')
			.then((data) => {
				this.transitions.showAddlocation({alert: true, data})
			})
			.catch(() => {
				Alert.alert(
					'Warning!',
					'In order to submit a new location you must log in.'
				)
			})
	}

	saySomething = () => {
		const { registeredText } = this.state
		TextToSpeech.synthesize(registeredText)
	}

	startListening = () => {
		SpeechToText.startStreaming((error, text) => {
			this.setState({
				registeredText: text
			})
		})
	}

	stopListening = () => {
		SpeechToText.stopStreaming()
	}

	render() {
		return (
			<View>
				{this.renderContent()}
			</View>
		)
	}

	renderContent() {
		return (
			<View style={styles.container}>
				<Text style={{fontSize: 20, marginBottom: 15, padding: 10}}>
					This is your actions screen you can submit a new location or add an alert.
				</Text>
				<Button
					buttonStyle={styles.btn}
					icon={{ name: 'add-location' }}
					title='Add new location'
					onPress={this.addNewLocation}/>
				<Button
				buttonStyle={styles.btn}
				icon={{ name: 'add-alert' }}
				title='Add new location'
				onPress={this.addNewAlert}/>
				<Button
					buttonStyle={styles.btn}
					icon={{ name: 'sound', type: 'foundation' }}
					title='Say something'
					onPress={this.saySomething} />
				<Button
					buttonStyle={styles.btn}
					icon={{ name: 'microphone', type: 'material-community' }}
					title='Start listening'
					onPress={this.startListening} />
				<Button
					buttonStyle={styles.btn}
					icon={{ name: 'microphone-off', type: 'material-community' }}
					title='Stop listening'
					onPress={this.startListening} />
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		margin: 20,
		paddingTop: 20
	},
	btn: {
		margin: 20,
		backgroundColor: '#2196F3'
	}
})