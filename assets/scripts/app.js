'use strict'

const events = require('./events')

$(() => {
  $('#user-sign-up').on('submit', events.userSignUp)
  $('#user-sign-in').on('submit', events.userSignIn)
  $('#change-password').on('submit', events.changePass)
  $('#change-password').hide()
  $('#user-sign-out').on('submit', events.userSignOut)
  $('#user-sign-out').hide()
  $('#user-submit-review').on('submit', events.userSubmitReview)
  $('#user-submit-review').hide()
  $('#user-update-review').on('submit', events.userUpdateReview)
  $('#user-update-review').hide()
  $('#user-show-reviews').on('submit', events.userShowReviews)
  $('#user-show-reviews').hide()
  $('#user-delete-review').on('submit', events.userDeleteReview)
  $('#user-delete-review').hide()
})
