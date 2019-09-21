import React, { Component } from 'react';
import { View, Text ,StyleSheet,Dimensions,StatusBar,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import { Ionicons,Entypo,MaterialIcons,EvilIcons } from '@expo/vector-icons';
width=Dimensions.get('window').width;
height=Dimensions.get('window').height;

export default class AnasayfaScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Trend',
    
    tabBarOptions: { 
        showLabel: false,
        activeTintColor: '#B34062',
       
       
    
    },
    tabBarIcon: ({tintColor}) => (<MaterialIcons name='home' size={25} color={tintColor} />)
  }


  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return(
      <View style={{flex:1}}>

      </View>
    )

  }
}
