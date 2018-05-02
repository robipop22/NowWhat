import React from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import { Screen } from 'react-native-chunky'

import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

import { isIOS } from '../../utils'

import firebase from '../../configs/firebase'

export default class SignUpScreen extends Screen {

	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password1: '',
			password2: ''
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

	handleEmail = (email) => {
		this.setState({
			email
		})
	}

	handlePassword1 = (password1) => {
		this.setState({
			password1
		})
	}

	handlePassword2 = (password2) => {
		this.setState({
			password2
		})
	}

	handleSignUp = () => {
		const { email, password1, password2 } = this.state
		if ( password1 !== password2 ) {
			this.setState({
				showPasswordError: true
			})
			return;
		}
		firebase.auth().createUserWithEmailAndPassword(email, password1)
			.then( (data) => {
				console.log(data);
				this.transitions.showLoggedin({ email })
			})
			.catch ( (err) => {

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

		return (
			<View style={styles.container}>
				<Text style={styles.header}> Sign up </Text>
				<FormLabel>Email</FormLabel>
				<FormInput onChangeText={this.handleEmail} keyboardType="email-address"/>
				<FormLabel>Password</FormLabel>
				<FormInput onChangeText={this.handlePassword1} secureTextEntry={true} />
				<FormLabel>Confirm password</FormLabel>
				<FormInput onChangeText={this.handlePassword2} secureTextEntry={true} />
				{
					this.state.showPasswordError ?
						<Text style={styles.err}>Passwords must match!</Text>
					:
					null
				}
				<Button
					raised
					buttonStyle={styles.btn}
					icon={{ name: 'person-add' }}
					title='Sign up'
					onPress={this.handleSignUp}
				/>
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
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 15,
		marginBottom: 15
	},
	err: {
		color: 'red',
		textAlign: 'center'
	}
})