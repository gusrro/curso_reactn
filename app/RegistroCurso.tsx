import { Platform, StyleSheet, TextInput, ToastAndroid, View } from 'react-native'
import React from 'react'
import { green } from 'react-native-reanimated/lib/typescript/Colors'
import Boton from '@/components/Boton'
import BotonIcono from '@/components/botonIcono'
import axios from 'axios'

type CursosT = {
    nombre: string;
    categoria: string;
    duracion: string;
    descripcion: string;
    imagen: string;
}

const RegistroCurso = () => {
    const [nombre, setNombre] = React.useState<string>("")
    const [categoria, setCategoria] = React.useState<string>("")
    const [duracion, setDuracion] = React.useState<string>("")
    const [descripcion, setDescripcion] = React.useState<string>("")
    const [imagen, setImagen] = React.useState<string>("")

    const datos: CursosT = {
        nombre: nombre,
        categoria: categoria,
        duracion: duracion,
        descripcion: descripcion,
        imagen: imagen 
    }

    let guardarRegistro = () => {
        registrarCursos();
    }

    async function registrarCursos () {
        // Make a request for a user with a given ID
        await axios.post('https://www.dcinternet.com.mx/educa/productos', datos)
            .then(
                () => {
                    const mensaje = "Registro guardado";
                    Platform.OS === 'ios' ? alert(mensaje) : ToastAndroid.show(mensaje, ToastAndroid.LONG);
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }    

  return (
    <View>
      <TextInput 
        placeholder='Nombre' 
        value= {nombre}
        style={styles.CajaTexto} 
        placeholderTextColor={"green"}
        onChangeText={(texto) => setNombre(texto)}
        />
        <TextInput 
        placeholder='Categoria' 
        value= {categoria}
        style={styles.CajaTexto} 
        placeholderTextColor={"green"}
        onChangeText={(texto) => setCategoria(texto)}
        />
        <TextInput 
        placeholder='Duración' 
        value= {duracion}
        style={styles.CajaTexto} 
        placeholderTextColor={"green"}
        keyboardType='numeric'
        onChangeText={(texto) => setDuracion(texto)}
        />
        <TextInput 
        placeholder='Descripción' 
        value= {descripcion}
        style={styles.CajaTexto} 
        placeholderTextColor={"green"}
        onChangeText={(texto) => setDescripcion(texto)}
        />
        <TextInput 
        placeholder='Imagen' 
        value= {imagen}
        style={styles.CajaTexto} 
        placeholderTextColor={"green"}
        onChangeText={(texto) => setImagen(texto)}
        />
        <View>
            <BotonIcono onpress={registrarCursos} nombreIcon='save' texto='Grabar'></BotonIcono>
        </View>
    </View>
  )
}

export default RegistroCurso

const styles = StyleSheet.create({
    CajaTexto: {
        borderBlockColor: 'brown',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
    }
})