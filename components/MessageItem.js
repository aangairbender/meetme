import React, { Component } from 'react'
import { Text, View, ScrollView, Button, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

class MessageItem extends Component {
	render() {
		let avatar = this.props.data.sent_from.picture;
		if (avatar != undefined && avatar[0]=='/')
			avatar = 'https://s-n.herokuapp.com' + avatar;
		return (
			<View style={styles.itemView}>
				<Image style={styles.avatarImage} source={{uri: avatar}}/>
				<View style={styles.detailsView}>
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
	lastMessageText: {
		fontSize: 14
	}
})


export default MessageItem