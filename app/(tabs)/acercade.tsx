import { StyleSheet, Text, View,  Button } from 'react-native'
import React, { useRef, useState } from 'react'
import Boton from '@/components/Boton';
import * as ImagePicker from 'expo-image-picker'
import { Image, ImageSource } from 'expo-image';
import BotonCircular from '@/components/bontoncircular';
import BotonIcono from '@/components/botonIcono';
import ModalEmojis from '@/components/ModalEmojis';
import ListaEmojis from '@/components/ListaEmojis';
import EmojiSticker from '@/components/EmojiSticker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library'
import { captureRef } from 'react-native-view-shot';


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
  const [permission, requestPermission] =  MediaLibrary.usePermissions();

  const refView = useRef(null);

  const saveImage = async () => {
    const resultImage = await captureRef(refView, {
      format: "png",
      quality: 1,
      height: 400,
      width: 400,
    })
    await MediaLibrary.saveToLibraryAsync(resultImage);
    if (null != resultImage) {
      alert("Imagen guardada en la galeria");
    }
  }


  if ( null === permission) {
    requestPermission();
  }

  return (

    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
      <View  ref={refView} collapsable={false} >
        <Image source={ varImagen||logo} style={{ width: 250, height: 250 }} />
        {emojiSelected &&
          <EmojiSticker size={50} path={emojiSelected}/>
        }
      </View>
      </View>
    {mostrarBotones ? (
      <View style={styles.viewBotonera}>
      <View style={styles.botoneraGral}>
        <BotonIcono onpress={saveImage} nombreIcon='save' texto='Grabar'></BotonIcono>
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
    </GestureHandlerRootView>
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
    flex: 1,
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


