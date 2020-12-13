import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoFile = ({ itemPath }) => {
  const [uri, setUri] = useState('');
  const [duration, setDuration] = useState('0:00');
  const playerRef = useRef();

  useEffect(() => {
    const uri = `file://${itemPath}`;
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
        <Text style={styles.durationText}>{duration}</Text>
      </View>
      <Video
        ref={playerRef}
        source={{ uri: uri }}
        paused={true}
        style={styles.videoStyle}
        rate={1.0}
        onLoad={onLoadFinished}
        resizeMode={'cover'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  durationContainer: {
    bottom: 10,
    left: 20,
    position: 'absolute',
    zIndex: 1,
  },
  durationText: {
    color: 'white',
  },
  videoStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoFile;
