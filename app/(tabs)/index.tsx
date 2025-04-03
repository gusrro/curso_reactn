import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>Hola Mundo!!</Text>
      <Link href="/acercade">Ir acerca de</Link> 
      <Link href="/flex">Ir a flex</Link> 
      <Link href="/Botones">Ir a botones</Link>
      <Link href="/modal">Ir a Modal</Link>
      <Link href="/RegistroCurso">Registrar cursos</Link>
      <Link href="/Bolita">Bolita</Link>
    </View>
  );
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 20,
    color: "blue",
  },
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  contenedor2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  }
});