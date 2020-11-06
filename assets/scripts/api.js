'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const passChange = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

const reviewSubmit = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST'
  })
}

const updateReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH'
  })
}

const showReviews = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

const deleteReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  passChange,
  signOut,
  reviewSubmit,
  updateReview,
  showReviews,
  deleteReview
}
