import { Button, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'

const Modals = () => {  
    const [varModal,SetvarModal]= useState<boolean>(false);
    return (
    <View style={styles.contenedor}>
      <TouchableOpacity onPress={()=>(SetvarModal(true))}>
        <Text>Mostrar Modal..</Text>
      </TouchableOpacity>
      <Modal  visible={varModal} animationType='slide' presentationStyle='pageSheet'>
            <View style={styles.contenedorModal}>
                <Text>
                    Seleccionar..
                </Text>
                <Button title='Cancelar' onPress={()=>(SetvarModal(false))}/>
            </View>
      </Modal>
  </View>
  )
}

export default Modals

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor:"gray",
        padding:60
    },
    contenedorModal:{
        flex:1,
        backgroundColor:"lightgreen",
        padding:100
    }
})