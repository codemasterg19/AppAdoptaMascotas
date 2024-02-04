import React from 'react'
import { SafeAreaView } from 'react-native'
import { LoginScreen } from './src/Screens/LoginScreen'
import { RegistroScreen } from './src/Screens/RegistroScreen'
import { UsuarioPerfilScreen } from './src/Screens/UsuarioPerfilScreen'

export const App = () => {
  return (
    
    <SafeAreaView style={{ flex:1}}>
      {/*<LoginScreen/>
      <RegistroScreen/>*/}
      <UsuarioPerfilScreen/>
    </SafeAreaView>
  )
}
