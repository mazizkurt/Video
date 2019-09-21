import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, SectionList, ScrollView, TouchableOpacity, TextInput ,KeyboardAvoidingView,ActivityIndicator,ImageBackground} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LinearGradient, Video,ImagePicker } from 'expo';
import firebase from 'firebase';
import { Ionicons, Entypo, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import VideoPlayer from '@expo/videoplayer';
width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

export default class ProfilDuzenleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image:null
    };
  }
  static navigationOptions={
      header:null
  }
  foto = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        mediaTypes:'Images'
        
      });
  
      if (!result.cancelled) {
        this.setState({image:result.uri})
  
    
       
      }
  }

  render() {
    return (
        <ScrollView >
        <KeyboardAvoidingView behavior="position" style={{flex:1}} contentContainerStyle={{  justifyContent: 'center', alignItems: 'center' }} enabled>
        
            <TouchableOpacity onPress={this.foto}>
            {
                this.state.image==null? <ImageBackground source={require('../assets/images/profil.png')}  style={{width:200,height:200}}>
                <Ionicons name="md-add" size={45} color="#B34062" style={{position:'absolute',bottom:10,right:15}}/>
            </ImageBackground>: <Image source={{uri:this.state.image}}  style={{width:200,height:200,borderRadius:100}} />
           
            }
            </TouchableOpacity>
              <TextInput style={{
                  height: 'auto', width: '90%', borderColor: 'white',backgroundColor:'white', borderWidth: 1, padding: 20, borderRadius: 5, shadowColor: "#000",marginTop:40,
                  shadowOffset: {
                      width: 0,
                      height: 4,
                  },
                  shadowOpacity: 0.30,
                  shadowRadius: 4.65,

                  elevation: 8,
                  fontFamily:'yazimedium',
                  fontSize:18
              }} placeholder="Adın Ney" />
               <TextInput style={{
                  height: 'auto', width: '90%', borderColor: 'white',backgroundColor:'white', borderWidth: 1, padding: 20, borderRadius: 5, shadowColor: "#000",marginTop:40,
                  shadowOffset: {
                      width: 0,
                      height: 4,
                  },
                  shadowOpacity: 0.30,
                  shadowRadius: 4.65,

                  elevation: 8,
                  fontFamily:'yazimedium',
                  fontSize:18
              }} placeholder="Biyografi" />
              <TouchableOpacity onPress={this.paylas} style={{marginTop:40,justifyContent:'center',alignItems:'center',backgroundColor:'#B34062',width:'90%',height:60,borderRadius:10}}>
                  {
                      this.state.bekle? <ActivityIndicator color="white" />:<Text style={{fontFamily:'yazibold',fontSize:21,color:'white'}}>Güncelle</Text>
                  }
              </TouchableOpacity>

          
          </KeyboardAvoidingView>
          </ScrollView>
    );
  }
}
