import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const flex = () => {
  return (
    <View style={[styles.container, {backgroundColor: 'green', flex: 1}]}>
        <View style={[styles.caja, {backgroundColor: 'lightblue', flex:1}]}>
        <Text>lightblue</Text>
        </View>
        <View style={[styles.caja, {backgroundColor: 'blue'}]}>
        <Text>blue</Text>
        </View>    
        <View style={[styles.caja, {backgroundColor: 'gray', flex:1}]}>
        <Text>gray</Text>
        </View>
        <View style={[styles.caja, {backgroundColor: 'yellow'}]}>
        <Text>yellow</Text>
        </View>    
        <View style={[styles.caja, {backgroundColor: 'red'}]}>
        <Text>red</Text>
        </View>
        <View style={[styles.caja, {backgroundColor: 'violet'}]}>
        <Text>violet</Text>
        </View> 
    </View>   
  )
}

export default flex

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        gap:5,
        backgroundColor: 'green',
    },
    caja:{
        justifyContent: 'center',
        alignItems: 'center',
    }

})