import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type propiedades={
  estilo:any,
  children:string
} 

const Caja = ({children, estilo}: propiedades) => {
  return (
    <View>
      <Text>Caja</Text>
    </View>
  )
}

export default Caja

const styles = StyleSheet.create({})