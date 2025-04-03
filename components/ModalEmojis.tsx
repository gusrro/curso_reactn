import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, type ReactNode } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

type tyModalEmojis = {
    esVisible: boolean,
    onClose?:()=>void
    children?: ReactNode
}

type tyModalEmojisVProps = PropsWithChildren <
    {  esVisible: boolean,
        onClose?:()=>void,
    }
> 

const ModalEmojis = ( {esVisible, onClose, children}: tyModalEmojisVProps) => {
  return (
    <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible= {esVisible}
          >
            <View style={styles.modal}>
                <View style={styles.contenedor}>
                    <Text>Elige un emoji</Text>
                    <Pressable >
                        <MaterialIcons name='close' onPress={onClose} size={24} color='black'></MaterialIcons>
                    </Pressable>
                </View>
                {children}

            </View>
        </Modal>
    </View>
  )
}

export default ModalEmojis

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "lightyellow",
        height: "25%",
        width: "100%",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 15,
        position: "absolute",
        bottom: 0,
    },
    titulo: {
        fontSize: 20,
        color: "blue",  
        
    },
    contenedor: {
        backgroundColor: "lightblue",
        width: 400,
        height: "15%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
    }

})