import React, { Component } from 'react'
import { Text, ScrollView, Button, Image, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DialogsListItem from './DialogsListItem'

class MessagesViewer extends Component {
	render() {
		if (this.props.messages.length > 0) {
			return (
				<ScrollView>
				{this.props.dialogs.map((item, i) => <MessageItem key={i} data={item}/>)}
				</ScrollView>
			)
		} else {
			return (<ScrollView><Text>Nothing to show</Text></ScrollView>)
		}
	}
}

MessagesViewer.propTypes = {
	me: PropTypes.string,
	messages: PropTypes.array
}

export default MessagesViewer