import React from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import { Screen } from 'react-native-chunky'

import { Data } from 'react-chunky'

import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

import { isIOS } from '../../utils'

import firebase from '../../configs/firebase'

export default class MainProfileScreen extends Screen {

	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			err: ''
		}
	}

	componentDidMount() {
		super.componentDidMount()
		Data.Cache.retrieveCachedItem('userData')
			.then((userData) => {
				this.transitions.showLoggedin({userData})
			})
			.catch(() => {
				return 
			})
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
			email,
			err: ''
		})
	}

	handlePassword = (password) => {
		this.setState({
			password,
			err: ''
		})
	}

	handleSignIn = () => {
		const { email, password } = this.state
		firebase.auth().signInWithEmailAndPassword(email.trim(), password)
			.then( (data) => {
				const { email, uid } = data
				const dataToStore = {
					email,
					uid
				}
				Data.Cache.cacheItem('userData', dataToStore)
					.then( userData => {
						this.transitions.showLoggedin({userData})
					})
					.catch( (err) => {
						console.warn('Something went wrong', err)
					})
			})
			.catch( (err) => {
				this.setState({
					err: err.message
				})
			})
	}

	handleSignUp = () => {
		this.transitions.showSignup()
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
				<FormLabel>Email</FormLabel>
				<FormInput onChangeText={this.handleEmail} keyboardType="email-address"/>
				<FormLabel>Password</FormLabel>
				<FormInput onChangeText={this.handlePassword} secureTextEntry={true} />
				{
					this.state.err !== '' ?
						<Text style={styles.err}>{this.state.err}</Text>
						:
						null
				}
				<Button
					buttonStyle={styles.btn}
					icon={{ name: 'sign-in', type: 'font-awesome' }}
					title='Sign in'
					onPress={this.handleSignIn}
					/>
				<Text style={{textAlign: 'center'}}> Don't have an account ? </Text>
				<Button
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
		marginTop: isIOS() ? 25 : 0
	},
	btn: {
		margin: 10,
		backgroundColor: '#0277BD'
	},
	err: {
		color: 'red',
		textAlign: 'center'
	}
})