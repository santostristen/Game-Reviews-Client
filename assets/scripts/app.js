'use strict'

const events = require('./events')

$(() => {
  $('#user-sign-up').on('submit', events.userSignUp)
  $('#user-sign-in').on('submit', events.userSignIn)
  $('#change-password').on('submit', events.changePass)
  $('#change-password').hide()
  $('#user-sign-out').on('submit', events.userSignOut)
  $('#user-sign-out').hide()
})
