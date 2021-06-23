import React, { PureComponent } from "react";
import { View, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { dataHijaiyah } from '../data/arrayHijaiyah';

class ImgHijaiyah extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let props  = this.props;
    let params = props?.params;
    return (
      <View >
      {
        (params && params.id < 99) ?
        <Image source={(params) ? dataHijaiyah[params.id].img : dataHijaiyah[1].img} style={props.style} />
        : <Image source={dataHijaiyah[0].img} style={props.style} />
      }

      </View>
    );
  }
}

ImgHijaiyah.defaultProps = {
  style: {}
};
export default ImgHijaiyah;
