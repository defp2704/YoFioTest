import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  onChangesTab,
} from '../actions/navigationActions';

export default function PictureScreen({
  navigation,
}) {
  const store = useSelector(({ nav }) => nav);

  const {
    goBackPress,
    screen,
  } = store;

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(onChangesTab({ goBack: false, screen: 'fotos' }));
    });
  }, [dispatch, navigation]);

  useEffect(() => {
    if (navigation.canGoBack() && goBackPress && screen === 'fotos') {
      dispatch(onChangesTab({ goBack: false, screen: 'fotos' }));
      navigation.goBack();
    }
  }, [navigation, goBackPress, screen, dispatch]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> PictureScreen </Text>
    </View>
  );
}
