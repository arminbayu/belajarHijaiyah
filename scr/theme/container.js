import React, { PureComponent } from 'react';
import { View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { PropTypes } from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class Container extends PureComponent {
    render() {
        return (
          <SafeAreaView style={[{flex: 1}, (Platform.OS === 'ios' ? {marginTop:20} : null)]}>
            <View style={styles.container} renderToHardwareTextureAndroid={true} shouldRasterizeIOS={true}>
              {this.props.children}
            </View>
          </SafeAreaView>
        );
    }
}

Container.propTypes = propTypes;
export default Container;
