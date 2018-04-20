import React from 'react'
import {
  Image,
  View,
  Platform,
  Text,
  StyleSheet
} from 'react-native'
import { Button, Card, Icon, Avatar } from 'react-native-elements'
import { Styles, Screen } from 'react-native-chunky'
import Swiper from 'react-native-swiper'

export default class WelcomeScreen extends Screen {

  constructor(props) {
    super(props)
    this.state = { ...this.state, progress: false }
    this._onRegister = this.onRegister.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    this.lightenStatusBar()
  }

  onRegister() {
    this.transitions[`show${this.props.skipIntroMessage ? 'Register' : 'Message'}`]({ settingUp: true })
  }

  operationDidFinish(name, data, error) {
  }

  renderDataError() {
    return this.renderData()
  }

  renderDataDefaults() {
    return this.renderData()
  }

  renderRegisterButton() {
    return (<Button
        style={styles.continue}
        onPress={this._onRegister}
        color={this.props.theme.primaryColor}
        backgroundColor="#FFFFFF"
        title='Get Started' />)
  }

  renderBanner() {
    return (<View/>)
  }

  renderSlide(data) {
    return (<View key={data.id} style={[styles.slide, { backgroundColor: this.props.theme.primaryColor }]}>
      <View style={styles.header}>
            { this.renderBanner(data) }
           <Text style={styles.title}>
            { data.title }
            </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          { data.text }
        </Text>
      </View>
    </View>)
  }

  renderSlides() {
    return this.props.slides.map(slide => this.renderSlide(slide))
  }


  renderData() {
    return ( <View style={[this.styles.containers.main, styles.container, { flex: 1, backgroundColor: this.props.theme.primaryColor }]}>
            <Swiper
                  style={Platform.OS === 'android' ? styles.swiper : {}}
                  activeDotColor={"#FFFFFF"}
                  dotColor={"#CFD8DC"}
                  showsButtons={false}>
              { this.renderSlides() }
            </Swiper>
            <View style={styles.toolbar}>
              { this.renderRegisterButton() }
            </View>
      </View>)
    }
}

var styles = StyleSheet.create({
  container: {
  },
  swiper: {
    flex: 1,
    width: 400,
    margin: 20
  },
  continue: {
    width: 300,
    margin: 5,
    paddingLeft: 30,
    paddingRight: 30
  },
  header: {
    flex: 1,
    padding: 10,
    marginTop: 30,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: 80,
    marginBottom: 40
  },
  content: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 70,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  toolbar: {
    padding: 20,
    height: 140,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  slide: {
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
