import { Button, Pressable, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Boton from '@/components/Boton';

const Botones = () => {
  return (
    <View>
      <Text onPress={()=> { alert("Quihubo!!");}}>Botones</Text>
      <Button title='Hola' onPress={()=> { alert("Quihubo!!");}}/>

      <Pressable  onPress={()=> { alert("Quihubo!!");}}>
        <View style={styles.boton}>
          <Text style={styles.texto}>Pressable</Text>

        </View>
      </Pressable>


      <TouchableOpacity  onLongPress={()=> { alert("Quihubo largo!!");}}>
        <View style={styles.boton2}>
          <Text style={styles.texto}>Pressable</Text>

        </View>
      </TouchableOpacity>

      <TouchableHighlight  onLongPress={()=> { alert("Quihubo largo!!");}}>
        <View style={styles.boton3}>
          <Text style={styles.texto}>Pressable</Text>

        </View>
      </TouchableHighlight>


        <Boton tema="Foto" etiqueta="Seleccione una foto"></Boton>

        <Boton  etiqueta="Otro boton"></Boton>

    </View>
  )
}

export default Botones

const styles = StyleSheet.create({
    boton: {
        width: "100%",
        backgroundColor: "lightblue",
    },
    boton2: {
        width: "100%",
        backgroundColor: "lightgreen",
    },
    boton3: {
        width: "100%",
        backgroundColor: "red",
    },
    texto: {
        fontSize: 20,
        color: "White",
    }

})