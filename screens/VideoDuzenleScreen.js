import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, SectionList, ScrollView, TouchableOpacity, TextInput ,KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LinearGradient, Video } from 'expo';
import firebase from 'firebase';
import { Ionicons, Entypo, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import VideoPlayer from '@expo/videoplayer';
width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

export default class VideoDuzenleScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bekle: false
        }
    }
    static navigationOptions = {
        header: null
    }
    paylas = async () => {
        fetch('http://azizcoder.info.tr/video/video_kayit.php', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              videobaslik:"a"+this.state.numara,
              videoaciklama:"a"
            }),
          });
        this.setState({bekle:true})
    }
    render() {

        return (
            <ScrollView >
              <KeyboardAvoidingView behavior="position" style={{flex:1}} contentContainerStyle={{  justifyContent: 'center', alignItems: 'center' }} enabled>
              
                <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: {
                            uri: this.props.navigation.state.params.uri,
                        },
                    }}
                    isPortrait={true}
                    playFromPositionMillis={0}
                />
                  
               
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
                    }} placeholder="Video Başlığı" />
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
                    }} placeholder="Video Açıklaması" />
                    <TouchableOpacity onPress={this.paylas} style={{marginTop:40,justifyContent:'center',alignItems:'center',backgroundColor:'#B34062',width:'90%',height:60,borderRadius:10}}>
                        {
                            this.state.bekle? <ActivityIndicator color="white" />:<Text style={{fontFamily:'yazibold',fontSize:21,color:'white'}}>Paylaş</Text>
                        }
                    </TouchableOpacity>
      
                
                </KeyboardAvoidingView>
                </ScrollView>
        )



    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


});
