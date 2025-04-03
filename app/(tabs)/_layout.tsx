import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Tab_Layout = () => {
  return (
    <Tabs screenOptions={
      {
      tabBarActiveTintColor:"withe",
      tabBarStyle:{backgroundColor:"steelblue"},
      headerStyle:{backgroundColor:"steelblue"},
      headerTintColor:"white"
      
      }
  }>
      <Tabs.Screen name="index" options={
          {
              title:"Home",
              tabBarIcon:({color,focused})=>(
                  <Ionicons name='home-sharp' color={"red"} size={24}></Ionicons>
              )
          }
          }></Tabs.Screen>
        <Tabs.Screen name="acercade" options={{title:"Acerca de"}}/>    
        <Tabs.Screen name="Cursos" options={{title:"Lista de cursos", tabBarIcon: ({color, focused}) => {
          return <Ionicons name='business' size={24} color={color}/>;
        }}} />
    </Tabs>
  )
}

export default Tab_Layout