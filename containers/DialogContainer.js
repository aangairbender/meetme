import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DialogScreen  from '../components/DialogScreen'
import { getMessages, refreshMessages, sendMessage } from '../actions'
import { checkIfMessagesLoadedSelector, getMessagesSelector, getNeedRefreshSelector } from '../reducers/messages'
import { getAccessTokenSelector, getUsernameSelector } from '../reducers/auth'

const aT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTM2MjkzNDQwLCJqdGkiOiIwYWZjMjkyYjNlYTE0NmM3YWFkZTE0MjhhZGM5ZGJiNCIsInVzZXJfaWQiOjIwfQ.FR3Q6ylv96fgoGRBDRTbFnBQM9Le9lPDh6cFIxvVu30"
	


const mapStateToProps = (state) => ({
	messagesLoaded: checkIfMessagesLoadedSelector(state),
	messages: getMessagesSelector(state),
	accessToken: getAccessTokenSelector(state),
	username: getUsernameSelector(state),
	needRefresh: getNeedRefreshSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	getMessages : (accessToken, target) => dispatch(getMessages(accessToken, target)),
	refreshMessages: (accessToken, target) => dispatch(refreshMessages(accessToken, target)),
	onSendMessage: (target, message) => dispatch(sendMessage(aT, target, message))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogScreen)