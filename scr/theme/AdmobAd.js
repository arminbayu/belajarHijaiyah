import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { AdMobBanner } from 'react-native-admob';


export default class AdmobAd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      originalAdSize: this._getOriginalAdSize(this.props.adSize),
      height        : 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.height != nextState.height) {
      return true;
    }
    return false;
  }

  _getOriginalAdSize = (adSize) => {

    let originalDimensions;

    switch (adSize) {
      case 'banner':
        originalDimensions = [320,50];
        break;
      case 'largeBanner':
        originalDimensions = [320,100];
        break;
      case 'mediumRectangle':
        originalDimensions = [300,250];
        break;
      case 'fullBanner':
        originalDimensions = [468,60];
        break;
      case 'leaderboard':
        originalDimensions = [728,90];
        break;
      default:
        originalDimensions = [320,50];
        break;
    }

    return {originalWidth: originalDimensions[0], originalHeight: originalDimensions[1]};
  }

  render() {
    const { width, height, adSize, admobAdUnitID} = this.props;
    const {originalWidth, originalHeight } = this.state.originalAdSize;
    const scale = width/originalWidth;

    return (
      <View style={[this.props.style, {width:width, height:this.state.height, overflow: 'hidden', paddingVertical : (this.state.height > 0 ? 4 : 0)}]}>

        <View style={{
            width    : originalWidth,
            height   : originalHeight,
            transform: [
              {translateX: -((originalWidth-width)/2)},
              {translateY: -((originalHeight-height)/2)},
            ]
        }}>

            <AdMobBanner
              adSize                = {adSize}
              style                 = {{
                transform: [
                { scale:scale },
              ]}}
              adUnitID= {admobAdUnitID}
              onAdLoaded={() => this._setHeight(height)}
              adFailedToLoad={() => console.warn('fail')}
            />
        </View>

      </View>
    )
  }

  _setHeight= (height) => {
    this.setState({height : height});
  }
}
