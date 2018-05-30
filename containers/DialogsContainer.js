import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DialogsScreen  from '../components/DialogsScreen'
import { getDialogs } from '../actions'
import { checkIfDialogsLoadedSelector, getDialogsSelector } from '../reducers/dialogs'
import { getAccessTokenSelector, getUsernameSelector } from '../reducers/auth'



const mapStateToProps = (state) => ({
	dialogsLoaded: checkIfDialogsLoadedSelector(state),
	dialogs: getDialogsSelector(state),
	accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTM2MjkzNDQwLCJqdGkiOiIwYWZjMjkyYjNlYTE0NmM3YWFkZTE0MjhhZGM5ZGJiNCIsInVzZXJfaWQiOjIwfQ.FR3Q6ylv96fgoGRBDRTbFnBQM9Le9lPDh6cFIxvVu30"
	,//getAccessTokenSelector(state),
	me: "aangairbender"//getUsernameSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	getDialogs : (accessToken) => dispatch(getDialogs(accessToken))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogsScreen)