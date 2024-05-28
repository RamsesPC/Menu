import React, { useRef, useState } from 'react';
import {
  TouchableOpacity,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Info = ({ navigation }) => {
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
      <View style={styles.gradient}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => drawer.current?.openDrawer()}>
          <Icon name="menu" size={55} color="#B76E79" />
        </TouchableOpacity>
        <View style={styles.container}>
          <Image source={require('../imagenes/logo.png')} style={styles.logo} />
        </View> 
        <View style = {styles.title}>
          <Text style={styles.textTitle}>¿Como funciona?</Text>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <Image source={require('../imagenes/header-image.png')} style={styles.headerImage} />
          <Text style={styles.textSubTitle}>¿Como comprar?</Text>
          <View style={styles.imageRow}>
            <View style={styles.imageContainer}>
              <Image source={require('../imagenes/imagen1.png')} style={styles.image} />
              <Text style={styles.description}>Selecciona la obra</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../imagenes/imagen2.png')} style={styles.image} />
              <Text style={styles.description}>Elige método de pago</Text>
            </View>
          </View>
          <View style={styles.imageRow}>
            <View style={styles.imageContainer}>
              <Image source={require('../imagenes/imagen3.png')} style={styles.image} />
              <Text style={styles.description}>Envio nacional e internacional</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../imagenes/imagen4.png')} style={styles.image} />
              <Text style={styles.description}>Seleccion de artistas</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  title: {
    left:16,
    top: 30,
  },
  textTitle: {
    fontSize: 30,
    color: '#E74C3B',
  },
  textSubTitle: {
    left: -120,
    fontSize: 20,
    color: '#E74C3B',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    position: 'absolute',
    top: 30,
    left: 16,
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1, // Make sure the icon is on top
    padding: 10,
  },
  drawerButton: {
    backgroundColor: '#B76E79',
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
  gradient: {
    flex: 1,
    backgroundColor: '#ffc3a0', // Simulate a gradient background
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
    top: 20,
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  description: {
    top: 20,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Info;
