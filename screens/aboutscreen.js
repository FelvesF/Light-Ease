import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

const Aboutscreen =() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About us Screen</Text>
    </View>
  );
};


export default Aboutscreen;