import React, { PureComponent } from 'react';
import { View } from 'react-native';

const IMPORT_COMPONENT = {
  'Home'    : require('../pages/home').default,
  'Materi'  : require('../pages/materi').default,
  'Latihan' : require('../pages/latihan').default,
  'Tentang' : require('../pages/tentang').default,
  'Licenses': require('../pages/licenses').default,
  'Baca'    : require('../pages/baca').default,
}

class GoTo extends PureComponent {

  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
  }

  render() {
    const Component = IMPORT_COMPONENT[this.params.page];
    return (<Component navigation={this.props.navigation} params={this.params.params} />);
  }

}

export default GoTo;
