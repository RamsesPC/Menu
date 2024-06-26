import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import webserviceparams from '../webserviceparams';

const DashboardArtistas = () => {
  const [artistas, setArtistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArtistas = async () => {
      try {
        const response = await axios.get(`http://${webserviceparams.host}:${webserviceparams.port}/artista`);
        setArtistas(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error); // Log the error for debugging
        setError('Error al recuperar los datos.');
        setLoading(false);
      }
    };

    fetchArtistas();
  }, []);

  const renderArtista = ({ item }) => (
    <View style={styles.artistaContainer}>
      <Text style={styles.artistaNombre}>Nombre: {item.nombre}</Text>
      <Text style={styles.artistaBiografia}>Biografía: {item.biografia}</Text>
      <Text style={styles.artistaObras}>Obras: {item.obras}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#B76E79" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={artistas}
          renderItem={renderArtista}
          keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffc3a0', // Background color matching the gradient theme
  },
  list: {
    width: '100%',
  },
  artistaContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  artistaNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B76E79', // Main color for text
  },
  artistaBiografia: {
    fontSize: 16,
    marginTop: 10,
    color: '#333', // Secondary color for text
  },
  artistaObras: {
    fontSize: 16,
    marginTop: 10,
    color: '#333', // Secondary color for text
  },
  error: {
    color: 'red',
    fontSize: 18,
    marginTop: 20,
  },
});

export default DashboardArtistas;
