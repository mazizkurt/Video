import React, { Component } from 'react';
import { View, Text ,StyleSheet,Dimensions,StatusBar,Image,SectionList,ScrollView,TouchableOpacity} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import firebase from 'firebase';
import { Ionicons,Entypo,MaterialIcons,EvilIcons } from '@expo/vector-icons';
width=Dimensions.get('window').width;
height=Dimensions.get('window').height;

export default class HesabimScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      favori:false
    }
  }
  static navigationOptions = {

 
    header:null
  }

  render() {

      return(
        <View style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                <TouchableOpacity style={{flex:1}}>
                    <View style={{width:'90%',height:'auto',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5}}>
                       <Ionicons name='md-person-add' size={25} color='#3F3F3F' style={{padding:10}} /> 
                       <Text style={{color:'#3F3F3F',fontFamily:'yazimedium',fontSize:17,textAlign:'left',width:'80%',padding:5}}>Arkadaşlarını Davet Et</Text>

                       <Ionicons name='ios-arrow-forward' size={25} color='#7B7B7B' style={{width:'20%',textAlign:'right',marginLeft:-7}}/>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}}>
                    <View style={{width:'90%',height:'auto',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5}}>
                       <Ionicons name='ios-notifications' size={25} color='#3F3F3F' style={{padding:13}} /> 
                       <Text style={{color:'#3F3F3F',fontFamily:'yazimedium',fontSize:17,textAlign:'left',width:'80%',padding:5}}>Bildirimler</Text>
                       <Ionicons name='ios-arrow-forward' size={25} color='#7B7B7B' style={{width:'20%',textAlign:'right',marginLeft:-7}}/>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}}>
                    <View style={{width:'90%',height:'auto',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5}}>
                       <MaterialIcons name='security' size={20} color='#3F3F3F' style={{padding:13}} /> 
                       <Text style={{color:'#3F3F3F',fontFamily:'yazimedium',fontSize:17,textAlign:'left',width:'80%',padding:2}}>Güvenlik</Text>
                       <Ionicons name='ios-arrow-forward' size={25} color='#7B7B7B' style={{width:'20%',textAlign:'right',marginLeft:-7}}/>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>firebase.auth().signOut()}><Text>Çık</Text></TouchableOpacity>
               
            </ScrollView>
        </View>
      )



  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

    
});
