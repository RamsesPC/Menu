import React, { useRef, useState } from 'react';
import {
  TouchableOpacity,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acercade from './screens/Acercade';
import Contacto from './screens/Contacto';
import Info from './screens/Info';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Artistas" component={Acercade} />
        <Stack.Screen name="Compradores" component={Contacto} />
        <Stack.Screen name="Informacion" component={Info} />
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
      navigation.navigate('Artistas');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
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

const HomeScreen = ({ navigation }) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('right');

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => navigation.navigate('Artistas')}
      >
        <Text style={styles.drawerButtonText}>Artistas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => navigation.navigate('Compradores')}
      >
        <Text style={styles.drawerButtonText}>Compradores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => navigation.navigate('Informacion')}
      >
        <Text style={styles.drawerButtonText}>¿Cómo funciona?</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View>
        <View style={styles.iconContainer}>
          <Icon
            name="menu"
            size={40} // Tamaño del icono
            color="#B76E79" // Color del icono cambiado a oro rosa
            onPress={() => drawer.current?.openDrawer()}
          />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  drawerButton: {
    backgroundColor: '#B76E79', // Oro rosa
    padding: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  drawerButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    color: '#B76E79',
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
