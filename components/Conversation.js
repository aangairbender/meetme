import React, { Component } from 'react'
import { Text, ScrollView, Button, Image, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import MessagesViewer from './MessagesViewer'
import MessageSender from './MessageSender'

class Conversation extends Component {
	render() {

		return (
			<KeyboardAvoidingView>
				<MessagesViewer me={this.props.me} messages={this.props.messages}/>
				<MessageSender targetUsername={this.props.user} sendMessage={this.props.onSendMessage}/>
			</KeyboardAvoidingView>
		)
	}
}

export default Conversation