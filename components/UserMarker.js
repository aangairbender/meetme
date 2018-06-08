import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { MapView, Marker, ProviderPropType } from 'expo';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';


class UserMarker extends React.Component {
  render() {
    if (this.props.data.user.username == 'aangairbender')
      return null;
    let avatar = this.props.data.picture;
    if (avatar != undefined && avatar[0]=='/')
      avatar = 'https://s-n.herokuapp.com' + avatar;
    return (
      <MapView.Marker
        coordinate={{latitude: parseFloat(this.props.data.latitude), longitude: parseFloat(this.props.data.longitude)}}
        onPress={()=>{this.props.navigation.navigate('profile', {data: this.props.data})}}/>
        /*image={{uri: avatar}}>
        <View>
          <Image source={{uri:avatar}} style={{width: 16, height: 16}}/>
        </View>
      </MapView.Marker>*/
    )
  }
}


export default withNavigation(UserMarker);