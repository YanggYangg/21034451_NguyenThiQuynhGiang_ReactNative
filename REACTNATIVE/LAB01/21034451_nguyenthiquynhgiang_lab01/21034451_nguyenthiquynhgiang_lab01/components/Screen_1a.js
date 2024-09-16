import React from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Screen_1a() {
  return (
     

  <View style={styles.container}>
   <LinearGradient
      //colors={['#cef4f6', '#1bd1f8']}
         colors={['#d1f4f6','#d1f4f6', '#d1f4f6', '#d1f4f6', '#1bd1f8']}
      style={styles.gradient}>
      <View style={styles.image} >
      <Image source={
        {uri:"https://static-00.iconduck.com/assets.00/circle-ellipse-shape-icon-512x510-tllm8ic9.png"}} 
      style={{height:200, width:200}}></Image>
      </View>
      <Text style={styles.boldText}>GROW</Text>
      <Text style={styles.boldText}>YOUR BUSINESS</Text>
      <Text style={styles.regularText}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#33CCFF',
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  gradient:{
    flex: 1, // Make the gradient fill the entire container
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 18, 
    textAlign: 'center',
    marginTop: 10, 
    marginHorizontal: 20, 
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 80,
  },
  buttonLogin: {
    backgroundColor: '#FFFF33',
    paddingVertical: 10,//Khoang cach deu tren duoi 
    paddingHorizontal: 20,//Khoang cach deu trai phai
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 2,
    
  },
  buttonSignUp:{
    backgroundColor: '#FFFF33',
    paddingVertical: 10,//Khoang cach deu tren duoi 
    paddingHorizontal: 20,//Khoang cach deu trai phai
    borderRadius: 5,
    marginLeft: 40,
    borderWidth: 2,
  },
  buttonText:{
    fontWeight: 'bold',
  },
  image:{
    paddingVertical: 30,
  }
});
export default Screen_1a;