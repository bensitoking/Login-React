import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';

const imgLocal = require ('./assets/psg.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Form de inicio de sesión</Text>
        <ImageBackground
        source={imgLocal}
        resizeMode='cover'
        style={styles.ImageBackground}>
       </ImageBackground>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el correo electrónico"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña: "
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}
        onPress= {() => Alert.alert ('El registro fue exitoso. Bienvenido.')}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
          
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Esto es para Android
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ImageBackground: {
    width: 300,
    height: 300
  }

});
