import React, { Component } from 'react'
import { Text, ScrollView, Button, Image, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import PeopleListItem from './PeopleListItem'

class PeopleList extends Component {
	render() {
		if (this.props.people.length > 0) {
			return (
				<ScrollView>
				{this.props.people.map((item, i) => <PeopleListItem key={i} data={item}/>)}
				</ScrollView>
			)
		} else {
			return (<ScrollView><Text>Nothing to show</Text></ScrollView>)
		}
	}
}

export default PeopleList