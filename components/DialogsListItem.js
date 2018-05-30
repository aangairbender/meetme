import React, { Component } from 'react'
import { Text, View, ScrollView, Button, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation';

class DialogsListItem extends Component {
	render() {
		let user;
		if (this.props.data.sent_from.user.username == this.props.me)
			user = this.props.data.sent_to;
		else
			user = this.props.data.sent_from;

		if (user.picture[0]=='/')
			user.picture = 'https://s-n.herokuapp.com' + user.picture;

		return (
			<TouchableOpacity style={styles.itemView} onPress={() => {console.log('asd'); this.props.navigation.navigate('dialog', {data: user})}}>
				<Image style={styles.avatarImage} source={{uri: user.picture}}/>
				<View style={styles.detailsView}>
					<Text style={styles.fullnameText}>{user.name + ' ' + user.surname}</Text>
					<Text style={styles.lastMessageText}>{this.props.data.sent_from.name + ': ' + this.props.data.text}</Text>
				</View>
			</TouchableOpacity>
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

export default withNavigation(DialogsListItem)