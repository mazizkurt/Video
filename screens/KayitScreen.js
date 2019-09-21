import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableHighlight,
  Animated,
  Easing,
  Dimensions
} from 'react-native';
import { WebBrowser, Linking, AnimatedRegion } from 'expo';
import firebase from 'firebase'
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
const captchaUrl = `http://azizcoder.info.tr/firebase.html?appurl=${Linking.makeUrl('')}`
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class KayitScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alan: '',
      numara: '',
      focus: false,
      confirmationResult: undefined,
      codeHeight: new Animated.Value(0),
      scrollopacity: 1,
      scrollenabled: true,
      birinci:'',
      ikinci:'',
      ucuncu:'',
      dorduncu:'',
      besinci:'',
      altinci:'',
      basariliMi:false
    };
  }
  static navigationOptions = {
    header: null
  }
  giris = async () => {
    let token = null
    const listener = ({ url }) => {
      WebBrowser.dismissBrowser()
      const tokenEncoded = Linking.parse(url).queryParams['token']
      if (tokenEncoded)
        token = decodeURIComponent(tokenEncoded)
    }
    Linking.addEventListener('url', listener)
    await WebBrowser.openBrowserAsync(captchaUrl)
    Linking.removeEventListener('url', listener)
    if (token) {
      const phone = this.state.alan + this.state.numara;
      //fake firebase.auth.ApplicationVerifier
      const captchaVerifier = {
        type: 'recaptcha',
        verify: () => Promise.resolve(token)
      }
      try {
        const confirmationResult = await firebase.auth().signInWithPhoneNumber(phone, captchaVerifier)
        this.setState({ confirmationResult })
        this.setState({ scrollopacity: 0.4, scrollenabled: false })
        Animated.spring(this.state.codeHeight, {
          toValue: height / 1.4,
          duration: 100,
          easing: Easing.bounce,
          friction: 3
        }).start()


      } catch (e) {
        console.warn(e)
      }

    }
  }
  codeKapat = async () => {
    this.setState({ scrollopacity: 1, scrollenabled: true })
    this.setState({ confirmationResult:undefined })
    Animated.timing(this.state.codeHeight, {
      toValue: 0,
      duration: 600,
      easing: Easing.back()
    }).start()
  }
  basariliMi = async (code) => {
    const { confirmationResult } = this.state
    try {
            
      await confirmationResult.confirm(code)
      this.setState({basariliMi:true})
      fetch('http://azizcoder.info.tr/video/kayit.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telefon:  this.state.alan + this.state.numara,
          id:"a"+this.state.numara
        }),
      });

      console.log(code);
      } catch (e) {
          console.warn(e)
      }
   
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={[styles.container, { opacity: this.state.scrollopacity }]} scrollEnabled={this.state.scrollenabled}
          keyboardShouldPersistTaps='handled'>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" keyboardVerticalOffset={20} enabled={this.state.scrollenabled}>
            <View style={styles.icerik}>
              <Text style={{ marginTop: 100, fontFamily: 'yazimedium', fontSize: 18, width: '70%', textAlign: 'center' }}>Merhaba, Oyun video sever olarak uygulamamızı kullandığınız için teşekkür ederiz.Adımları takip ederek hesabınıza erişebilirsiniz.</Text>
              <Image source={require("../assets/images/video.png")} style={{ width: 100, height: 100, marginTop: 80 }} />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput style={{ borderRadius: 10, borderBottomWidth: 0.8, borderBottomColor: '#D7D7D7', width: '16%', height: 50, padding: 10, marginTop: 60, fontSize: 20, fontFamily: 'yazibold' }} placeholder="+90" keyboardAppearance="dark" keyboardType="phone-pad" maxLength={3} onChangeText={(alan) => {if(alan.length==3){this.setState({ alan }); this.numara.focus();}}} />
                <TextInput style={{ borderRadius: 10, borderBottomWidth: 0.8, borderBottomColor: '#D7D7D7', width: '50%', height: 50, padding: 10, marginTop: 60, fontSize: 20, fontFamily: 'yazibold' }} placeholder="Telefon" autoComplete="tel" keyboardAppearance="dark" keyboardType="number-pad" maxLength={10} autoFocus={this.state.focus} onChangeText={(numara) => this.setState({ numara })}   ref={(input) => { this.numara = input; }}/>
              </View>

              {this.state.alan.length == 3 && this.state.numara.length == 10 ? <TouchableOpacity onPress={this.giris} style={{ width: '70%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#B34062', borderRadius: 5, marginTop: 30 }}><Text style={{ fontSize: 24, color: 'white', fontFamily: 'yazibold', }}>GIRIS</Text></TouchableOpacity> : <TouchableOpacity style={{ width: '70%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEEEEE', borderRadius: 5, marginTop: 30 }} activeOpacity={1}><Text style={{ fontSize: 24, color: '#404042', fontFamily: 'yazibold', }}>GIRIS</Text></TouchableOpacity>}


            </View>
          </KeyboardAvoidingView>

        </ScrollView>
        <Animated.View style={{ width: '100%', height: this.state.codeHeight, backgroundColor: '#B34062', borderTopLeftRadius: 15, borderTopRightRadius: 15, alignItems: 'center', }}>
          <TouchableOpacity onPress={this.codeKapat} style={{position:'absolute',top:20,right:30}}><Ionicons name="ios-close" size={50} color="white" /></TouchableOpacity>
          <Text style={{ fontFamily: 'yazibold', color: 'white', fontSize: 30,marginTop:60 }}>Doğrulama Kodu</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            
            <TextInput
              style={{ fontFamily: 'yazibold', color: 'white', fontSize: 30, borderWidth: 3, borderRadius: 5, width: 30, borderColor: 'white', textAlign: 'center' }}
              placeholderTextColor="white"
              placeholder="-"
              maxLength={1}
              onChangeText={(alan) => {
                if (alan.length == 1) {
                  this.setState({birinci:alan})
                  this.secondTextInput.focus();
                }
              }}
              blurOnSubmit={false}
              autoComplete="tel" keyboardAppearance="dark" keyboardType="number-pad"
            />
            <View style={{ width: 5 }}></View>
            <TextInput
              style={{ fontFamily: 'yazibold', color: 'white', fontSize: 30, borderWidth: 3, borderRadius: 5, width: 30, borderColor: 'white', textAlign: 'center' }}
              placeholderTextColor="white"
              placeholder="-"
              ref={(input) => { this.secondTextInput = input; }}
              maxLength={1}
              onChangeText={(alan) => {
                if (alan.length == 1) {
                  this.setState({ikinci:alan})
                  this.ucuncu.focus();
                }
              }}
              blurOnSubmit={false}
              autoComplete="tel" keyboardAppearance="dark" keyboardType="number-pad"
            />
            <View style={{ width: 5 }}></View>

            <TextInput
              style={{ fontFamily: 'yazibold', color: 'white', fontSize: 30, borderWidth: 3, borderRadius: 5, width: 30, borderColor: 'white', textAlign: 'center' }}
              placeholderTextColor="white"
              placeholder="-"
              ref={(input) => { this.ucuncu = input; }}
              maxLength={1}
              onChangeText={(alan) => {
                if (alan.length == 1) {
                  this.setState({ucuncu:alan})
                  this.dorduncu.focus();
                }
              }}
              blurOnSubmit={false}
              autoComplete="tel" keyboardAppearance="dark" keyboardType="number-pad"
            />
            <View style={{ width: 5 }}></View>

            <TextInput
              style={{ fontFamily: 'yazibold', color: 'white', fontSize: 30, borderWidth: 3, borderRadius: 5, width: 30, borderColor: 'white', textAlign: 'center' }}
              placeholderTextColor="white"
              placeholder="-"
              ref={(input) => { this.dorduncu = input; }}
              maxLength={1}
              onChangeText={(alan) => {
                if (alan.length == 1) {
                  this.setState({dorduncu:alan})
                  this.besinci.focus();
                }
              }}
              blurOnSubmit={false}
              autoComplete="tel" keyboardAppearance="dark" keyboardType="number-pad"
            />
            <View style={{ width: 5 }}></View>

            <TextInput
              style={{ fontFamily: 'yazibold', color: 'white', fontSize: 30, borderWidth: 3, borderRadius: 5, width: 30, borderColor: 'white', textAlign: 'center' }}
              placeholderTextColor="white"
              placeholder="-"
              maxLength={1}
              ref={(input) => { this.besinci = input; }}
              onChangeText={(alan) => {
                if (alan.length == 1) {
                  this.setState({besinci:alan})
                  this.altinci.focus();
                }
              }}
              blurOnSubmit={false}
              autoComplete="tel" keyboardAppearance="dark" keyboardType="number-pad"
            />
            <View style={{ width: 5 }}></View>

            <TextInput
              style={{ fontFamily: 'yazibold', color: 'white', fontSize: 30, borderWidth: 3, borderRadius: 5, width: 30, borderColor: 'white', textAlign: 'center' }}
              placeholderTextColor="white"
              placeholder="-"
              maxLength={1}
              ref={(input) => { this.altinci = input; }}
              autoComplete="tel" keyboardAppearance="dark" keyboardType="number-pad"
              onChangeText={(alan) => {
                if (alan.length == 1) {
                  this.setState({altinci:alan})
                  try {
                    var code=this.state.birinci+this.state.ikinci+this.state.ucuncu+this.state.dorduncu+this.state.besinci+alan;
                    this.basariliMi(code);
                } catch (e) {
                    console.warn(e)
                }
                  


                }
              }}
            />
              <View style={{ width: 5 }}></View>

              {this.state.basariliMi?<Image source={require('../assets/images/basarili1.png')} style={{width:40,height:40}}/>:null}
          </View>
            

        </Animated.View>


      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  icerik: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});

