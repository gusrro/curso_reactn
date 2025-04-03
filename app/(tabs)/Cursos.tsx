import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

type CursosT = {
    nombre: string;
    id: number;
    imagen: string;
}

const Cursos = () => {
      const [resultado, setResultado] = useState<CursosT[]>([]);
      const [muestraSpinner, setMuestraSpinner] = useState<boolean>(false);
  
      useEffect( () => {
          setMuestraSpinner(true);
          consultaPOST().then( ()=> setMuestraSpinner(false));
  
          
  
      }, []); 
  
      async function consultaPOST () {
          // Make a request for a user with a given ID
          await axios.get('https://www.dcinternet.com.mx/educa/productos')
              .then(function (response) {
                  // handle success
                  console.log(response);
                  setResultado( response.data);
              })
              .catch(function (error) {
                  // handle error
                  console.log(error);
              })
              .finally(function () {
                  // always executed
              });
          }    
  return (
    <>
        <View style={styles.contenedor}>
          <ScrollView>
            {muestraSpinner? <ActivityIndicator size="large" color="#0000ff" /> : null}
            
        {resultado&&resultado.map((post) => (

                  <View key={post.id} style={{flexDirection: 'row', padding: 10}}>
                    <Image source={{uri: post.imagen}} style={styles.contenedorImage}/>
                    <Text> {post.nombre} </Text>
                  </View>
                ))}
                </ScrollView>
        </View>
    </>
  )
}

export default Cursos

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "ligthgray"
  },
  contenedorImage: {
    width: 200,
    height: 120,
  }


})