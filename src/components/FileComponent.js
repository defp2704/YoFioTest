import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import FileSystem from  'react-native-fs';

const loadImg = require('../../assets/spin.jpg');

const FileComponent = ({ itemPath }) => {

  const [showDefault, setShowDefault ] = useState(true);
  const [error, setError ] = useState(false);
  const [uri, setUri ] = useState('');
  
  const getFile = async () => FileSystem.readFile(itemPath, 'base64');

  let base64 = '';

  useEffect(() => {
    getFile().then((_base64) => base64 = _base64).finally(() => {
      const uri = `data:image/jpeg;base64,${base64}`;
      setUri(uri);
    });
  }, [itemPath]);

  const source = showDefault ? loadImg : (error ? loadImg : { uri: uri });

  return (
    <Image
      style={styles.imageStyle}
      source={source}
      loadingIndicatorSource={source}
      onLoadEnd={() => setShowDefault(false)}
      onError={() => setError(true)}
      resizeMode='contain'
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  }
});

export default FileComponent;
