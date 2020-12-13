import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { permission, loadFiles } from './actions/fileSytemAction';

import AppNavigator from './navigations/AppNavigator';

function AppInit() {
  const store = useSelector(({ files }) => ({ files }));

  const {
    files: { permissionsAndroid },
  } = store;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(permission());
  }, []);

  useEffect(() => {
    if (permissionsAndroid) {
      dispatch(loadFiles());
    }
  }, [permissionsAndroid])

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
