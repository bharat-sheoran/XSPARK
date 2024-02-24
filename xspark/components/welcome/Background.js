import React from 'react';
import { View, ImageBackground } from 'react-native';

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require('./assets/bk.jpg')}
        style={{ height: '100%',opacity: 0.9}}
      >
        <View style={{position:"absolute"}}>
            {children}</View>
      </ImageBackground>
    </View>
  );
};

export default Background;
