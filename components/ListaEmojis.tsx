import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { Image, type ImageSource } from 'expo-image';


type properties = {
  onSelect:(imagen:ImageSource)=>void
  onClose:()=>void

}

const ListaEmojis = ( {onSelect, onClose}:properties) => {
    const emojis = [require('@/assets/images/tortuga.png'), require('@/assets/images/dado.png')
    , require('@/assets/images/control.png'), require('@/assets/images/eclair.png')
    , require('@/assets/images/extintor.png'), require('@/assets/images/emoji.png') 
    , require('@/assets/images/fiesta.png'), require('@/assets/images/lifter.png') ];

  return (
    <View>
      <FlatList data={emojis} horizontal
        renderItem={({item, index}) => (
                        // {
            //     let uriImage = `@/assets/images/${item}.png`
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