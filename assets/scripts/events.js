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

const userSubmitReview = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.reviewSubmit(data)
    .then(ui.reviewSubmitSuccess)
    .catch(ui.reviewSubmitFailure)
}

const userUpdateReview = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.updateReview(data)
    .then(ui.userUpdateReviewSuccess)
    .catch(ui.userUpdateReviewFailure)
}

const userShowReviews = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.showReviews(data)
    .then(ui.showReviewsSuccess)
    .catch(ui.showReviewsFailure)
}

const userDeleteReview = function () {
  event.preventDefault()

  api.deleteReview()
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewFailure)
}

module.exports = {
  userSignUp,
  userSignIn,
  changePass,
  userSignOut,
  userSubmitReview,
  userUpdateReview,
  userShowReviews,
  userDeleteReview
}
