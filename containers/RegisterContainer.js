import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RegisterScreen  from '../components/RegisterScreen'
import { registerAttempt } from '../actions'
import { getLastErrorSelector, isLoggedInSelector } from '../reducers/auth'



const mapStateToProps = (state) => ({
	lastError: getLastErrorSelector(state),
	isLoggedIn: isLoggedInSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	onRegisterAttempt: (email, username, password) => dispatch(registerAttempt(email, username, password))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterScreen)