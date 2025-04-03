import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

type propiedades = {
  etiqueta: string;
  tema?: string;
  onPress?:()=>void
}

const Boton = ( {etiqueta, tema, onPress}: propiedades ) => {
    if ( tema === "principal") {
        return (
            <View style={[styles.contenedor,{borderWidth:4, borderColor:"green", borderRadius:15}]}>
            <Pressable style={styles.Boton} onPress={onPress}>
                <FontAwesome name="picture-o" size={24} color="blue" ></FontAwesome>
                <Text>{etiqueta}</Text>
                
            </Pressable>
            </View>
        )
    } else {
        return (
            <View style={styles.contenedor}>
            <Pressable style={styles.Boton} onPress={onPress}>
                <Text>{etiqueta}</Text>
            </Pressable>
            </View>
        )
    }
}

export default Boton

const styles = StyleSheet.create({
    Boton: {
        width: "100%",
        height: "100%",
        //backgroundColor: "lightblue",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    iconos:{
        paddingRight: 10,
    },
    contenedor: {
        backgroundColor: "lightblue",
        width: 400,
        height: 60,
    }

})