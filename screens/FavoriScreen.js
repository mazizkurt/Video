import React, { Component } from 'react';
import { View, Text ,StyleSheet,Dimensions,StatusBar,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import { Ionicons,Entypo,MaterialIcons,EvilIcons } from '@expo/vector-icons';
width=Dimensions.get('window').width;
height=Dimensions.get('window').height;

export default class FavoriScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      favori:false
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Trend',
    
    tabBarOptions: { 
        showLabel: false,
        activeTintColor: '#B34062',
       
       
    
    },
    tabBarIcon: ({tintColor}) => (<MaterialIcons name='favorite' size={25} color={tintColor} />)
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    if(this.state.favori){
      return(
        <View style={{flex:1}}>
          <View style={styles.header}>
              <LinearGradient start={[0.0, 0.9]} end={[1.0, 0.9]} 
                  colors={['#B34062','#B34062', '#B45873']} 
                  style={{  position:'absolute',top:0,left:0,padding: 15, alignItems: 'center',height:100,width:'100%',justifyContent:'center',alignItems:'center' , shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65, 
                  elevation: 7,}}>
                <Text style={{fontFamily: 'yazibold', fontSize: 25, width: '70%', textAlign: 'center',padding:10,color:'white'}}>Favorilerim</Text>
                  
                </LinearGradient>
  
          </View>
        </View>
      )
    }else{
      return(
        <View style={{flex:1}}>
          <View style={styles.header}>
              <LinearGradient start={[0.0, 0.9]} end={[1.0, 0.9]} 
                  colors={['#B34062','#B34062', '#B45873']} 
                  style={{height:100,width:'100%',justifyContent:'center',alignItems:'center' , }}>
                <Text style={{fontFamily: 'yazibold', fontSize: 25, width: '70%', textAlign: 'center',padding:10,color:'white'}}>Favorilerim</Text>

                </LinearGradient>
                 

          </View>
          <View style={{marginTop:200,width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Ionicons name='ios-star-half' size={50} color='#B34062' />
            <Text style={{fontFamily: 'yazibold', fontSize: 20, width: '100%', textAlign: 'center',padding:40,color:'#7B7B7B'}}>Henüz Favorin Bulunmuyor</Text>
          </View>    
        </View>
      )
    }


  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  header:{
    position:'absolute',
    left:0,
    right:0,
    shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65, 
                  elevation: 7,
  }
    
});
