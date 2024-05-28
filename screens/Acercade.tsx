import React, { useRef, useState } from 'react';
import {
  TouchableOpacity,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Acercade = ({ navigation }) => {
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
        <Text style={styles.drawerButtonText}>Como funciona?</Text>
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
        <View style={styles.iconContainer}>
          <Icon
            name="menu"
            size={55}
            color="#B76E79"
            onPress={() => drawer.current?.openDrawer()}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Artistas</Text>
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
  text: {
    fontSize: 24,
    color: '#B76E79',
  },
});

export default Acercade;
