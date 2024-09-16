import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Screen_1b() {
  return (
    <LinearGradient
      colors={['#d1f4f6','#d1f4f6', '#d1f4f6', '#d1f4f6', '#1bd1f8']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image 
          source={require('../image/padlock.png')} 
          style={styles.image} 
        />
        <Text style={styles.boldText}>FORGET</Text>
        <Text style={styles.boldText}>PASSWORD</Text>
        <Text style={styles.regular}>
          Provide your account's email for which you want to reset your password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    width: '80%',
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 20, 
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  regular: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20, 
  },
  input: {
    width: '100%',
    maxWidth: 300, 
    height: 40,
    borderWidth: 1,
    backgroundColor: "#c4c4c4",
    paddingHorizontal: 10,
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#FFC107',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    maxWidth: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Screen_1b;
