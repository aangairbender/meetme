import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import PeopleList from './PeopleList'


class SearchLikeMeScreen extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
		this.props.getPeopleLikeMe(this.props.accessToken)
	}

	render() {

		if (this.props.peopleLoaded) {
			return (
				<PeopleList people={this.props.people}/>
			)
		}
		else {
			
			return (
				<View>
					<Text>Loading</Text>
				</View>
			)
		}

	}
}



SearchLikeMeScreen.propTypes = {
	getPeopleLikeMe: PropTypes.func,
	people: PropTypes.array,
	peopleLoaded: PropTypes.bool,
	accessToken: PropTypes.string
}

export default SearchLikeMeScreen