import React, { Component } from 'react'
import { Text, ScrollView, Button, Image, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DialogsListItem from './DialogsListItem'

class DialogsList extends Component {
	render() {
		if (this.props.dialogs.length > 0) {
			return (
				<ScrollView>
				{this.props.dialogs.map((item, i) => <DialogsListItem me={this.props.me} key={i} data={item}/>)}
				</ScrollView>
			)
		} else {
			return (<ScrollView><Text>Nothing to show</Text></ScrollView>)
		}
	}
}

export default DialogsList