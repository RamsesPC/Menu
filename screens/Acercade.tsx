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

const Acercade = ({ navigation }) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('right');
  const [submenuVisible, setSubmenuVisible] = useState(false);

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={require('../imagenes/logo.png')} style={styles.logo} />
          <Image source={require('../imagenes/header-image.png')} style={styles.headerImage} />
          <Text style={styles.text}>Información para artistas o proveedores</Text>
          <Text style={styles.requisitosTitle}>Requisitos indispensables para ser un artista en nuestro sitio web</Text>
          <Text style={styles.requisitosText}>
            1. Nombre del artista{'\n'}
            2. Curriculum Vitae{'\n'}
            3. Declaración del artista: qué haces, cómo y por qué{'\n'}
            4. Fotografía del artista en alta resolución{'\n'}
            5. Razón social{'\n'}
            6. RFC{'\n'}
            7. INE "indispensables"
          </Text>
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
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
  submenuButton: {
    backgroundColor: '#B76E79',
    padding: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gradient: {
    flex: 1,
    backgroundColor: '#ffc3a0', // Simulate a gradient background
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    top: 16,
    left: 16,
  },
  headerImage: {
    marginTop: 30, // Ensure the header image is positioned correctly
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    color: '#B76E79',
    marginBottom: 20,
    textAlign: 'center',
  },
  requisitosTitle: {
    fontSize: 20,
    color: '#B76E79',
    marginBottom: 10,
    textAlign: 'center',
  },
  requisitosText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    width: '100%',
    margin: 3,
  },
});

export default Acercade;
