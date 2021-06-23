import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Image, BackHandler } from 'react-native';
import { Dimensions } from "react-native";
import { Layout, Select, Spinner, Button, Icon } from '@ui-kitten/components';
import { Container, Calert } from '../theme';
import styles from '../theme/css/styles';
const SCREEN_WIDTH = Dimensions.get('window').width;

const StarIcon = (style) => (
  <Icon {...style} name='star'/>
);

const widthHp  = Dimensions.get("window").width;
const heightHp = Dimensions.get("window").height;
const urlHomeLaki  = require('../theme/img/gbr-laki-home.png');
const urlHomePerempuan  = require('../theme/img/gbr-perempuan-home.png');
const urlDasar  = require('../theme/img/gbr-dasar.png');

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAlert      : false,
      paramsAlert  : [],
      kordinatBuah : [],
      selectBuah   : [],
    }
    this.randBuah1 = 1;
    this.randBuah2 = 2;
    this.randBuah3 = 3;
    this.randBuah4 = 4;
  }

  componentDidMount = () => {
    this.timerHandle = setTimeout(() => {
    }, 0);
  }

  UNSAFE_componentWillMount = () => {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
  }

  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      this.setState({
          isAlert : true,
          paramsAlert : {
            title          : 'Hey',
            message        : 'Aplikasi akan tertutup loh, apa kamu yakin..',
            negativeLabel  : 'Nggak',
            positiveLabel  : 'Iya',
            dualButton     : true,
            positiveAction : this.exitApp,
            action         : this.hideAlert
        },
      });
      return true;
    }
  }

  exitApp = () => {
    BackHandler.exitApp();
  }

  hideAlert = () => {
    this.setState({isAlert : !this.state.isAlert});
  }

  render() {
    return (
      <Container>
        <Layout style={[styles.container, {backgroundColor:'#fff'}]}>
          <View style={{backgroundColor: '#00a6d9', borderColor : '#00a6d9', borderWidth : 1, alignItems:'center', paddingBottom:20, borderBottomLeftRadius: 100, borderBottomRightRadius: 100}}>
            <Text style={styles.text}>Belajar Hijaiyah</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Image style={{height:widthHp/2, width:(widthHp*1.5),resizeMode: 'stretch', position:'absolute', bottom:-40}} source={urlDasar} />
            <Image style={{width:widthHp/2, height:heightHp/2, resizeMode: 'stretch', position:'absolute', bottom:0, left:-40}} source={urlHomeLaki} />
            <Image style={{width:widthHp/2, height:heightHp/2, resizeMode: 'stretch', position:'absolute', bottom:0, right:-40}} source={urlHomePerempuan} />
            <TouchableOpacity onPress={this.onPressMateri} style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} activeOpacity={0.75} >
              <Text style={[styles.button, {color:'#fff'}]}>Materi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressBaca} style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} activeOpacity={0.75} >
              <Text style={[styles.button, {color:'#fff'}]}>Baca Iqro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressLatihan} style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} activeOpacity={0.75} >
              <Text style={[styles.button, {color:'#fff'}]}>Latihan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressTentang} style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} activeOpacity={0.75} >
              <Text style={[styles.button, {color:'#fff'}]}>Tentang App</Text>
            </TouchableOpacity>
          </View>
        </Layout>

        <Calert visible={this.state.isAlert} params={this.state.paramsAlert}/>
      </Container>
    );
  }

  onPressMateri = () => {
    this.props.navigation.push('GoTo', {
      page    : 'Materi',
      params  : {
        action  : this._materi,
        data    : 'array'
      }
    });
  }

  onPressBaca = () => {
    this.props.navigation.push('GoTo', {
      page    : 'Baca',
      params  : {
        action  : this._baca,
        data    : 'array'
      }
    });
  }

  onPressLatihan = () => {
    this.props.navigation.push('GoTo', {
      page    : 'Latihan',
      params  : {
        action  : this._latihan,
        data    : 'array'
      }
    });
  }

  onPressTentang = () => {
    this.props.navigation.push('GoTo', {
      page    : 'Tentang',
      params  : {
        action  : this._latihan,
        data    : 'array'
      }
    });
  }

  _latihan = () => {
  }

}

const stylesBuah = StyleSheet.create({
  stretch: {
    width: (widthHp/8),
    height: 50,
    resizeMode: 'stretch'
  },
  keranjang: {
    width: (widthHp/1.25),
    height: (widthHp/4),
    resizeMode: 'stretch'
  },
  keranjangPosition: {
    position:'absolute',
    bottom:0,
    left:((widthHp - (widthHp/1.25))/2)
  }
});

export default Home;
