import { StyleSheet, Text, View,  Button } from 'react-native'
import React, { useState } from 'react'
import Boton from '@/components/Boton';
import * as ImagePicker from 'expo-image-picker'
import { Image, ImageSource } from 'expo-image';
import BotonCircular from '@/components/bontoncircular';
import BotonIcono from '@/components/botonIcono';
import ModalEmojis from '@/components/ModalEmojis';
import ListaEmojis from '@/components/ListaEmojis';
import EmojiSticker from '@/components/EmojiSticker';


const logo = require("@/assets/images/bansi2.jpg");
const acercade = () => {
  const [varImagen, setImagen] = useState<string|undefined>(undefined);
  let seleccionaImagen = async () => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,

    })
     if(!resultado.canceled)
     {
      setImagen(resultado.assets[0].uri)
      setMostrarBotones(true);
      console.log(varImagen);
     }
  }

  const [mostrarBotones, setMostrarBotones] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [emojiSelected, setEmojiSelected] = useState<ImageSource|undefined>();


  return (


    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ varImagen||logo} style={{ width: 250, height: 250 }} />
        {emojiSelected &&
          <EmojiSticker size={50} path={emojiSelected}/>
        }
      </View>
    {mostrarBotones ? (
      <View style={styles.viewBotonera}>
      <View style={styles.botoneraGral}>
        <BotonIcono onpress={()=>(alert("Pruebas Icono.."))} nombreIcon='save' texto='Grabar'></BotonIcono>
        <BotonCircular onpress={()=>setMostrarModal(true)}></BotonCircular>
        <BotonIcono onpress={()=>setMostrarBotones(false)} nombreIcon='refresh' texto='Refrescar'></BotonIcono>
      </View>
      </View>
    ) : (
      <View style={styles.botoneraFoto}>
        <Boton etiqueta='Elige una foto' tema="principal" onPress={seleccionaImagen}></Boton>
      </View>
    )}
      <ModalEmojis esVisible={mostrarModal} onClose={() => setMostrarModal(false)}> 
          <ListaEmojis onClose={() => setMostrarModal(false)} onSelect={setEmojiSelected}/>
      </ModalEmojis>
    </View>
  )
}

export default acercade

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightyellow",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    flex: 3,
  },
  viewBotonera:{
    position: "absolute",
    bottom: 0,
  },
  botoneraGral:{
    flexDirection: "row",
  },
  botoneraFoto: {
    alignContent: "center",
    flex: 2,
  }
})


