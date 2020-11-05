'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const userSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.userSignUpSuccess)
    .catch(ui.userSignUpFailure)
}

const userSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.userSignInSuccess)
    .catch(ui.userSignInFailure)
}

const changePass = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.passChange(data)
    .then(ui.changePassSuccess)
    .catch(ui.changepassFailure)
}

const userSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.userSignOutSuccess)
    .catch(ui.userSignOutFailure)
}

module.exports = {
  userSignUp,
  userSignIn,
  changePass,
  userSignOut
}
