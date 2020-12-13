import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import IconFeather from 'react-native-vector-icons/Feather'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const AudioFile = ({
  itemPath,
}) => {
  const [uri, setUri] = useState('');
  const [name, setName] =  useState('');
  const [duration, setDuration] = useState('0:00');
  const playerRef = useRef();


  useEffect(() => {
    const uri = `file://${itemPath}`;
    const name = uri.split('/').pop().split('.').shift();
    setName(name);
    setUri(uri);
  }, [itemPath]);

  const onLoadFinished = (payload) => {
    const durationVideo = payload.duration.toFixed(2);
    setDuration(durationVideo);
    playerRef.current.seek(1);
  };

  return (
    <>
      <View style={styles.durationContainer}>
        <IconFeather name='music' size={wp('20%') }  color='#3b3b3b' />
        <Text style={styles.durationText}>{duration}</Text>
        <Text style={styles.durationText}>{name}</Text>
      </View>
      <Video
        ref={playerRef}
        source={{ uri: uri }}
        audioOnly={true}
        paused={true}
        style={styles.videoStyle}
        rate={1.0}
        onLoad={onLoadFinished}
        resizeMode='cover'
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    borderRadius: wp('4%'),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: wp('0.3%'),
    borderColor: "#e2ecf5"
  },

  durationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  durationText: {
    color: 'black',
  },

  videoStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: wp('4%'),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: wp('0.3%'),
    borderColor: "#e2ecf5"
  },
});

export default AudioFile;
