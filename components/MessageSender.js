import React, { Component } from 'react'
import { Text, View, ScrollView, Button, Image, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DialogsListItem from './DialogsListItem'

class MessageSender extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: ''
		}
	}
	render() {
		<View>
			<TextInput
				placeholder='Enter your message'
				onChangeText={(newText) => {this.setState({message: newText})}}/>
			<Button
				title='Send'
				onPress={() => {
					this.props.sendMessage(this.props.targetUsername, this.state.message);
					this.setState({message:''});
				}}/>
		</View>
	}
}

MessageSender.propTypes = {
	targetUsername: PropTypes.string,
	sendMessage: PropTypes.func
}

export default MessageSender