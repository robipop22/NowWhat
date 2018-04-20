import React from 'react'
import { Screen } from 'react-native-chunky'

export default class LoadingScreen extends Screen {

    constructor(props) {
      super(props)
      this.state = { ...this.state, progress: true }
    }

    renderDataLoading() {
      return this.renderProgress()
    }

}
