import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  MaterialIcons  from '@expo/vector-icons/MaterialIcons'
type propiedades={onpress:()=>void}
const BotonCircular = ({onpress}:propiedades) => {
  return (
    <View style={styles.contenedor}>
      <Pressable style={styles.presableStyle} onPress={onpress}>
        <MaterialIcons name='add' size={40}></MaterialIcons>
      </Pressable>
    </View>
  )
}

export default BotonCircular

const styles = StyleSheet.create({
    contenedor:{
        borderColor:"brown",
        borderWidth:4,
        borderRadius:50,
        width:100,
        height:100,
        padding:4
    },
    presableStyle:
    {
        flex:1,
        backgroundColor:"lightblue",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
    }
})