import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, type ImageSource } from 'expo-image'

type properties = {
  size: number,
  path: ImageSource
}
const EmojiSticker = ({size, path}:properties) => {
  return (
    <View>
      <Image source={path} style={{width:size, height:size}} />
    </View>
  )
}

export default EmojiSticker

const styles = StyleSheet.create({})