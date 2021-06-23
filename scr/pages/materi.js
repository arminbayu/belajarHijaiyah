import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import { Layout, Select, Spinner, Modal } from '@ui-kitten/components';
import { Container, ImgHijaiyah, ImgHarakat } from '../theme';
const SCREEN_WIDTH = Dimensions.get('window').width;
import styles from '../theme/css/styles';
import { dataHijaiyah } from '../data/arrayHijaiyah';
import { dataHarakat } from '../data/arrayHarakat';

const renderItemIcon = (style) => (
  <Icon {...style} name='person' fill='#3366FF'/>
);
const widthHp  = Dimensions.get("window").width;
const heightHp = Dimensions.get("window").height;
const urlKeranjang  = '../theme/img/gbr-keranjang.webp';

class Materi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numHijaiyah : 1
    }

    this.hijaiyah = [];
    for (var i = 1; i < dataHijaiyah.length; i++) {
      this.hijaiyah.push(i);
    }

    this.namaHijaiyah = dataHijaiyah;
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <Container>
        <Layout style={[styles.container,{backgroundColor: '#ffd117', alignItems:'center'}]}>
          <View style={styles.homeHeader}>
            <Text style={[styles.text, {fontSize: 40}]}>Huruf Hijaiyah</Text>
          </View>

          <FlatList
            data={this.hijaiyah}
            renderItem={this.renderItemHijaiyah}
            keyExtractor={index => index}
            horizontal={false}
            numColumns={5}
          />
        </Layout>

        <Modal
          onBackdropPress={this.onModalHide}
          backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          visible={this.state.isModal}>
          {this._renderModal()}
        </Modal>
      </Container>
    );
  }

  _renderModal = () => {
    return (
      <Layout level='3' style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
        <View style={styles.layoutModal}>
        {
          (this.state.numHijaiyah < 99) ?
          <>

            <View style={styles.layoutModalHeader}>
              <Text style={[styles.text, {fontSize: 30, marginTop:0}]}>Baca</Text>
            </View>

            <ImgHijaiyah style={[styles.photo_icon_signA, {tintColor:'#a38200'}]}  params={{id:this.state.numHijaiyah}} />
            <Text style={styles.textDetailNamaHijaiyah}>{this.namaHijaiyah[this.state.numHijaiyah].nama}</Text>

            <View style={styles.layoutModalDetail}>
              <View style={{alignItems:'center', width:((widthHp-50)/4-10)}}>
                <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginBottom:-3}]}  params={{id:1}} />
                <ImgHijaiyah style={[styles.photo]}  params={{id:this.state.numHijaiyah}} />
                <Text style={styles.textModalDetail}>{this.namaHijaiyah[this.state.numHijaiyah].baca+dataHarakat[1].baca}</Text>
              </View>
              <View style={{alignItems:'center', width:((widthHp-50)/4-10)}}>
                <ImgHijaiyah style={[styles.photo]}  params={{id:this.state.numHijaiyah}} />
                <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginTop:-3}]}  params={{id:2}} />
                <Text style={styles.textModalDetail}>{this.namaHijaiyah[this.state.numHijaiyah].baca+dataHarakat[2].baca}</Text>
              </View>
              <View style={{alignItems:'center', width:((widthHp-50)/4-10)}}>
                <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginBottom:-3}]}  params={{id:3}} />
                <ImgHijaiyah style={[styles.photo]}  params={{id:this.state.numHijaiyah}} />
                <Text style={styles.textModalDetail}>{this.namaHijaiyah[this.state.numHijaiyah].baca+dataHarakat[3].baca}</Text>
              </View>
              <View style={{alignItems:'center', width:((widthHp-50)/4-10)}}>
                <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginTop:-3}]}  params={{id:4}} />
                <ImgHijaiyah style={[styles.photo]}  params={{id:this.state.numHijaiyah}} />
                <Text style={styles.textModalDetail}>{((this.namaHijaiyah[this.state.numHijaiyah].sukun) ? this.namaHijaiyah[this.state.numHijaiyah].sukun : this.namaHijaiyah[this.state.numHijaiyah].baca )+dataHarakat[4].baca}</Text>
              </View>
            </View>

            <View style={styles.layoutModalDetail}>
              <View style={{alignItems:'center', width:((widthHp-50)/3-10)}}>
                <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginBottom:-3}]}  params={{id:5}} />
                <ImgHijaiyah style={[styles.photo]}  params={{id:this.state.numHijaiyah}} />
                <Text style={styles.textModalDetail}>{this.namaHijaiyah[this.state.numHijaiyah].baca+dataHarakat[5].baca}</Text>
              </View>
              <View style={{alignItems:'center', width:((widthHp-50)/3-10)}}>
                <ImgHijaiyah style={[styles.photo]}  params={{id:this.state.numHijaiyah}} />
                <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginTop:-3}]}  params={{id:6}} />
                <Text style={styles.textModalDetail}>{this.namaHijaiyah[this.state.numHijaiyah].baca+dataHarakat[6].baca}</Text>
              </View>
              <View style={{alignItems:'center', width:((widthHp-50)/3-10)}}>
                <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginBottom:-3}]}  params={{id:7}} />
                <ImgHijaiyah style={[styles.photo]}  params={{id:this.state.numHijaiyah}} />
                <Text style={styles.textModalDetail}>{this.namaHijaiyah[this.state.numHijaiyah].baca+dataHarakat[7].baca}</Text>
              </View>
            </View>

          </>
          :
          <Text style={styles.textModalDetail}>Ditunggu ya, insyaallah secepatnya akan kami update kok</Text>
        }
        </View>
      </Layout>
    )
  }

  renderItemHijaiyah = ( data ) => {
    return (
      <TouchableOpacity onPress={() => this.onPressDetail(data)} style={[styles.container_menu,styles.boxWithShadow,{backgroundColor: '#FFF'}]} activeOpacity={0.75} >
      {
        <ImgHijaiyah style={styles.photo}  params={{id:data.item}} />
      }
      </TouchableOpacity>
    )
  }

  onModalHide = () => {
    this.setState({ isModal : false });
  }
  onPressDetail = ( data ) => {
    this.setState({ isModal : true, numHijaiyah : data.item });
  }

}

const stylesHijaiyah = StyleSheet.create({
  stretch: {
    width: (widthHp/3),
    height: (widthHp/3),
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

export default Materi;
