import React from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import { Screen } from 'react-native-chunky'

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
		const { email } = this.props.navigation.state.params
		this.state = {
			email,
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
				this.props.navigation.goBack(null)
			})
			.catch( (err) => {
				// handle error
			})
	}

	showFilters = (visible) => {
		this.setState({ modal: visible })
	}

	handleFilterSelect = (selectedFilter) => {
		this.filterList = updateArrayOfObjects(this.filterList, 'name', selectedFilter, 'selected', false);
		this.showFilters(false)
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
				<Text style={{textAlign: 'center', fontSize: 20}}> Welcome back!</Text>
				<Text style={{paddingLeft: 20}}> Email: {this.state.email} </Text>
				<Button
					raised
					buttonStyle={styles.btn}
					icon={{ name: 'filter-variant', type: 'material-community' }}
					title='Your filters'
					onPress={() => this.showFilters(true)}
				/>
				<Button
					raised
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
		margin: 10
	}
})