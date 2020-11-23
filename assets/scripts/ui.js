'use strict'

const store = require('./store')

const userSignUpSuccess = function (response) {
  $('#message').text('Thank you for joining ' + response.user.email)
  $('form').trigger('reset')
}

const userSignUpFailure = function () {
  $('#message').text('Sorry, could not register your account, please try again')
  $('form').trigger('reset')
}

const userSignInSuccess = function (response) {
  $('#message').text('Hello! ' + response.user.email + ' you can now start submitting reviews!')
  $('form').trigger('reset')
  $('#change-password').show()
  $('#user-sign-out').show()
  $('#user-sign-up').hide()
  $('#user-sign-in').hide()
  $('#user-submit-review').show()
  $('#user-update-review').show()
  $('#user-show-reviews').show()
  $('#user-delete-review').show()
  store.user = response.user
}

const userSignInFailure = function () {
  $('#message').text('Sorry could not sign you in, please try again')
  $('form').trigger('reset')
}

const changePassSuccess = function () {
  $('#message').text('Successful password change.')
  $('form').trigger('reset')
}

const changepassFailure = function () {
  $('#message').text('Sorry could not change your password, please try again')
}

const userSignOutSuccess = function () {
  $('#message').text('Successfully Signed Out')
  $('#user-sign-up').show()
  $('#user-sign-in').show()
  $('#change-password').hide()
  $('#user-sign-out').hide()
  $('#user-submit-review').hide()
  $('#user-update-review').hide()
  $('#user-show-reviews').hide()
  $('#user-delete-review').hide()
  store.user = null
}

const userSignOutFailure = function () {
  $('#message').text('Could not sign you out, please try again.')
}

const reviewSubmitSuccess = function () {
  $('#message').text('You have posted your review, thank you!')
  $('form').trigger('reset')
}

const reviewSubmitFailure = function () {
  $('#message').text('Sorry, we couldnt post your review, please try again.')
}

const userUpdateReviewSuccess = function (response) {
  $('#message').text('You have updated your review.')
  $('form').trigger('reset')
}

const userUpdateReviewFailure = function (response) {
  $('#message').text('Sorry we could not update your review, please try again.')
}

const showReviewsSuccess = function (response) {
  const reviews = response.reviews
  $('#message').text('Here are the reviews you have posted.')
  reviews.forEach(reviews => {
    JSON.stringify(reviews, null, 2)
    const showAllReviews = (`
      <p>Title: ${reviews.title}</p>
      <p>Text: ${reviews.text}</p>
      <p>Rating: ${reviews.rating}</p>
      <p>ID: ${reviews._id}</p>
      <br>
      `)
    $('#message').append(showAllReviews)
  })
}

const showReviewsFailure = function () {
  $('#message').text('Could not retrieve your reviews.')
}

const deleteReviewSuccess = function () {
  $('#message').text('We have removed that review.')
}

const deleteReviewFailure = function () {
  $('#message').text('We could not remove that review, please try again.')
}

module.exports = {
  userSignUpSuccess,
  userSignUpFailure,
  userSignInSuccess,
  userSignInFailure,
  changePassSuccess,
  changepassFailure,
  userSignOutSuccess,
  userSignOutFailure,
  reviewSubmitSuccess,
  reviewSubmitFailure,
  userUpdateReviewSuccess,
  userUpdateReviewFailure,
  showReviewsSuccess,
  showReviewsFailure,
  deleteReviewSuccess,
  deleteReviewFailure
}
