import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import AppNavigator from './navigations/AppNavigator';

class AppInit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppInit;
