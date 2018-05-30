import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'



class RegisterScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: ""
		}
	}
	componentDidUpdate() {	
		if (this.props.isLoggedIn)
			this.props.navigation.navigate('drawer');
	}

	render() {	

		return (	
			<KeyboardAvoidingView>
				<Text>Email</Text>
				<TextInput
					value={this.state.email}
					onChangeText={(newEmail) => {this.setState({email: newEmail})}}/>
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
					title="Register"
					onPress={() => {this.props.onRegisterAttempt(this.state.email, this.state.username, this.state.password)}}/>
				<Text>{this.props.lastError + ""}</Text>
				<Text>Already have an account? <Text style={{fontWeight: "bold"}} onPress={()=>{this.props.navigation.navigate('login')}}>Login</Text></Text>
			</KeyboardAvoidingView>
		)
	}
}



RegisterScreen.propTypes = {
	onRegisterAttempt: PropTypes.func,
	lastError: PropTypes.string
}

export default RegisterScreen