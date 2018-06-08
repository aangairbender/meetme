import React, { Component } from 'react'
import { Text, Image, TextInput, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import {MapView, Marker, ProviderPropType, Constants } from 'expo'
import UserMarker from './UserMarker'


class MapScreen extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log(this.props);
		this.props.getPeopleLikeMe(this.props.accessToken)
	}


	render() {
		if (this.props.peopleLoaded) {
			return (
				<View style={styles.container}>
					<MapView style={styles.map}
						showsUserLocation={true}
						showsMyLocationButton={true}>
						{this.props.people.map((item,i) =>
							(
								<UserMarker key={i} data={item}/>
							)
						)}
					</MapView>
				</View>
			)
		} else {
			return (
				<View>
					<Text>Loading</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})


export default MapScreen