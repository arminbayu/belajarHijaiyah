import React, { PureComponent, Fragment } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { default as customMapping } from '../theme/json/custom-mapping.json';
import { default as appTheme } from '../theme/json/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import SplashScreen from 'react-native-splash-screen';

import Home from '../pages/home';
import GoTo from './goto.js';

const theme = { ...lightTheme, ...appTheme };

const noheader = {
  headerShown: false,
  animationEnabled : false,
};

const GoToStack = createStackNavigator({
  GoTo: {
    screen: GoTo,
    navigationOptions: noheader
  },
},
{
  initialRouteParams : 'GoTo',
  navigationOptions: noheader
});

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: noheader
  },
}, {
  initialRouteParams: 'Home',
  navigationOptions: noheader
});

const AppStack = createStackNavigator({
  Home    : HomeStack,
  GoTo    : GoToStack,
});

const App = createSwitchNavigator({
  Dashboard : AppStack,
});

const AppNavigator = createAppContainer(App);

export default class Root extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount = () => {
    SplashScreen.hide();
  }

  render() {
    return (
      <Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme} customMapping={customMapping}>
          <AppNavigator />
        </ApplicationProvider>
      </Fragment>
    );
  }
}
