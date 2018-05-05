import React from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import { Screen } from 'react-native-chunky'

import { Data } from 'react-chunky'

import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

import { isIOS, updateArrayOfObjects } from '../../utils'

import firebase from '../../configs/firebase'

import ModalComponent from '../../components/modal'

export default class LoggedInProfileScreen extends Screen {

	filterList = [
		{
			name: 'Pubs',
			selected: true
		},
		{
			name: 'Parties',
			selected: true
		},
		{
			name: 'Bars',
			selected: true
		},
		{
			name: 'Promotions',
			selected: true
		}
	]

	constructor(props) {
		super(props)
		let { userData } = this.props.navigation.state.params
		if ( !userData ) {
			Data.Cache.retrieveCachedItem('userData')
				.then((data) => {
					userData = data
				})
				.catch(() => {
					return
				})
		}
		this.state = {
			userData,
			modal: false
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

	handleLogOut = () => {
		firebase.auth().signOut()
			.then( () => {
				Data.Cache.clearCachedItem('mustLog')
					.then( () => {
						this.props.navigation.goBack(null)
					})
					.catch( () => {
						console.warn('Something went wrong')
					})
			})
			.catch( (err) => {
				// handle error
			})
	}

	showFilters = (visible) => {
		this.setState({ modal: visible })
	}

	handleFilterSelect = (selectecdFilter) => {
		this.filterList = updateArrayOfObjects(this.filterList, 'name', selectecdFilter, 'selected', false);
		this.showFilters(false)
	}

	showAlerts = () => {
		this.transitions.showAlerts()
	}


	render() {
		return (
			<View>
				{this.renderContent()}
			</View>
		)
	}

	renderContent() {

		const { email } = this.state.userData

		return (
			<View style={styles.container}>
				<Text style={{textAlign: 'center', fontSize: 20, margin: 15}}> Welcome back!</Text>
				<Text style={{paddingLeft: 20}}> Email: {email} </Text>
				<Button
					buttonStyle={styles.btn}
					icon={{ name: 'filter-variant', type: 'material-community' }}
					title='Your filters'
					onPress={() => this.showFilters(true)}
				/>
				<Button
					buttonStyle={styles.btn}
					icon={{ name: 'alert', type: 'material-community' }}
					title='Your alerts'
					onPress={this.showAlerts}
				/>
				<Button
					buttonStyle={styles.btn}
					icon={{ name: 'logout', type: 'material-community' }}
					title='Logout'
					onPress={this.handleLogOut}
				/>
				<ModalComponent
					animationType="slide"
					transparent={false}
					visible={this.state.modal}
					onRequestClose={() => this.showFilters(false)}
					onPressHandler={(filterName) => this.handleFilterSelect(filterName)}
					list={this.filterList}
				/>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		marginTop: isIOS() ? 50 : 30
	},
	btn: {
		margin: 20,
		backgroundColor: '#0288D1'
	}
})