import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { 
  useSelector, 
  useDispatch
} from 'react-redux';

import {
  onChangesTab,
} from '../actions/navigationActions';
import FileComponent from '../components/FileComponent';

export default function PictureScreen({
  navigation,
}) {
  const store = useSelector(({ nav, files }) => ({ nav, files }));

  const {
    nav: { goBackPress },
    screen,
    files: { images, isLoading },
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

  const renderImage = ({ item: itemPath }) => itemPath !== '' && (
    <View style={styles.containerImage}>
      <FileComponent itemPath={itemPath} />
    </View>
  );

  const getKeyItem = (_, index) => index.toString();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          animating={isLoading}
          color='black'
        />
      ) : (
          <FlatList
            data={images}
            extraData={images}
            renderItem={renderImage}
            keyExtractor={getKeyItem}
            numColumns={2}
          /> 
        )
      }
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

  containerImage: {
    width: wp('45%'),
    height: wp('100%') ,
    margin: wp('2%'),
    borderRadius: wp('4%'),
    overflow: 'hidden',
  }
});

