import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'


class SplashScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.navigate('auth')
		}, 3000)
	}

	render() {
		return (
			<View>
				<Text>SplashScreen</Text>
			</View>
		)
	}
}



SplashScreen.propTypes = {

}

export default SplashScreen