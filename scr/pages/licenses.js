import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Image, Linking } from 'react-native';
import { Dimensions } from "react-native";
import { Layout, Select, Spinner } from '@ui-kitten/components';
import { Container } from '../theme';
import styles from '../theme/css/styles';

const renderItemIcon = (style) => (
  <Icon {...style} name='person' fill='#3366FF'/>
);
const widthHp  = Dimensions.get("window").width;
const heightHp = Dimensions.get("window").height;

class Licenses extends Component {

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
        <Layout style={[styles.container, {justifyContent:'center'}]}>
          <Text style={[styles.txtPilihSoal,{color: 'blue', marginLeft:25}]} onPress={() => Linking.openURL('https://tenor.com/search/mocha-stickers')}>
            mocha-stickers
          </Text>

          <Text style={[styles.txtPilihSoal,{color: 'blue', marginLeft:25}]}>
            Brgfx
          </Text>
            <View>
              <Text style={[styles.txtPilihSoal,{color: '#d4d4d4', marginLeft:45}]} onPress={() => Linking.openURL('https://www.freepik.com/free-vector/arab-boy-and-girl-in-traditional-clothing-in-color-and-silhouette-on-white-background_9306273.htm')}>
                - arab-boy-and-girl
              </Text>
              <Text style={[styles.txtPilihSoal,{color: '#d4d4d4', marginLeft:45}]} onPress={() => Linking.openURL('https://www.freepik.com/free-vector/set-of-different-people-cartoon-character-on-white-background_9306023.htm')}>
                - people-cartoon-character
              </Text>
              <Text style={[styles.txtPilihSoal,{color: '#d4d4d4', marginLeft:45}]} onPress={() => Linking.openURL('https://www.freepik.com/free-vector/different-shapes-of-island_1250788.htm')}>
                - different-shapes-of-island
              </Text>
            </View>

        </Layout>
      </Container>
    );
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

export default Licenses;
