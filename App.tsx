import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acercade from './screens/Acercade';
import Contacto from './screens/Contacto';
import Info from './screens/Info';
import Inicio from './screens/inicio';
import FormArtistas from './screens/FormArtistas';
import FormCompradores from './screens/FormCompradores';
import DashboardArtistas from './screens/DashboardArtistas';
import DashboardCompradores from './screens/DashboardCompradores';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Artistas" component={Acercade} />
        <Stack.Screen name="Compradores" component={Contacto} />
        <Stack.Screen name="Informacion" component={Info} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="FormArtistas" component={FormArtistas} />
        <Stack.Screen name="FormCompradores" component={FormCompradores} />
        <Stack.Screen name="DashboardArtistas" component={DashboardArtistas} />
        <Stack.Screen name="DashboardCompradores" component={DashboardCompradores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Credenciales estáticas
    const validUsername = 'usuario';
    const validPassword = 'contraseña';

    if (username === validUsername && password === validPassword) {
      navigation.navigate('Inicio');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./imagenes/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./imagenes/logo.png')} style={styles.logo} />
    </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#B76E79',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#B76E79',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default App;
