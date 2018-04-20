import React from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import { Screen } from 'react-native-chunky'

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
		this.transitions.showAddlocation()
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
				<Button
					raised
					icon={{ name: 'add-location' }}
					title='Add new location'
					onPress={this.addNewLocation}/>
				<Button
					raised
					icon={{ name: 'sound', type: 'foundation' }}
					title='Say something'
					onPress={this.saySomething} />
				<Button
					raised
					icon={{ name: 'microphone', type: 'material-community' }}
					title='Start listening'
					onPress={this.startListening} />
				<Button
					raised
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
	}
})