import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import SplashContainer from './containers/SplashContainer'
import DefaultContainer from './containers/DefaultContainer'
import SearchLikeMeContainer from './containers/SearchLikeMeContainer'
import DialogsContainer from './containers/DialogsContainer'
import DialogContainer from './containers/DialogContainer'
import ProfileScreen from './components/ProfileScreen'
import configureStore from './store/configureStore'
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerActions } from 'react-navigation'
import { Ionicons, FontAwesome } from '@expo/vector-icons'//'react-native-vector-icons/FontAwesome'
import { PersistGate } from 'redux-persist/integration/react'

const store = configureStore({})

const searchTabs = createBottomTabNavigator({'searchLikeMe': SearchLikeMeContainer, 'searchByDistance': DefaultContainer},
  {
    initialRouteName: 'searchLikeMe',
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state
        let iconName;
        if (routeName == 'searchLikeMe') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else {
          iconName = `ios-compass${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>;
      }
    })
  })

const ModalStack = createSwitchNavigator({'profile' : ProfileScreen, 'dialog' : DialogContainer});

const AuthSwitch = createSwitchNavigator({login: LoginContainer, register: RegisterContainer})
const AppStack = createDrawerNavigator({search: searchTabs, 'dialogs': DialogsContainer, 'settings': DefaultContainer})
const DrawerStack = createStackNavigator(
  {
    'main': AppStack,
    'modals': ModalStack
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'MeetMe',
      headerTintColor: 'white',
      headerLeft: <Ionicons name='ios-menu' color='white' size={32} onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer())}}/>
    })
  }
)

const Router = createSwitchNavigator(
  {
    'splash': SplashContainer,
    'auth': AuthSwitch,
    'drawer': DrawerStack
  },
  {
    initialRouteName: 'splash'
  }
)

class App extends Component {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <Router/>
        </PersistGate>
      </Provider>
    )
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
