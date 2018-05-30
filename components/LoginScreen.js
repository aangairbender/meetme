import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'


class LoginScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "aangairbender",
			password: "QWERTY12345"
		}
	}

	componentDidUpdate() {	
		if (this.props.isLoggedIn)
			this.props.navigation.navigate('drawer');
	}

	render() {

		return (
			<KeyboardAvoidingView>
				<Text>Username</Text>
				<TextInput
					value={this.state.username}
					onChangeText={(newUsername) => {this.setState({username: newUsername})}}/>
				<Text>Password</Text>
				<TextInput
					secureTextEntry
					value={this.state.password}
					onChangeText={(newPassword) => {this.setState({password: newPassword})}}/>				
				<Button
					title="Login"
					onPress={() => {
						this.props.onLoginAttempt(this.state.username, this.state.password);
					}}/>
				<Text>{this.props.lastError + ""}</Text>
				<Text>Are you new here? <Text style={{fontWeight: "bold"}} onPress={()=>{this.props.navigation.navigate('register')}}>Register</Text></Text>
			</KeyboardAvoidingView>
		)
	}
}



LoginScreen.propTypes = {
	onLoginAttempt: PropTypes.func,
	lastError: PropTypes.string
}

export default LoginScreen