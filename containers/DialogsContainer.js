import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DialogsScreen  from '../components/DialogsScreen'
import { getDialogs, resetDialogs } from '../actions'
import { checkIfDialogsLoadedSelector, getDialogsSelector } from '../reducers/dialogs'
import { getAccessTokenSelector, getUsernameSelector } from '../reducers/auth'



const mapStateToProps = (state) => ({
	dialogsLoaded: checkIfDialogsLoadedSelector(state),
	dialogs: getDialogsSelector(state),
	accessToken: getAccessTokenSelector(state),
	me: getUsernameSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	resetDialogs: () => dispatch(resetDialogs()),
	getDialogs : (accessToken) => dispatch(getDialogs(accessToken))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogsScreen)