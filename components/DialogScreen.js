import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Conversation from './Conversation.js'


class DialogScreen extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
		this.props.getMessages(this.props.accessToken, this.props.data.username)
	}

	render() {

		if (this.props.messagesLoaded) {
			return (
				<Conversation me={this.props.username} messages={this.props.messages} user={this.props.data} onSendMessage={this.props.onSendMessage}/>
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



DialogScreen.propTypes = {
	accessToken: PropTypes.string,
	username: PropTypes.string
	messages: PropTypes.array,
	getMessages: PropTypes.func,
	messagesLoaded: PropTypes.bool,
	onSendMessage: PropTypes.func
}

export default DialogScreen