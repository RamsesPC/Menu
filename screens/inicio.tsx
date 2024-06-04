import React, { useRef, useState } from 'react';
import {
  TouchableOpacity,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Inicio = ({ navigation }) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('right');
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [dashboardSubmenuVisible, setDashboardSubmenuVisible] = useState(false);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => navigation.navigate('FormArtistas')}
      >
        <Text style={styles.drawerButtonText}>Formulario para artistas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => navigation.navigate('FormCompradores')}
      >
        <Text style={styles.drawerButtonText}>Formulario para compradores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => setSubmenuVisible(!submenuVisible)}
      >
        <Text style={styles.drawerButtonText}>¿Cómo funciona?</Text>
      </TouchableOpacity>
      {submenuVisible && (
        <View style={styles.submenu}>
          <TouchableOpacity
            style={styles.submenuButton}
            onPress={() => navigation.navigate('Artistas')}
          >
            <Text style={styles.drawerButtonText}>Artistas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submenuButton}
            onPress={() => navigation.navigate('Informacion')}
          >
            <Text style={styles.drawerButtonText}>Compradores</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => setDashboardSubmenuVisible(!dashboardSubmenuVisible)}
      >
        <Text style={styles.drawerButtonText}>Dashboard</Text>
      </TouchableOpacity>
      {dashboardSubmenuVisible && (
        <View style={styles.submenu}>
          <TouchableOpacity
            style={styles.submenuButton}
            onPress={() => navigation.navigate('DashboardArtistas')}
          >
            <Text style={styles.drawerButtonText}>Artistas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submenuButton}
            onPress={() => navigation.navigate('DashboardCompradores')}
          >
            <Text style={styles.drawerButtonText}>Compradores</Text>
          </TouchableOpacity>
        </View>
      )}
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
        <TouchableOpacity style={styles.logoContainer}>
          <Image source={require('../imagenes/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={require('../imagenes/header-image.png')} style={styles.headerImage} />
          <Text style={styles.welcomeText}>Bienvenido a nuestra aplicación móvil para comprar y vender obras de arte de una forma fácil y segura.</Text>
          <Text style={styles.sampleText}>A continuación, algunas imágenes de nuestros artistas consolidados:</Text>
          <View style={styles.sampleImagesContainer}>
            <Image source={require('../imagenes/inicio1.png')} style={styles.sampleImage} />
            <Image source={require('../imagenes/inicio2.png')} style={styles.sampleImage} />
            <Image source={require('../imagenes/inicio3.png')} style={styles.sampleImage} />
          </View>
        </ScrollView>
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
  scrollContainer: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 100, // Adjust padding top to make room for the logo and icon
  },
  logoContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Add elevation for Android
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  headerImage: {
    marginTop: 70, // Ensure the header image is positioned correctly
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1, // Ensure the icon is on top
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
  submenu: {
    backgroundColor: '#ecf0f1',
    paddingLeft: 40,
    paddingRight: 10,
    width: '100%',
  },
  submenuButton: {
    backgroundColor: '#B76E79',
    padding: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    backgroundColor: '#ffc3a0', // Simulate a gradient background
  },
  welcomeText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sampleText: {
    fontSize: 16,
    color: '#B76E79',
    marginBottom: 10,
    textAlign: 'center',
  },
  sampleImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  sampleImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    margin: 10,
  },
});

export default Inicio;
