import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,Animated,Easing,Dimensions} from 'react-native';
import firebase from 'firebase';
import { Constants, Svg } from 'expo';
width=Dimensions.get('window').width;
height=Dimensions.get('window').height;
export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animatedWidth:new Animated.Value(200),
        animatedHeight:new Animated.Value(200)
    };
  }
  static navigationOptions={
      header:null
  }
  componentDidMount() {
     

      setTimeout(()=>{
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Profil' : 'Kayit')
          })
      },1000)
  }

  render() {
    return (
      <View style={styles.container}>
           <Animated.Image source={require('../assets/images/giris.gif')} style={{width:this.state.animatedWidth,borderRadius: 100,height:this.state.animatedHeight}} />
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });