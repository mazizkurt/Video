import React, { Component } from 'react';
import { View, Text ,StyleSheet,Dimensions,StatusBar,Image,TouchableOpacity,Alert,Animated,Easing} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LinearGradient,ImagePicker,Permissions,Video ,ScreenOrientation, AnimatedRegion} from 'expo';
import { Ionicons,Entypo,MaterialIcons,EvilIcons } from '@expo/vector-icons';
import VideoPlayer from '@expo/videoplayer';                                                                                                                                                                                                                                                                                                        
width=Dimensions.get('window').width;
height=Dimensions.get('window').height;
export default class componentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video:null,
      animastonTop:new Animated.Value(1500),
      animasyonheight:new Animated.Value(0),

    };
  }
  static navigationOptions = {
    tabBarLabel: 'Trend',
    tabBarOptions: { 
        showLabel: false,
        activeTintColor: '#B34062',
       
       
    
    },
    tabBarIcon: ({tintColor}) => (<MaterialIcons name='face' size={25} color={tintColor} />)
  }
 
  componentDidMount = async () => {
   
      const { Permissions } = Expo;
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('Uyarı','Video yüklemeniz için kamera izni vermeniz gerekmektedir.');
      }
    

  };
  
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      mediaTypes:'Videos'
    });

    if (!result.cancelled) {
      this.props.navigation.navigate('VideoDuzenle',{uri:result.uri})

  
     
    }
  };
  render() {
     
        return (
        
          <View style={styles.container}>
              <View style={styles.header}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'90%',marginTop:30}}>
                    <View  style={{width:50,height:50}}></View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfilDuzenle')}><Image source={require('../assets/images/profil.png')} style={{width:50,height:50,marginLeft:30}}/></TouchableOpacity>
                    <TouchableOpacity    onPress={this._pickImage}><MaterialIcons style={{width:50,height:50,}} name='video-call' size={40} color='black' /></TouchableOpacity>
    
                </View>
              
                <Text style={{fontFamily: 'yazimedium', fontSize: 18,  textAlign: 'center',marginBottom:60}}>Sefa Kozman</Text>
              </View>
              <View style={styles.headeralt}>
                  <LinearGradient start={[0.0, 0.9]} end={[1.0, 0.9]} 
                    colors={['#B34062','#B34062', '#333399']} 
                    style={{ padding: 15, alignItems: 'center', borderRadius: 5,height:'100%', borderBottomLeftRadius: 300,
                    borderBottomRightRadius: 300, }}>
                    
                  </LinearGradient>
              </View>
             
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Hesabim')}>
              <View style={{width:'90%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:160}}>
                <Ionicons name='ios-contact' size={40} color='#B34062' />
                <Text style={{fontFamily: 'yazimedium', fontSize: 18, width: '70%', textAlign: 'left',padding:10}}>Hesabım</Text>
                <Ionicons name='ios-arrow-forward' size={25} color='#7B7B7B' />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{width:'90%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20}}>
                <Ionicons name='ios-stats' size={40} color='#B34062' />
                <Text style={{fontFamily: 'yazimedium', fontSize: 18, width: '70%', textAlign: 'left',padding:10}}>İstatistikler</Text>
                <Ionicons name='ios-arrow-forward' size={25} color='#7B7B7B' />
              </View>
              </TouchableOpacity>
            
              <TouchableOpacity>
              <View style={{width:'90%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20}}>
                <Ionicons name='ios-notifications' size={40} color='#B34062' />
                <Text style={{fontFamily: 'yazimedium', fontSize: 18, width: '70%', textAlign: 'left',padding:10}}>Bildirimler</Text>
                <Ionicons name='ios-arrow-forward' size={25} color='#7B7B7B' />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{width:'90%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20}}>
                <Ionicons name='md-help-circle' size={40} color='#B34062' />
                <Text style={{fontFamily: 'yazimedium', fontSize: 18, width: '70%', textAlign: 'left',padding:10}}>Yardım</Text>
                <Ionicons name='ios-arrow-forward' size={25} color='#7B7B7B' />
              </View>
              </TouchableOpacity>
            
          </View>
        );
      
    
    
  
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
    top:0,
    left:0,
    zIndex:1,
    width:width,
    height:200,
    
    backgroundColor:'white',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
      },
    headeralt:{
      position: 'absolute',
      top:-180,
      left:-90,
      width:width+180,
      height:400,
      borderBottomLeftRadius:200,
      borderBottomRightRadius:200,
      shadowColor: "#B34062",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,

      elevation: 21,
          }
});
