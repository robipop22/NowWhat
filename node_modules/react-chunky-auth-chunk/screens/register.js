import React from 'react'
import { Components } from 'react-native-chunky'

export default class RegisterScreen extends Components.Form {

  constructor(props) {
    super(props)
    this.state = { ...this.state, progress: false }
  }

  validate() {
    if (!this.state.fields.name || this.state.fields.name.trim().length === 0) {
      return this.props.strings.nameEmpty
    }

    if (!this.state.fields.email || this.state.fields.email.trim().length === 0) {
      return this.props.strings.emailEmpty
    }

    if (!this.state.fields.password || this.state.fields.password.trim().length === 0) {
      return this.props.strings.passwordEmpty
    }

    if (!this.state.fields.password2 || this.state.fields.password2.trim().length === 0) {
      return this.props.strings.password2Empty
    }

    if (this.state.fields.password2 !== this.state.fields.password) {
      return this.props.strings.passwordsNotMatching
    }
  }

  submit({ name, email, password }) {
    this.props.signUp({ name, email, password })
  }

  onQuestionPressed() {
    this.transitions.showLogin()
  }

}
