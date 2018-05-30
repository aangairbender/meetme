import React, { Component } from 'react'
import { Text, View, ScrollView, Button, Image, StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation';

class PeopleListItem extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.itemView} onPress={() => {this.props.navigation.navigate('profile', {data: this.props.data})}}>
				<Image style={styles.avatarImage} source={{uri: this.props.data.picture}}/>
				<View style={styles.detailsView}>
					<Text style={styles.fullnameText}>{this.props.data.name + ' ' + this.props.data.surname}</Text>
					<Text style={styles.ageText}>{'Age: ' + this.props.data.age}</Text>
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
	ageText: {
		fontSize: 14
	}
})

export default withNavigation(PeopleListItem)