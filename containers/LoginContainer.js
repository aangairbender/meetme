import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginScreen  from '../components/LoginScreen'
import { loginAttempt } from '../actions'
import { getLastErrorSelector, isLoggedInSelector } from '../reducers/auth'



const mapStateToProps = (state) => ({
	lastError: getLastErrorSelector(state),
	isLoggedIn: isLoggedInSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	onLoginAttempt: (username, password) => dispatch(loginAttempt(username, password))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen)