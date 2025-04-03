import { ActivityIndicator, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


type CursosT = {
    nombre: string;
    id: number;
    imagen: string;
}

const ListaDeCursos = () => {
    const [resultado, setResultado] = useState<CursosT[]>([]);
    const [muestraSpinner, setMuestraSpinner] = useState<boolean>(false);

    useEffect( () => {
        setMuestraSpinner(true);
        consultaPOST().then( ()=> setMuestraSpinner(false));

        

    }, []); 

    const encabezado = () => {
        return (
            <View >
                <Text style={styles.encabezado}> Lista de Cursos </Text>
            </View>
        )
    }

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

      {muestraSpinner? <ActivityIndicator size="large" color="#0000ff" /> : null}

        <FlatList numColumns={2} data={resultado} ListHeaderComponent={encabezado}
        renderItem={({item}) => (
                <Text style={styles.textoIcon}>
                    <Ionicons name="pencil-outline" size={24} color="black" /> 
                    {item.nombre} 
                </Text>
                )}
        
        />
      </View>
  </>
)
}

export default ListaDeCursos
const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      backgroundColor: "ligthgray",
      padding: Platform.OS === 'ios' ? 5 : 10,
    },
    contenedorImage: {
      width: 200,
      height: 120,
    },
    textoIcon: {
        fontSize: 20,
        color: "green",
        marginLeft: 10,
        borderColor: "blue",
        width: 180,
        borderWidth: 1,
        padding: 5,
        marginTop: 5,
    },
    encabezado: {
        fontSize: 20,
        color: "red",
        marginLeft: 10,
    }
  
  
  })