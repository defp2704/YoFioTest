import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  onChangesTab,
} from '../actions/navigationActions';

import { 
  AudioFile,
} from '../components'

export default function MusicScreen({
  navigation,
}) {
  const store = useSelector(({ nav, files }) => ({ nav, files }));

  const {
    nav: { goBackPress },
    screen,
    files: { audios },
  } = store;

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(onChangesTab({ goBack: false, screen: 'musica' }));
    });
  }, [dispatch, navigation]);

  useEffect(() => {
    if (navigation.canGoBack() && goBackPress && screen === 'musica') {
      navigation.goBack();
      dispatch(onChangesTab({ goBack: false, screen: 'musica' }));
    }
  }, [navigation, goBackPress, screen, dispatch]);


  const renderAudios = ({ item: itemPath }) => (
    <View style={styles.containerAudio}>
      <AudioFile itemPath={itemPath} />
    </View>
  )

  const getKeyItem = (_, index) => index.toString();
  
  return (
    <View style={styles.container}>
      <FlatList
        data={audios}
        extraData={audios}
        renderItem={renderAudios}
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
  containerAudio: {
    width: wp('45%'),
    height: hp('30%'),
    margin: wp('2%'),
  }, 
});