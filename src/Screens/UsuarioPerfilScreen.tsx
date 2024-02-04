import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const UsuarioPerfilScreen= () => {
  const [profileImage, setProfileImage] = useState(null);
  const [nombreCompleto, setnombreCompleto] = useState('Nombre Completo');
  const [cedula, setCedula] = useState('Cédula');
  const [idImage, setIdImage] = useState(null);
  const [SBasicoImage, setSBasicoImage] = useState(null);
  const [address, setAddress] = useState('Dirección');
  const [email, setEmail] = useState('correo@ejemplo.com');
  const [phone, setPhone] = useState('Teléfono');
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileImageUpload = () => {

  };

  const handleIdImageUpload = () => {

  };

  const handleSBImageUpload = () => {

  };
  

  const handleEditInfo = () => {
    setIsEditing(true);
  };

  const handleSaveInfo = () => {

    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MI PERFIL</Text>

      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleProfileImageUpload}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={styles.uploadText}>Editar Foto</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.infoP}>{nombreCompleto}</Text>    
        <Text style={styles.infoP}>{cedula}</Text>

        <View style={styles.cargaContainer}>
          <TouchableOpacity onPress={handleIdImageUpload} style={styles.uploadButton}>
            {idImage ? (
              <Image source={{ uri: idImage }} style={styles.cargaImage} />
            ) : (
              <Text style={styles.uploadText}>Subir Foto de Cédula</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSBImageUpload} style={styles.uploadButton}>
            {SBasicoImage ? (
              <Image source={{ uri: SBasicoImage }} style={styles.cargaImage} />
            ) : (
              <Text style={styles.uploadText}>Subir Servicio Básico</Text>
            )}
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Datos</Text>

        <TouchableOpacity onPress={isEditing ? handleSaveInfo : handleEditInfo}>
          <Text style={styles.editButton}>{isEditing ? 'Guardar' : 'Editar'}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Dirección"
          onChangeText={(text) => setAddress(text)}
          value={address}
          editable={isEditing}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          editable={isEditing}
        />
        <TextInput
          style={styles.input}
          placeholder="Contacto"
          onChangeText={(text) => setPhone(text)}
          value={phone}
          keyboardType="phone-pad"
          editable={isEditing}
        />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  placeholderImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  infoP: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },

  cargaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    
  },
  uploadButton: {
    flex: 1,
    marginRight: 5,
  },
  cargaImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginTop: 10,
  },

  
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf:'center'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  questionnaireInput: {
    width: '100%',
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  editButton: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});