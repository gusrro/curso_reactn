import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { Image, type ImageSource } from 'expo-image';


type properties = {
  onSelect:(imagen:ImageSource)=>void
  onClose:()=>void

}

const ListaEmojis = ( {onSelect, onClose}:properties) => {
    const emojis = [require('@/assets/images/tortuga.jpeg'), require('@/assets/images/dado.jpeg')
    , require('@/assets/images/control.jpeg'), require('@/assets/images/eclair.jpeg')
    , require('@/assets/images/extintor.jpeg'), require('@/assets/images/emoji.jpeg') 
    , require('@/assets/images/fiesta.jpeg') ];

  return (
    <View>
      <FlatList data={emojis} horizontal
        renderItem={({item, index}) => (
                        // {
            //     let uriImage = `@/assets/images/${item}.jpeg`
            // }
            <Pressable onPress={() => {
              onSelect(item);
              onClose();
            }}>
              <Image key={index}
                  source={item as ImageSource}
                  style={{width: 50, height: 50}}/>
            </Pressable>
        )}>


        </FlatList>
    </View>
  )
}

export default ListaEmojis

const styles = StyleSheet.create({})