import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  Image
} from 'react-native'
import { Screen } from 'react-native-chunky'

import { Button } from 'react-native-elements'

import firebase from '../../configs/firebase'

import MapView from 'react-native-maps'

import { decode, isIOS } from '../../utils'

const { width, height } = Dimensions.get('window')

import { TextToSpeech } from 'react-native-watson'

import GeoFencing from 'react-native-geo-fencing'

const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const IOSMargin = isIOS() ? 50 : 20
const markers = []

export default class MainIntroScreen extends Screen {

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      isLoading: true,
      showDetails: false,
      mapContainerHeight: height
    }
  }

  componentDidMount() {
    super.componentDidMount()
    TextToSpeech.initialize('472574a2-75cf-42ac-a43e-ef73f95ffff7', 'aUtumEFkENdd')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
        this.renderMarkers()
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    )
  }

  componentWillUnmount() {
    super.componentWillMount()
    navigator.geolocation.clearWatch(this.watchId)
  }

  renderDataError() {
    return this.renderData()
  }

  renderDataDefaults() {
    return this.renderData()
  }

  renderMarkers = () => {
    const self = this
    let data
    firebase.database().ref('/places/').on('value', function (snapshot) {
      data = snapshot.val()
      for (let key in data) {
        markers.push(data[ key ])
      }
      self.setState({
        isLoading: false
      })
    })
  }

  handlePressMarker = (marker) => {
    navigator.geolocation.clearWatch(this.watchId)
    const { title, description, picture, latlng } = marker
    this.setState({
      showDetails: true,
      title: title,
      description: description,
      pictureURL: picture,
      mapContainerHeight: 0.4 * height,
      destination: latlng,
      coords: ''
    })
  }

  showRoute = () => {
    const mode = 'walking'
    const origin = `${this.state.latitude}, ${this.state.longitude}`
    const destination = `${this.state.destination.latitude}, ${this.state.destination.longitude}`
    const APIKEY = 'AIzaSyCq1jTnrKJoFSK686je2-marmctSOd29cE'
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.routes.length) {
          this.setState({
            coords: decode(responseJson.routes[ 0 ].overview_polyline.points) // definition below
          })
          this.watchId = navigator.geolocation.watchPosition(
            (position) => {
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
              })
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
          )
        }
      }).catch(e => { console.warn(e) });
  }

  closeDetails = () => {
    this.setState({ mapContainerHeight: height, showDetails: false })
  }

  render() {
    return (
      <View>
        { this.renderContent() }
      </View>
    )
  }

  renderContent() {
    const polygon = [
      { lat: 46.757726, lng: 23.595431 },
      { lat: 46.757426, lng: 23.597352 },
      { lat: 46.756028, lng: 23.595627 },
      { lat: 46.757082, lng: 23.594285 },
      { lat: 46.757726, lng: 23.595431 } // last point has to be same as first point
    ]

    let point = {
      lat: this.state.latitude !== null ? this.state.latitude : 46.769350,
      lng: this.state.longitude !== null ? this.state.longitude : 23.589462
    }

    GeoFencing.containsLocation(point, polygon)
      .then(() => TextToSpeech.synthesize('you are in the zone'))
      .catch(() => TextToSpeech.synthesize('you are not in the zone'))

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    const { title, description, pictureURL, mapContainerHeight } = this.state
    const origin = {
      latitude: this.state.latitude !== null ? this.state.latitude : 46.769350,
      longitude: this.state.longitude !== null ? this.state.longitude : 23.589462
    }
    const destination = this.state.destination ? this.state.destination : ''
    return (
      <View style={styles.container}>
        <View style={[styles.mapContainer, {height: mapContainerHeight}]}>
          <MapView
            style={styles.map}
            region={{
              latitude: this.state.latitude !== null ? this.state.latitude : 46.769350,
              longitude: this.state.longitude !== null ? this.state.longitude : 23.589462,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }}
            showsUserLocation={true}
          >
          {
            this.state.coords ?
              <MapView.Polyline
                coordinates={this.state.coords}
                strokeWidth={4}
              />
            :
              null
          }
            {markers.map(marker => (
              <MapView.Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                onPress={() => this.handlePressMarker(marker)}
              />
            ))}
          </MapView>
        </View>
        {
          this.state.showDetails ?
            <View style={styles.detailsContainer}>
              <Text style={[styles.detailsText, {fontSize: 16}]}>{title}</Text>
              <Text style={[styles.detailsText, {fontSize: 14}]}>{description}</Text>
              <Image
                style={{ width: 0.8 * width, height: 0.25 * height, marginTop: 10, marginBottom: 10 }}
                source={{ uri: pictureURL }}
              />
              <Button
                raised
                icon={{ name: 'directions-walk' }}
                title='Show route'
                onPress={this.showRoute} />
              <Button
                raised
                icon={{ name: 'close' }}
                title='Close details'
                onPress={this.closeDetails} />
            </View>
          :
            null
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.32 * height + IOSMargin,
    height: 0.5 * height
  },
  detailsText: {
    color: '#0c0c0c',
    marginTop: 10,
  }
})
