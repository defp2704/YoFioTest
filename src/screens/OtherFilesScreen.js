import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import {
  OtherFile,
} from '../components'

import {
  onChangesTab,
} from '../actions/navigationActions';

export default function OtherFilesScreen({
  navigation,
}) {
  const store = useSelector(({ nav, files }) => ({ nav, files }));

  const {
    nav: { goBackPress },
    screen,
    files: { others },
  } = store;

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(onChangesTab({ goBack: false, screen: 'other' }));
    });
  }, [dispatch, navigation]);

  useEffect(() => {
    if (navigation.canGoBack() && goBackPress) {
      dispatch(onChangesTab({ goBack: false, screen: 'other' }));
      navigation.goBack();
    }
  }, [navigation, goBackPress, screen, dispatch]);

  const renderOther = ({ item: itemPath }) => (
    <View style={styles.containerOther}>
      <OtherFile itemPath={itemPath} />
    </View>
  )

  const getKeyItem = (_, index) => index.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={others}
        extraData={others}
        renderItem={renderOther}
        keyExtractor={getKeyItem}
        numColumns={2}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerOther: {
    width: wp('45%'),
    height: hp('30%'),
    margin: wp('2%'),
  }, 
});