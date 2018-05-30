import React, { Component } from 'react'
import { Text, View, ScrollView, Button, Image, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'

class DialogsListItem extends Component {
	render() {
		let user;
		if (this.props.data.sent_from.user.username == this.props.me)
			user = this.props.data.sent_to;
		else
			user = this.props.data.sent_from;
		return (
			<View style={styles.itemView} onPress={() => {this.props.navigation.push('dialog', {data: this.props.data})}}>
				<Image style={styles.avatarImage} source={{uri: user.picture}}/>
				<View style={styles.detailsView}>
					<Text style={styles.fullnameText}>{user.name + ' ' + user.surname}</Text>
					<Text style={styles.lastMessageText}>{this.props.data.sent_from.name + ': ' + this.props.data.text}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	itemView: {
		flex: 1,
		flexDirection: 'row'
	},
	detailsView: {
		
	},
	avatarImage: {
		width: 64,
		height: 64
	},
	fullnameText: {
		fontSize: 16
	},
	lastMessageText: {
		fontSize: 14
	}
})

export default DialogsListItem