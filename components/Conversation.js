import React, { Component } from 'react'
import { Text, ScrollView, Button, Image, StyleSheet, FlatList, View } from 'react-native'
import PropTypes from 'prop-types'
import MessagesViewer from './MessagesViewer'
import MessageSender from './MessageSender'
import KeyboardSpacer from 'react-native-keyboard-spacer'

class Conversation extends Component {
	render() {

		return (
			<View style={styles.container}>
				<MessagesViewer style={styles.messagesView} me={this.props.me} messages={this.props.messages}/>
				<MessageSender style={styles.footer} targetUsername={this.props.user} sendMessage={this.props.onSendMessage}/>
				<KeyboardSpacer/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	messagesView: {
		flex: 1,
	},
	footer: {
		height: 100,
	}
})

export default Conversation