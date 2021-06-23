import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from "react-native";
import { Layout, Select, Spinner } from '@ui-kitten/components';
import { Container } from '../theme';
const SCREEN_WIDTH = Dimensions.get('window').width;
import styles from '../theme/css/styles';

const renderItemIcon = (style) => (
  <Icon {...style} name='person' fill='#3366FF'/>
);
const widthHp  = Dimensions.get("window").width;
const heightHp = Dimensions.get("window").height;
const urlHome  = require('../theme/img/gbr-backround-home.png');

class Tentang extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kordinatBuah : [],
      selectBuah : [],
    }
  }

  componentDidMount = () => {
    this.timerHandle = setTimeout(() => {
    }, 0);
  }

  render() {
    return (
      <Container>
        <Layout style={[styles.container]}>
          <Image style={{width:widthHp, height:heightHp/2, resizeMode: 'stretch', position:'absolute', bottom:0}} source={urlHome} />
          <View style={{backgroundColor: '#00a6d9', borderColor : '#00a6d9', borderWidth : 1, alignItems:'center', paddingBottom:20, borderBottomLeftRadius: 100, borderBottomRightRadius: 100}}>
            <Text style={styles.text}>Belajar Hijaiyah</Text>
          </View>
          <Text style={[styles.button, {textAlign:'center'}]}>V 1.0</Text>
          <View style={{alignItems:'center', marginTop:50}}>
            <TouchableOpacity onPress={this.onPressLicenses} style={{borderRadius: 10, backgroundColor:'#000', paddingHorizontal:10, marginVertical:5}}>
              <Text style={[styles.button, {color:'#fff'}]}>LICENSES</Text>
            </TouchableOpacity>
          </View>
        </Layout>
      </Container>
    );
  }

  onPressLicenses = () => {
    this.props.navigation.push('GoTo', {
      page    : 'Licenses',
      params  : {
        action  : this._latihan,
        data    : 'array'
      }
    });
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

export default Tentang;
