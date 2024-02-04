import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const RegistroScreen = () => {
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.logo} />
      <Text style={styles.header}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Cédula"
        onChangeText={(text) => setCedula(text)}
        value={cedula}
        keyboardType="numeric" 
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TouchableOpacity onPress={handleRegister} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
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
    color: '#333', 
    fontWeight: 'bold', 
  },
  buttonContainer: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    elevation:10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc', 
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff', 
  },
});

