import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("./Lassests/GreenField.jpg")} style={{height: "100%"}} />
      <View style={{position: "absolute"}}>
        {children}
      </View>
    </View>
  );
}

export default background;