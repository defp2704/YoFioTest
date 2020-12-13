import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  onChangesTab,
} from '../actions/navigationActions';
import  {
  VideoFile,
} from '../components'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function VideoScreen({
  navigation,
}) {
  const store = useSelector(({ nav, files }) => ({ nav, files }));

  const {
    goBackPress,
    screen,
    files: { videos },
  } = store;

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(onChangesTab({ goBack: false, screen: 'video' }));
    });
  }, [dispatch, navigation]);

  useEffect(() => {
    if (navigation.canGoBack() && goBackPress && screen === 'video') {
      dispatch(onChangesTab({ goBack: false, screen: 'video' }));
      navigation.goBack();
    }
  }, [navigation, goBackPress, screen, dispatch]);

  const renderVideo = ({ item: itemPath }) => (
    <View style={styles.containerVideo}>
      <VideoFile itemPath={itemPath} />
    </View>
  )

  const getKeyItem = (_, index) => index.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        extraData={videos}
        renderItem={renderVideo}
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
  containerVideo: {
    width: wp('45%'),
    height: hp('30%'),
    margin: wp('2%'),
    borderRadius: wp('4%'),
    overflow: 'hidden',
  }, 
});