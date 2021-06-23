import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Image, LogBox } from 'react-native';
import { Dimensions } from "react-native";
import { Layout, Select, Spinner, Button, Modal } from '@ui-kitten/components';
import { Container, ImgHijaiyah, ImgHarakat } from '../theme';
import styles from '../theme/css/styles';
import { dataHijaiyah } from '../data/arrayHijaiyah';
import { dataHarakat } from '../data/arrayHarakat';

const renderItemIcon = (style) => (
  <Icon {...style} name='person' fill='#3366FF'/>
);
const widthHp  = Dimensions.get("window").width;
const heightHp = Dimensions.get("window").height;

class Latihan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      waktu:300,
      tingkat:'Iqro 1',
      ansLv:1,
      harakatSelect:7,
      hijaiyahAns:1,
      ansIndex:1,
      num_gif:1,
      hijaiyah:true,
      isModalSoal:true,
      harakat:false,
      dataText:[{'hijaiyah' : '', 'harakat' : '', 'latin' : '', 'jawab_hijaiyah' : '', 'jawab_harakat' : ''}],
    }

    this.jawabanBenar = [
      {'url':require('../theme/img/gif-game/jawab-benar-1.gif')},
      {'url':require('../theme/img/gif-game/jawab-benar-2.gif')},
      {'url':require('../theme/img/gif-game/jawab-benar-3.gif')},
      {'url':require('../theme/img/gif-game/jawab-benar-4.gif')},
      {'url':require('../theme/img/gif-game/jawab-benar-5.gif')},
    ];
    this.jawabanSalah = [
      {'url':require('../theme/img/gif-game/jawab-salah-1.gif')},
      {'url':require('../theme/img/gif-game/jawab-salah-2.gif')},
      {'url':require('../theme/img/gif-game/jawab-salah-3.gif')},
      {'url':require('../theme/img/gif-game/jawab-salah-4.gif')},
      {'url':require('../theme/img/gif-game/jawab-salah-5.gif')},
    ];
    this.blockHijaiyah = [1,4,6,9,14,15,16,17,18];
  }

  componentDidMount = () => {
    this.timerHandle = setTimeout(() => {
    }, 0);
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }

  _randomSoal = () => {
    let ranHuruf = [];
  	for(let i = 1; i < dataHijaiyah.length; i++){
      if (!this.blockHijaiyah.includes(i)) {
        ranHuruf.push(
          <TouchableOpacity onPress={() => this._press(i)} style={styles.selectHijaiyah} activeOpacity={0.75}>
            <ImgHijaiyah style={stylesBuah.stretch}  params={{id:i}} />
          </TouchableOpacity>
        )
      }
  	}
    ranHuruf.push(
      <TouchableOpacity onPress={() => this._pressDel()} style={[styles.selectHijaiyah, {borderColor : '#ff0000'}]} activeOpacity={0.75}>
        <Text style={[styles.txtPilihSoal, {fontFamily: 'BalooDa2-Bold'}]}>Hapus</Text>
      </TouchableOpacity>
    )
    ranHuruf.push(
      <TouchableOpacity onPress={() => this._pressResult()} style={[styles.selectHijaiyah, {borderColor : '#3fff00cf'}]} activeOpacity={0.75}>
        <Text style={[styles.txtPilihSoal, {fontFamily: 'BalooDa2-Bold'}]}>Nilai</Text>
      </TouchableOpacity>
    )

    return (
      <View style={[styles.layoutSoal,{width:widthHp}]}>
        { ranHuruf }
      </View>
    )
	}

  _randomHarakat = () => {
    let ranHuruf = [];
  	for(let i = 1; i <= this.state.harakatSelect; i++){
  		ranHuruf.push(
        <TouchableOpacity onPress={() => this._pressHarakat(i)} style={styles.selectHijaiyah} activeOpacity={0.75}>

          {
            (dataHarakat[i].posisi == 'bawah') &&
            <View style={{borderBottomWidth:1, borderBottomColor:'#000', marginVertical:5}} />
          }
          <ImgHarakat style={stylesBuah.stretchHarakatTuch}  params={{id:i}} />
          {
            (dataHarakat[i].posisi == 'atas') &&
            <View style={{borderBottomWidth:1, borderBottomColor:'#000', marginVertical:5}} />
          }

        </TouchableOpacity>
  		)
  	}

    return (
      <View style={[styles.layoutSoal,{width:widthHp}]}>
        { ranHuruf }
      </View>
    )
	}

  render() {
    return (
      <Container>
        <Layout style={[styles.container,{backgroundColor: '#f0f0f0'}]}>
        <View style={{backgroundColor: '#00a6d9', borderColor : '#00a6d9', borderWidth : 1, alignItems:'center', paddingBottom:10, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
          <Text style={[styles.text, {fontSize: 35}]}>Susun Hijaiyah</Text>
        </View>
          <View style={[styles.layoutSoal,{width:widthHp, marginTop:0}]}>
            {this._renderJawaban()}
          </View>

            <View style={[styles.container, {alignItems:'center', backgroundColor:'#ffcc00', position: 'absolute', bottom:0}]}>
              <View style={{width:widthHp ,flexDirection:'row', justifyContent: 'space-between', paddingHorizontal:10, backgroundColor:'#fff'}}>
                <Text style={{fontSize: 20, fontFamily: "BalooDa2-SemiBold"}}>Tingkat : <Text style={{color: '#001eff'}}>{this.state.tingkat}</Text></Text>
                {
                  (this.state.tingkat == 'Ujian') &&
                    <Text style={{fontSize: 20, fontFamily: "BalooDa2-SemiBold"}}>Waktu : <Text style={{color: '#001eff'}}>{this.state.waktu}</Text></Text>
                }
              </View>
              {
                (this.state.hijaiyah) &&
                  <View style={{marginBottom:0}}>
                    {this._randomSoal()}
                  </View>
              }

              {
                (this.state.harakat) &&
                <View style={{marginBottom:100}}>
                  {this._randomHarakat()}
                </View>
              }
            </View>


        </Layout>

        <Modal
          backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          visible={this.state.isModalSoal}>
          {this._renderModalTipeSoal()}
        </Modal>

        <Modal
          backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          visible={this.state.isModal}>
          {this._renderModal(this.state.num_gif)}
        </Modal>

      </Container>
    );
  }

  _press = (num) => {
    this.setState({ hijaiyah : false }, () => {
      this.setState({ harakat : true, hijaiyahAns : num});
    });
  }

  _pressHarakat = (num) => {
    this.setState({ harakat : false }, () => {
      let newArray = this.state.dataText.map(el => (
        el.id===this.state.ansIndex? {...el, jawab_hijaiyah: this.state.hijaiyahAns, jawab_harakat : num, status:((el.hijaiyah == this.state.hijaiyahAns && el.harakat == num) ? '1' : '2')}: el
      ));

      this.setState({ hijaiyah : true, dataText : newArray, ansIndex : (this.state.ansIndex+1) });
    });
  }

  _pressDel = () => {
    this.setState({ harakat : false }, () => {
      if (this.state.ansIndex > 1) {
        let index = this.state.ansIndex-1;
        let newArray = this.state.dataText.map(el => (
          (el.id===index) ? {...el, jawab_hijaiyah: '', jawab_harakat : '', status:''} : el
        ));

        this.setState({ hijaiyah : true, dataText : newArray, ansIndex : index });
      }
    });
  }

  _pressResult = () => {
    let score = 0;
    let plus = 100 / this.state.dataText.length;
    this.state.dataText.map((item, index) => {
      if (item.status == 1) {
        score += plus;
      }
    });

    this.setState({ isModal : true, jawaban : score.toFixed(0), num_gif : Math.floor(Math.random() * 4) });
  }

  _renderModalTipeSoal = () => {
    return (
      <Layout level='1' style={{alignItems:'center', borderRadius: 15, borderColor : '#d4d4d4', borderWidth : 5}}>

        <View style={[styles.layoutModalHeader,{marginTop:0,paddingVertical:0, paddingBottom:10}]}>
          <Text style={[styles.text, {fontSize: 30}]}>Tingkat</Text>
        </View>

        <View style={[styles.layoutSoal, {alignItems:'center', width: (widthHp-50)}]}>
          <TouchableOpacity style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} onPress={() => this._selectSoal(10, 1, 1, 'Iqro 1')} activeOpacity={0.75}>
            <Text style={styles.txtPilihSoal}>Iqro 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} onPress={() => this._selectSoal(10, 2, 1, 'Iqro 2')} activeOpacity={0.75}>
            <Text style={styles.txtPilihSoal}>Iqro 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} onPress={() => this._selectSoal(15, 4, 1, 'Iqro 3')} activeOpacity={0.75}>
            <Text style={styles.txtPilihSoal}>Iqro 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} onPress={() => this._selectSoal(15, 7, 1, 'Iqro 4')} activeOpacity={0.75}>
            <Text style={styles.txtPilihSoal}>Iqro 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} onPress={() => this._selectSoal(20, 7, 1, 'Iqro 5')} activeOpacity={0.75}>
            <Text style={styles.txtPilihSoal}>Iqro 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00'}]} onPress={() => this._selectSoal(20, 7, 2, 'Ujian')} activeOpacity={0.75}>
            <Text style={styles.txtPilihSoal}>Ujian</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    )
  }

  _selectSoal = (hijaiyah, harakat, lv, strLv) => {
    this.setState({ isModalSoal : false, harakatSelect : harakat, tingkat : strLv }, () => {
      let createdArray = [];
      let ranHuruf = [];
    	for(let i = 1; i <= hijaiyah; i++){
        let ranHijaiyah = Math.floor(Math.random() * 28)+1;
        let ranHarakat  = Math.floor(Math.random() * harakat)+1
        while (this.blockHijaiyah.includes(ranHijaiyah)) {
          ranHijaiyah = Math.floor(Math.random() * 28)+1;
        }

        let latin = dataHijaiyah[ranHijaiyah].baca + dataHarakat[ranHarakat].baca;
        if ((ranHijaiyah == 26 && ranHarakat == 4) || (ranHijaiyah == 28 && ranHarakat == 4)) {
          latin = dataHijaiyah[ranHijaiyah].sukun;
        }
        createdArray.push({'id' : i, 'hijaiyah' : ranHijaiyah, 'harakat' : ranHarakat, 'latin' : latin, 'jawab_hijaiyah' : '', 'jawab_harakat' : '', 'status' : ''});
    	}

      this.setState({ dataText : createdArray, ansIndex : 1, ansLv : lv}, () => {
        this._renderJawaban(lv);
      });
    });
  }

  _renderJawaban = (lv) => {
      let ranHuruf = [];
      let colorText = '#000';
      let colorBorder = '#d4d4d4';
      this.state.dataText.map((item, index) => {
        colorText = '#000';
        colorBorder = '#d4d4d4';
        if (this.state.ansLv == 1) {
          if (this.state.ansIndex == item.id) {
            colorText = '#001eff';
            colorBorder = '#001eff';
          } else if (item.status == '2') {
            colorText = '#ff0000';
            colorBorder = '#ff0000';
          } else if (item.status == '1') {
            colorText = '#34d400';
            colorBorder = '#34d400';
          }
        }

    		ranHuruf.push(
          <View style={[styles.jawabanHijaiyah,{borderColor: colorBorder}]}>
            {
              (item.jawab_harakat != '' && dataHarakat[item.jawab_harakat].posisi == 'atas') &&
              <ImgHarakat style={[stylesBuah.stretchHarakat,{marginBottom:-3, height: (widthHp/11)/2}]}  params={{id:dataHarakat[item.jawab_harakat].id}} />
            }
            {
              (item.jawab_hijaiyah != '') &&
              <ImgHijaiyah style={[stylesBuah.stretch,{height: (widthHp/11)}]}  params={{id:dataHijaiyah[item.jawab_hijaiyah].id}} />
            }

            {
              (item.jawab_harakat != '' && dataHarakat[item.jawab_harakat].posisi == 'bawah') &&
              <ImgHarakat style={[stylesBuah.stretchHarakat,{marginTop:-3, height: (widthHp/11)/2}]}  params={{id:dataHarakat[item.jawab_harakat].id}} />
            }

            <View style={{alignItems:'center', marginTop:-5}}>
              <Text style={[styles.txtPilihSoal,{color: colorText}]}>{item.latin}</Text>
            </View>

          </View>
    		)
      });

    return (
      <View style={[styles.layoutSoal,{width:widthHp}]}>
        { ranHuruf }
      </View>
    )
	}

  _renderModal = (num) => {
    return (
      <Layout level='3' style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignItems:'center'}}>
        {
          (this.state.jawaban > 50) ?
            <Image style={styles.photo_icon_signA} source={this.jawabanBenar[num].url} />
          : <Image style={styles.photo_icon_signA} source={this.jawabanSalah[num].url} />
        }
        <Text style={{fontFamily: "BalooDa2-ExtraBold", fontSize: 50, marginTop:-10 ,color:((this.state.jawaban > 50) ? '#3fff00cf' : '#ff0000')}}>{this.state.jawaban+' / 100'}</Text>
        <Text style={{fontFamily: "BalooDa2-Bold", fontSize: 40, marginTop:-10 ,color:'#3fff00cf'}}>{(this.state.jawaban > 50) ? 'Ditingkatkan ya..' : 'Belajar lagi yukk..'}</Text>

        <TouchableOpacity style={[styles.btnPilihSoal, {backgroundColor:'#dbaf00', width:150}]} onPress={() => this._newLatih()} activeOpacity={0.75}>
          <Text style={[styles.txtPilihSoal, {textAlign: 'center', fontFamily: "BalooDa2-Bold"}]}>Lagi Yukk..</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnPilihSoal, {backgroundColor:'#d4d4d4', width:150}]} onPress={() => this._backMenu()} activeOpacity={0.75}>
          <Text style={[styles.txtPilihSoal, {textAlign: 'center', fontFamily: "BalooDa2-Bold"}]}>Kembali</Text>
        </TouchableOpacity>
      </Layout>
    )
  }

  _newLatih = () => {
    this.setState({ isModal : false}, () => {
      this.setState({ isModalSoal : true});
    });
  }

  _backMenu = () => {
    this.props.navigation.pop();
  }

}

const stylesBuah = StyleSheet.create({
  stretch: {
    width: (widthHp/10),
    height: (widthHp/10),
    resizeMode: 'stretch'
  },
  stretchHarakat: {
    width: (widthHp/10),
    height: ((widthHp/10))/2,
    resizeMode: 'stretch'
  },
  stretchHarakatTuch: {
    width: (widthHp/6),
    height: ((widthHp/6))/2,
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

export default Latihan;
