import React from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import { Screen } from 'react-native-chunky'

import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

import { isIOS } from '../../utils'

export default class MainProfileScreen extends Screen {

	constructor(props) {
		super(props)
		this.state = {
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

	render() {
		return (
			<View>
				{this.renderContent()}
			</View>
		)
	}

	someFunction = () => {

	}

	renderContent() {
		return (
			<View style={styles.container}>
				<FormLabel>Email</FormLabel>
				<FormInput onChangeText={this.someFunction} />
				<FormLabel>Password</FormLabel>
				<FormInput onChangeText={this.someFunction} />
				<Button
					raised
					buttonStyle={styles.btn}
					icon={{ name: 'sign-in', type: 'font-awesome' }}
					title='Sign in' />
				<Button
					title={'Sign in with Facebook'}
					textStyle={{ color: '#fff'}}
					backgroundColor={'#305C96'}
					buttonStyle={styles.btn}
					icon={{ type: 'font-awesome', name: 'facebook' }}
				/>
				<Text> Don't have an account ? </Text>
				<Button
					raised
					buttonStyle={styles.btn}
					icon={{ name: 'person-add' }}
					title='Sign up' />
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		marginTop: isIOS() ? 20 : 0
	},
	btn: {
		margin: 10
	}
})