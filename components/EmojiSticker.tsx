import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, type ImageSource } from 'expo-image'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

type properties = {
  size: number,
  path: ImageSource
}
const EmojiSticker = ({size, path}:properties) => {


  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const scale = useSharedValue( size );

  const arrastrar = Gesture.Pan()
    .onChange((event) => {
        x.value += event.changeX;
        y.value += event.changeY;
        console.log("X: ", x.value, "    Y: ", y.value);
    })

  const aumentar = Gesture.Tap().numberOfTaps(2)
    .onStart((event) => {
        if (scale.value != size*2) {
          scale.value *= 2;
        }
        else {
          scale.value /= 2;
        }
        console.log("Escala: ", scale.value);
    })

  const animatedStyleArrastrar = useAnimatedStyle(() => {
      return {
          transform: [
              { translateX: x.value },
              { translateY: y.value },
          ]
      }
  })

  const animatedStyleAumentar = useAnimatedStyle(() => {
      return {
          width: withSpring(scale.value),
          height: withSpring(scale.value),
      }
  })

  return (
    
    <GestureDetector gesture={arrastrar}>
      <Animated.View style={[animatedStyleArrastrar]}>
        <GestureDetector gesture={aumentar}>
          <Animated.Image source={path} style={[animatedStyleAumentar]} />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
    
  )
}

export default EmojiSticker

const styles = StyleSheet.create({})