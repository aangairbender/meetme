import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import DialogsList from './DialogsList'


class DialogsScreen extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
		this.props.getDialogs(this.props.accessToken)
	}

	componentWillUnmount() {
		//this.props.resetDialogs();
	}

	render() {

		if (this.props.dialogsLoaded) {
			return (
				<DialogsList me={this.props.me} dialogs={this.props.dialogs}/>
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



DialogsScreen.propTypes = {
	accessToken: PropTypes.string,
	dialogs: PropTypes.array,
	getDialogs: PropTypes.func,
	dialogsLoaded: PropTypes.bool,
	me: PropTypes.string
}

export default DialogsScreen