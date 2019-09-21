import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image,Animated,Easing, SectionList, ScrollView, TouchableOpacity, TextInput ,KeyboardAvoidingView,ActivityIndicator,ImageBackground} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LinearGradient, Video,ImagePicker } from 'expo';
import firebase from 'firebase';
import { Ionicons, Entypo, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import VideoPlayer from '@expo/videoplayer';
width = Dimensions.get('window').width;
height = Dimensions.get('window').height;
var AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
export default class TrendScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      aniheight:new Animated.Value(40)
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Trend',
    
    tabBarOptions: { 
        showLabel: false,
        activeTintColor: '#B34062',
       
       
    
    },
    tabBarIcon: ({tintColor}) => (<MaterialIcons name='airplay' size={25} color={tintColor} />)
  }
  calis (){
    Animated.timing(this.state.aniheight, {
      toValue: 0,
      duration: 500,
      easing:Easing.ease
    }).start();
  }
  animayson = async ()=>{
    this.calis()
   
  }
  takeAction = async ()=>{
    console.log("momentum")
    Animated.timing(this.state.aniheight, {
      toValue: 40,
      duration: 250,
      easing:Easing.ease
    }).start();
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return(
      <View style={{flex:1}}>
        <Animated.View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20,padding:5,height:this.state.aniheight}}>
          <AnimatedTextInput style={{width:'80%',height:40,borderColor:'#E2E2E2',backgroundColor:'#E2E2E2',borderRadius:5,textAlign:'center'}} placeholder="Selamun Aleyküm"/>
          <Ionicons name="md-qr-scanner" size={30} style={{marginRight: 20,}} />

        </Animated.View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{backgroundColor:'white',padding:5,alignItems:'center',marginTop:15}} style={{}} horizontal={true} indicatorStyle="white" >
          <Image source={require('../assets/images/pubg.png')} style={{width:60,height:60}} />
          <View style={{width:20,height:20}}></View>
          <Image source={require('../assets/images/csgo.png')} style={{width:60,height:60}} />
          <View style={{width:20,height:20}}></View>
          <Image source={require('../assets/images/lol.png')} style={{width:60,height:60}} />
          <View style={{width:20,height:20}}></View>
          <Image source={require('../assets/images/apex.png')} style={{width:60,height:60}} />
          <View style={{width:20,height:20}}></View>
          <Image source={require('../assets/images/dota2.png')} style={{width:60,height:60}} />
          <View style={{width:20,height:20}}></View>
          <Image source={require('../assets/images/knight.png')} style={{width:60,height:60}} />
          <View style={{width:20,height:20}}></View>
          <Image source={require('../assets/images/pubg.png')} style={{width:60,height:60}} />
          <View style={{width:20,height:20}}></View>
          <Image source={require('../assets/images/pubg.png')} style={{width:60,height:60}} />
        </ScrollView>
        <ScrollView contentContainerStyle={{padding:10}}    >
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <View style={{width:'49%',height:200,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'49%',height:200,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                  <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
              <View style={{width:'33%',height:100,backgroundColor:'white'}}>
              <Image source={require('../assets/images/video.jpeg')} style={{width:'100%',height:'100%'}} />
              </View>
            </View>
        </ScrollView>

        </View>
    )

  }
}
