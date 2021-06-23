import React, { PureComponent } from "react";
import { View, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { dataHarakat } from '../data/arrayHarakat';

class ImgHarakat extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let props  = this.props;
    let params = props?.params;
    return (
      <View>
      {
        (params && params.id < 99) ?
        <Image source={(params) ? dataHarakat[params.id].img : dataHarakat[1].img} style={props.style} />
        : <Image source={dataHarakat[0].img} style={props.style} />
      }

      </View>
    );
  }
}

ImgHarakat.defaultProps = {
  style: {}
};
export default ImgHarakat;
