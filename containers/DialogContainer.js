import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DialogScreen  from '../components/DialogScreen'
import { getMessages, refreshMessages, sendMessage, resetMessages } from '../actions'
import { checkIfMessagesLoadedSelector, getMessagesSelector, getNeedRefreshSelector } from '../reducers/messages'
import { getAccessTokenSelector, getUsernameSelector } from '../reducers/auth'


const mapStateToProps = (state) => ({
	messagesLoaded: checkIfMessagesLoadedSelector(state),
	messages: getMessagesSelector(state),
	accessToken: getAccessTokenSelector(state),
	username: getUsernameSelector(state),
	needRefresh: getNeedRefreshSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	resetMessages: () => dispatch(resetMessages()),
	getMessages : (accessToken, target) => dispatch(getMessages(accessToken, target)),
	refreshMessages: (accessToken, target) => dispatch(refreshMessages(accessToken, target)),
	onSendMessage: (aT, target, message) => dispatch(sendMessage(aT, target, message))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogScreen)