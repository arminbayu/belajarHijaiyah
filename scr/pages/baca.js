import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import { Layout, Select, Spinner, Modal } from '@ui-kitten/components';
import { Container, ImgHijaiyah, ImgHarakat } from '../theme';
const SCREEN_WIDTH = Dimensions.get('window').width;
import styles from '../theme/css/styles';
import { dataHijaiyah } from '../data/arrayHijaiyah';
import { dataHarakat } from '../data/arrayHarakat';

const widthHp  = Dimensions.get("window").width;
const heightHp = Dimensions.get("window").height;
const urlKeranjang  = '../theme/img/gbr-keranjang.webp';

class Baca extends Component {

  constructor(props) {
    super(props);
    this.state = {
      halamanKe   : 0,
      harakat     : 1,
      canKembali  : true,
      canLanjut   : false,
      isModalBaca : true
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
        <Layout style={[styles.container,{backgroundColor: '#fff', alignItems:'center'}]}>
          <View style={styles.homeHeader}>
            <Text style={[styles.text, {fontSize: 40}]}>Baca Iqro</Text>
          </View>

          {this._renderContohBaca()}
          {this._renderBaca()}

          <View style={[styles.layoutBaca,{borderBottomWidth:0}]}>
            <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.50} disabled={this.state.canKembali} onPress={this._kembali}>
              <Text style={[styles.textModalDetail, {color:(!this.state.canKembali) ? '#00a6d9' : '#fff'}]}>{'< Kembali'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.50} disabled={this.state.canLanjut} onPress={this._lanjut}>
              <Text style={[styles.textModalDetail, {color:(!this.state.canLanjut) ? '#00a6d9' : '#fff'}]}>{'Lanjut >'}</Text>
            </TouchableOpacity>
          </View>
        </Layout>

        <Modal
          backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          visible={this.state.isModalBaca}>
          {this._renderModalTipeBaca()}
        </Modal>

      </Container>
    );
  }

  _renderModalTipeBaca = () => {
    return (
      <Layout level='1' style={{alignItems:'center', borderRadius: 15, borderColor : '#d4d4d4', borderWidth : 5}}>

        <View style={[styles.layoutModalHeader,{marginTop:0,paddingVertical:0, paddingBottom:10}]}>
          <Text style={[styles.text, {fontSize: 30}]}>Harakat</Text>
        </View>

        <View style={[styles.layoutSoal, {alignItems:'center', width: (widthHp-50)}]}>
          <TouchableOpacity style={styles.btnPilihBaca} onPress={() => this._selectBaca(1)} activeOpacity={0.75}>
            <Text style={[styles.txtPilihSoal,{fontSize:12}]}>Fathah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPilihBaca} onPress={() => this._selectBaca(2)} activeOpacity={0.75}>
            <Text style={[styles.txtPilihSoal,{fontSize:12}]}>Kasrah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPilihBaca} onPress={() => this._selectBaca(3)} activeOpacity={0.75}>
            <Text style={[styles.txtPilihSoal,{fontSize:12}]}>Dammah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPilihBaca} onPress={() => this._selectBaca(5)} activeOpacity={0.75}>
            <Text style={[styles.txtPilihSoal,{fontSize:12}]}>Fathatain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPilihBaca} onPress={() => this._selectBaca(6)} activeOpacity={0.75}>
            <Text style={[styles.txtPilihSoal,{fontSize:12}]}>Kasratain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPilihBaca} onPress={() => this._selectBaca(7)} activeOpacity={0.75}>
            <Text style={[styles.txtPilihSoal,{fontSize:12}]}>Dammatain</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    )
  }

  _selectBaca = (num) => {
    this.setState({
      harakat       : num,
      isModalBaca   : false,
    });
	}

  _lanjut = () => {
    this.setState({
      halamanKe  : (this.state.halamanKe+1),
      canKembali : false
    }, () =>{
      if (this.state.halamanKe == 6) {
        this.setState({ canLanjut : true});
      }
    });
	}

  _kembali = () => {
    this.setState({
      halamanKe : (this.state.halamanKe-1),
      canLanjut : false
    }, () =>{
      if (this.state.halamanKe == 0) {
        this.setState({ canKembali : true});
      }
    });
	}

  _renderContohBaca = () => {
    let ranHuruf = [];
  	for(let i = 4; i >= 1; i--){
      let num = i + (this.state.halamanKe * 4);
  		ranHuruf.push(
        <View style={{alignItems:'center', width:(widthHp-50)/4}}>
          {
            (this.state.harakat != 2 && this.state.harakat != 6) &&
            <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginBottom:-3}]}  params={{id:this.state.harakat}} />
          }
            <ImgHijaiyah style={[styles.photo]}  params={{id:num}} />
          {
            (this.state.harakat == 2 || this.state.harakat == 6) &&
            <ImgHarakat style={[styles.photo, {height: ((widthHp/5)-25)/2, marginBottom:-3}]}  params={{id:this.state.harakat}} />
          }
          <Text style={styles.textModalDetail}>{this.namaHijaiyah[num].baca+dataHarakat[this.state.harakat].baca}</Text>
        </View>
      )
  	}

    return (
      <View style={styles.layoutBacaContoh}>
        {ranHuruf}
      </View>
    )
	}

  _renderBaca = () => {
    let ranHurufRes = [];
  	for(let i = 1; i <= 4; i++){
  		ranHurufRes.push(
        <View style={styles.layoutBaca}>
          {this._renderBacaSub(i)}
        </View>
      )
  	}

    return (
      <>
      {ranHurufRes}
      </>
    )
	}

  _renderBacaSub = (data) => {
    let max       = 4 + (this.state.halamanKe * 4);
    let min       = ((this.state.halamanKe * 4) > 0) ? ((this.state.halamanKe * 4)+1-4) : 1;
    let numRan    = 1;
    let ranHuruf  = [];

  	for(let i = 1; i <= 3; i++){
      numRan = Math.floor(Math.random() * (max - min + 1) ) + min;
  		ranHuruf.push(
        <View style={{alignItems:'center'}}>
        {
          (this.state.harakat != 2 && this.state.harakat != 6) &&
          <ImgHarakat style={[styles.photoBaca, {height: (widthHp/7)/2, marginBottom:-3}]}  params={{id:this.state.harakat}} />
        }
          <ImgHijaiyah style={[styles.photoBaca]}  params={{id:numRan}} />
        {
          (this.state.harakat == 2 || this.state.harakat == 6) &&
          <ImgHarakat style={[styles.photoBaca, {height: (widthHp/7)/2, marginBottom:-3}]}  params={{id:this.state.harakat}} />
        }
        </View>
      )
  	}

		ranHuruf.push(
      <View style={{width:10}}></View>
    )

  	for(let i = 1; i <= 3; i++){
      numRan = Math.floor(Math.random() * (max - min + 1) ) + min;
  		ranHuruf.push(
        <View style={{alignItems:'center'}}>
        {
          (this.state.harakat != 2 && this.state.harakat != 6) &&
          <ImgHarakat style={[styles.photoBaca, {height: (widthHp/7)/2, marginBottom:-3}]}  params={{id:this.state.harakat}} />
        }
          <ImgHijaiyah style={[styles.photoBaca]}  params={{id:numRan}} />
        {
          (this.state.harakat == 2 || this.state.harakat == 6) &&
          <ImgHarakat style={[styles.photoBaca, {height: (widthHp/7)/2, marginBottom:-3}]}  params={{id:this.state.harakat}} />
        }
        </View>
      )
  	}

    return (
      <>
      {ranHuruf}
      </>
    )
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

export default Baca;
