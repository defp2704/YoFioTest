import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { permission, loadFiles } from './actions/fileSytemAction';

import AppNavigator from './navigations/AppNavigator';

function AppInit() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(permission());
    dispatch(loadFiles());
  }, []);

  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppInit;
