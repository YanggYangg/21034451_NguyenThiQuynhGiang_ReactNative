import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as React from 'react';

const Screen01 = () => {
  const navigation = useNavigation();
  const getStarted = () =>{
    navigation.navigate('Screen02', { userName: name });
  }

  return(
    <View style={styles.container}>
    <View style={styles.titleHeader}>
    <Text style={styles.textHeader}>A premium online store for sporter and their stylish choice</Text>
    </View>
    <View  style={styles.imageContainer}>
    <Image source={require('../assets/bicycle.png')} style={styles.image} />
    </View>
    <Text style={styles.textHeader}>POWER BIKE {"\n"} SHOP</Text>
    <View style={styles.inputContainer}>
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={getStarted}>
    <Text style={styles.textbtn}>Get Started</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10,
    //backgroundColor: '#fff'
  },
  titleHeader:{
    alignItems: 'center'
  },
  textHeader:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageContainer:{
    margin: 10,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#f8e6e5',
    borderRadius: 20
  },
  image:{
    width: 250,
    height: 250,
  },
  inputContainer:{
    // backgroundColor: 'green'
    alignItems: 'center'

  },
  inputName:{
    borderWidth: 1,
    width: '80%'
  },
  buttonContainer:{
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  button:{
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textbtn:{
    color: '#fff',
    textAlign: 'center',
  }


});

export default Screen01;


