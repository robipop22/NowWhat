import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { Screen } from 'react-native-chunky'
import { Button, Card, Icon, Avatar } from 'react-native-elements'

export default class MessageScreen extends Screen {

    constructor(props) {
      super(props)
      this.state = { ...this.state, progress: false }
      this._onAction = this.onAction.bind(this)
    }

    onAction() {
      this.transitions.showRegister({ settingUp: true })
    }

    render() {
      return (<View style={[styles.content, { backgroundColor: this.props.theme.primaryColor }]}>
         <Text style={styles.title}>
            { this.props.header }
          </Text>
          <Text style={styles.text}>
            { this.props.text }
          </Text>
          <Button
              style={styles.button}
              onPress={this._onAction}
              color={this.props.theme.primaryColor}
              backgroundColor="#FFFFFF"
              title={this.props.button} />
      </View>)
    }
}

var styles = StyleSheet.create({
  button: {
    width: 300,
    margin: 5,
    marginTop: 40,
    paddingLeft: 30,
    paddingRight: 30
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: "justify",
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: "justify",
    color: '#ffffff',
    fontSize: 18,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  }
})
