import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT  = 150;
const RECIPE_ITEM_MARGIN  = 20;
const PICTURE_WIDTH       = (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    fontFamily: 'BalooDa2-SemiBold',
    fontSize: 24,
  },
  layoutSoal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'FredokaOne-Regular',
    fontSize: 60,
    textAlign: 'center',
    marginTop:10,
    color: '#3fff00cf',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: '#196600',
  },
  photo_detail: {
    marginTop: 10,
    width: PICTURE_WIDTH - 50,
    height: RECIPE_ITEM_HEIGHT - 50,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "absolute",
    bottom:'1%'
  },
  container_menu: {
    margin:5,
    padding:5,
    borderWidth : 1,
    borderColor : '#e0e0e0',
    borderRadius: 25
  },
  boxWithShadow: {
    elevation: 5
  },
  photo: {
    width: (width/5)-25,
    height: (width/5)-25,
    resizeMode: 'stretch'
  },
  photo_icon_signA: {
    width: (width/3),
    height: (width/3),
    resizeMode: 'stretch'
  },
  btnPilihSoal: {
    borderWidth : 5,
    borderColor : '#a38200',
    padding:5,
    margin:10,
    borderRadius: 25,
  },
  btnPilihBaca: {
    alignItems:'center',
    borderWidth : 2,
    borderColor : '#a38200',
    backgroundColor:'#dbaf00',
    padding:5,
    marginHorizontal:5,
    marginVertical:10,
    width:(width-100)/3,
    borderRadius: 25,
  },
  txtPilihSoal: {
    fontSize: 20,
    color: '#000',
    fontFamily: "BalooDa2-SemiBold"
  },
  textDetailNamaHijaiyah: {
    fontSize: 25,
    color: '#000',
    fontFamily: "BalooDa2-SemiBold"
  },
  textModalDetail: {
    fontSize: 25,
    color: '#000',
    fontFamily: "BalooDa2-SemiBold"
  },
  selectHijaiyah: {
    borderWidth : 2,
    borderColor : '#00a6d9',
    elevation: 2,
    borderRadius: 10,
    margin:5,
    padding:5,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  layoutModal: {
    width: (width-50),
    backgroundColor: '#fff',
    padding:10,
    borderRadius: 25,
    alignItems:'center',
    borderColor : '#d4d4d4',
    borderWidth : 5,
  },
  layoutModalDetail: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:(width-50),
    padding:10,
    borderColor : '#d4d4d4',
    borderTopWidth : 1
  },
  layoutBaca: {
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap: 'wrap',
    width:(width-50),
    borderColor : '#d4d4d4',
    borderBottomWidth : 1
  },

  photoBaca: {
    width: ((width-50)/7),
    height: ((width-50)/7),
    resizeMode: 'stretch',
  },

  layoutBacaContoh: {
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    width:(width-50),
    borderColor : '#d4d4d4',
    borderBottomWidth : 1
  },
  layoutModalHeader: {
    width:(width/2),
    backgroundColor: '#00a6d9',
    borderColor : '#00a6d9',
    borderWidth : 1,
    alignItems:'center',
    paddingVertical:10,
    marginTop:-10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  homeHeader: {
    width:width,
    backgroundColor: '#00a6d9',
    borderColor : '#00a6d9',
    borderWidth : 1,
    alignItems:'center',
    paddingBottom:20,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75
  },
  jawabanHijaiyah: {
    backgroundColor: '#fff',
    borderColor : '#d4d4d4',
    borderWidth : 2,
    margin:5,
    padding:5,
    borderRadius: 15,
    alignItems:'center',
    width: (width/6),
    height: ((width/10)+((width/10))/2)+25
  }
});

export default styles;
