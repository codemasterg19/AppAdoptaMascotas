import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
 
      console.log('Username:', username);
      console.log('Password:', password);

    };

    const handleForgotPassword = () => {
        // Aquí puedes implementar la lógica para manejar el olvido de contraseña
        console.log('Olvidé mi contraseña');
      };

  return (
    
    <View style={styles.container}>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.logo} />
      <Text style={styles.header}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
        <Text style={styles.buttonText}> Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword} >
        <Text style={styles.olvidoPassText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 20,

  },
  header: {
    fontSize: 24,
    marginBottom: 30,
  },
  buttonContainer: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    elevation:10,
  },
  input: {
    
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    elevation:5,
  },
  olvidoPassText: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});
