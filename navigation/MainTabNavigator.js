import React from 'react';
import { Platform,Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createSwitchNavigator } from 'react-navigation';
import KayitScreen from '../screens/KayitScreen';
import GirisScreen from '../screens/GirisScreen';
import LoadingScreen from '../screens/LoadingScreen';
import AnasayfaScreen from '../screens/AnasayfaScreen';
import TrendScreen from '../screens/TrendScreen';
import FavoriScreen from '../screens/FavoriScreen';
import HesabimScreen from '../screens/HesabimScreen';
import VideoDuzenleScreen from '../screens/VideoDuzenleScreen';
import ProfilDuzenleScreen from '../screens/ProfilDuzenleScreen';

const LoadingStack = createSwitchNavigator({
  Loading: LoadingScreen,
});
LoadingStack.navigationOptions = {
  header:null
};
const KayitStack = createSwitchNavigator({
  Kayit: KayitScreen,
});
KayitStack.navigationOptions = {
  header:null,
  gesturesEnabled: false,
};
const GirisStack = createBottomTabNavigator({
  Anasayfa: AnasayfaScreen,
  Trend:TrendScreen,
  Favori:FavoriScreen,
  Profil: GirisScreen,


});
GirisStack.navigationOptions = {
  header: null,
  headerBackTitle: 'Geri',
  gesturesEnabled: false,

};

const StackNav=createStackNavigator({
  Hesabim:HesabimScreen,
})
StackNav.navigationOptions = {

  title:'Hesabım',
  headerTintColor: '#3F3F3F',
  headerTitleStyle: {
    marginTop: 5,
    fontFamily: 'yazibold',
  },
};
const DuzenleStack=createStackNavigator({
  VideoDuzenle:VideoDuzenleScreen

})
DuzenleStack.navigationOptions = {

  title:'Video Düzenle',
  headerTintColor: '#3F3F3F',
  headerTitleStyle: {
    marginTop: 5,
    fontFamily: 'yazibold',
  },
};
const ProfilStack=createStackNavigator({
  ProfilDuzenle:ProfilDuzenleScreen

})
ProfilStack.navigationOptions = {

  title:'Profil Düzenle',
  headerTintColor: '#3F3F3F',
  headerTitleStyle: {
    marginTop: 5,
    fontFamily: 'yazibold',
  },
};
export default createStackNavigator({

  LoadingStack,
  KayitStack,
  GirisStack,
  StackNav,
  DuzenleStack,
  ProfilStack


},{
  
});
