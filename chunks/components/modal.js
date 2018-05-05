import React, { PureComponent } from 'react'
import {
	View,
	StyleSheet,
	Modal,
	FlatList
} from 'react-native'

import { List, ListItem, Button } from 'react-native-elements'


export default class ModalComponent extends PureComponent {
	constructor(props) {
		super(props)
		this.state = { ...this.state }
	}

	renderItem = ({ item }) => {
		const { name, id, slug, selected, full_name } = item
		return (
			<ListItem
				key={slug}
				title={name ? name : full_name}
				rightIcon={{ name: 'check' }}
				hideChevron={selected ? false : true}
				onPress={() => this.props.onPressHandler(name ? name : full_name, slug, id)}
			/>
		)
	}

	renderFooter = () => {
		return (
			<Button
				title='Cancel'
				buttonStyle={style.cancelBtn}
				onPress={this.props.onRequestClose}
			/>
		)
	}
	render() {
		const self = this;
		return (
			<View style={style.modalWrapper}>
				<Modal
					animationType={this.props.animationType}
					transparent={this.props.transparent}
					visible={this.props.visible}
					onRequestClose={() => this.props.onRequestClose}
				>
					<View style={{ marginTop: 22 }}>
						<FlatList
							keyboardShouldPersistTaps='always'
							data={this.props.list}
							renderItem={this.renderItem}
							ListFooterComponent={this.renderFooter}
							keyExtractor={(item, index) => index}
						/>
					</View>
				</Modal>
			</View>
		)
	}
}

const style = StyleSheet.create({
	modalWrapper: {
		flex: 1,
		backgroundColor: "#F7F7F7"
	},
	cancelBtn: {
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: '#01579B'
	}
})