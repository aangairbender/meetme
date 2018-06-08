import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Conversation from './Conversation.js'


class DialogScreen extends Component {


	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getMessages(this.props.accessToken, this.props.navigation.getParam('data', {}).user.username)
				
		let cnt = 0
		this.interval = setInterval(()=>{
			if (this.props.messagesLoaded) {
				cnt = (cnt + 1) % 5;
				if (this.props.needRefresh || cnt == 4)
					this.props.refreshMessages(this.props.accessToken, this.props.navigation.getParam('data', {}).user.username)
			}
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		this.props.resetDialogs();
	}


	render() {

		if (this.props.messagesLoaded) {
			return (
				<Conversation me={this.props.username} accessToken={this.props.accessToken} messages={this.props.messages} user={this.props.navigation.getParam('data', {}).user.username} onSendMessage={this.props.onSendMessage}/>
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
	username: PropTypes.string,
	messages: PropTypes.array,
	getMessages: PropTypes.func,
	messagesLoaded: PropTypes.bool,
	onSendMessage: PropTypes.func
}

export default DialogScreen