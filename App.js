import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyArdzeB7AIlEaD3sVrfQa49wKZaK-2R47o",
  authDomain: "video-ac159.firebaseapp.com",
  databaseURL: "https://video-ac159.firebaseio.com",
  projectId: "video-ac159",
  storageBucket: "video-ac159.appspot.com",
  messagingSenderId: "749648806542"
};
firebase.initializeApp(config);
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        require('./assets/images/video.png'),
        require('./assets/images/giris.gif'),
        require('./assets/images/video.jpeg')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'yazibold': require('./assets/fonts/Gilroy-Bold.ttf'),
        'yaziheavy': require('./assets/fonts/Gilroy-Heavy.ttf'),
        'yazilight': require('./assets/fonts/Gilroy-Light.ttf'),
        'yazimedium': require('./assets/fonts/Gilroy-Medium.ttf'),
        'yaziregular': require('./assets/fonts/Gilroy-Regular.ttf'),


      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
