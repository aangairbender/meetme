import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchLikeMeScreen  from '../components/SearchLikeMeScreen'
import { getPeopleLikeMe, resetPeople } from '../actions'
import { checkIfPeopleLoadedSelector, getPeopleSelector } from '../reducers/people'
import { getAccessTokenSelector } from '../reducers/auth'



const mapStateToProps = (state) => ({
	peopleLoaded: checkIfPeopleLoadedSelector(state),
	people: getPeopleSelector(state),
	accessToken: getAccessTokenSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	getPeopleLikeMe : (accessToken) => dispatch(getPeopleLikeMe(accessToken)),
	resetPeople: () => dispatch(resetPeople())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchLikeMeScreen)