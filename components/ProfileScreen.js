import React, { Component } from 'react'
import { Text, Image, TextInput, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'


class ProfileScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let data = this.props.navigation.getParam('data', {});
		console.log(data)
		let avatar = data.picture;
		if (avatar != undefined && avatar[0]=='/')
			avatar = 'https://s-n.herokuapp.com' + avatar;

		return (
			<ScrollView>
				<Image style={styles.avatarImage} size={300} source={{uri:avatar}}/>
				<Text style={styles.fullnameText}>{data.name + ' ' + data.surname}</Text>
				<Text style={styles.ageText}>{'Age: ' + data.age}</Text>
				<Text style={styles.aboutText}>{'About me: ' + data.description}</Text>
				<Text style={styles.aboutText}>{'Website: ' + data.website}</Text>
				<View style={styles.languageView}>
					<Text>Languages:</Text>
					{data.language.map((item, i) => <Text key={i}>{item.language.name + ': ' + item.level}</Text>)}
				</View>
				<View style={styles.languageView}>
					<Button
						title='Send message'
						onPress={()=>{this.props.navigation.navigate('dialog', {data:data})}}/>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	avatarImage: {
		width: 172,
		height: 172
	},
	fullnameText: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	ageText: {
		fontSize: 14
	},
	aboutText: {
		fontSize: 12
	},
	languageView: {
		marginTop: 20
	}
})

export default ProfileScreen