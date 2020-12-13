import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/AntDesign'

const OtherFile = ({
    itemPath
}) => {
  const [name, setName] =  useState('');

  useEffect(() => {
    const name = itemPath.split('/').pop().split('.').shift();
    setName(name);
  }, [itemPath]);

  return (
    <View style={styles.container}>
      <Icon name='unknowfile1' color='black' size={wp('15%')} />
      <Text style={styles.text}>{name}</Text>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('4%'),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: wp('0.3%'),
    borderColor: "#e2ecf5"
  },
  text:{
    marginTop: '5%',
    fontSize: wp('3.5%'),
  }
});

export default OtherFile;
