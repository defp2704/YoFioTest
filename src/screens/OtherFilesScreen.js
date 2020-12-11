import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  onChangesTab,
} from '../actions/navigationActions';

export default function OtherFilesScreen({
  navigation,
}) {
  const store = useSelector(({ nav, files }) => ({ nav, files }));

  const {
    goBackPress,
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>OthersFiles: {others.length} </Text>
    </View>
  );
}
