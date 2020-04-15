import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


// Get screen dimensions
const { width } = Dimensions.get('window');

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#FEFEFE', '#FEFEE2']}>
      <View style={styles.header}>
        <Text style={styles.title}>New Neighboor</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('./pictures/image.png')} />
        <TextInput style={styles.input} placeholder="Emma" />
        <TextInput style={styles.input} placeholder="Phone Number" />
        <TextInput style={styles.input} placeholder="Address" />
        <TextInput style={styles.input} placeholder="About me" />
      </View>
      <View>
        <Button title="Save" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#000000',
    fontSize: 36,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: '250'
  },

  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width - 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignContent: "center"
  },

  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
    fontSize: 24
  },

  Image: {
    borderRadius: 150
  }

});
