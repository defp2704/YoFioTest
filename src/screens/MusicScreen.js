import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  onChangesTab,
} from '../actions/navigationActions';

export default function MusicScreen({
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
      dispatch(onChangesTab({ goBack: false, screen: 'musica' }));
    });
  }, [dispatch, navigation]);

  useEffect(() => {
    if (navigation.canGoBack() && goBackPress && screen === 'musica') {
      navigation.goBack();
      dispatch(onChangesTab({ goBack: false, screen: 'musica' }));
    }
  }, [navigation, goBackPress, screen, dispatch]);
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text> MusicScreen </Text>
    </View>
  );
}
