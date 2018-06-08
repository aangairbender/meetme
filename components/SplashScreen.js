import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet, Image } from 'react-native'
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
			<View style={{flexDirection: 'column', justifyContent: 'center',alignItems:'center', height:'100%'}}>
				<Image style={{width:172, height:172}} source={require('../img/logo.jpg')}/>
			</View>
		)
	}
}



SplashScreen.propTypes = {

}

export default SplashScreen