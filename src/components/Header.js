import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import IconBack from 'react-native-vector-icons/MaterialIcons';
import IconMore from 'react-native-vector-icons/Feather';

import {
  onChangesTab,
} from '../actions/navigationActions';

const userImage = require('../../assets/userImg.png');

export default function Header() {
  const store = useSelector(({ nav }) => nav);
  const dispatch = useDispatch();
  const canGoBack = () => {
    if (store.screen !== 'fotos') {
      dispatch(onChangesTab({ goBack: true, screen: '' }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={canGoBack}>
          <IconBack name='arrow-back-ios' color='#3b3b3b' size={wp('6%')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconMore name='more-vertical' color='#9cb6c7' size={wp('6%')} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerUserInfo}>
        <Image source={userImage} style={styles.userImg} />
        <View style={styles.containerDetailsUser}>
          <Text style={styles.nameText}>Jimena Vinat</Text>
          <Text style={styles.addressText}>Roma Norte, CDMX</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  containerHeader: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerUserInfo: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userImg: {
    width: '21%',
    height: '100%',
  },
  containerDetailsUser: {
    width: '40%',
    height: '60%',
    marginLeft: '4%',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: wp('5%'),
    fontWeight: '700',
    color: '#3b3b3b',
  },
  addressText: {
    color: '#5c636e',
    fontSize: wp('4%'),
  },
});
