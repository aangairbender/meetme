import React, { Component } from 'react'
import { Text, ScrollView, Button, Image, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import MessageItem from './MessageItem'

class MessagesViewer extends Component {
	constructor(props) {
		super(props)
		this.scroll = null
	}

	componentWillUpdate() {
		if (this.scroll != null)
			this.scroll.scrollToEnd()
	}

	render() {
		if (this.props.messages.length > 0) {
			return (
				<ScrollView ref={(scroll) => {this.scroll = scroll}}>
				{this.props.messages.map((item, i) => <MessageItem me={this.props.me} key={i} data={item}/>)}
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