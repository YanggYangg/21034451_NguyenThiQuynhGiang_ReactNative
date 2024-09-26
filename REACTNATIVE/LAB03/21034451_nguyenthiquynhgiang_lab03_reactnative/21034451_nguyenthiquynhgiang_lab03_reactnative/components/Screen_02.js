import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Screen_02({ route }) {
  const initialColor = route?.params?.selectedColor || '#c5f1fb';
  
  const colors = ['#c5f1fb', '#f30d0d', '#000000', '#4d6dc1']; 
  const colorImageMap = {
    '#c5f1fb': require('../image/vs_silver.png'),
    '#f30d0d': require('../image/vs_red.png'),
    '#000000': require('../image/vs_black.png'),
    '#4d6dc1': require('../image/vs_blue.png'),
  };

  const [selectedColor, setSelectedColor] = useState(initialColor);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={colorImageMap[selectedColor]} 
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.textTitle}>Hàng chính hãng</Text>
        </View>
      </View>
      
      <View style={styles.chooseColorContainer}>
        <View style={styles.textColorContainer}>
          <Text style={styles.textTitleColor}>Chọn một màu bên dưới</Text>
        </View>
        
        <View style={styles.colorContainer}>

          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorButton, { backgroundColor: color }]}
              onPress={() => setSelectedColor(color)} 
            />
          ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.buttonXong}
              onPress={() => navigation.navigate('FirstScreen', { selectedColor })} //Truyen mau da chon ve firstscren 
            >
              <Text style={styles.textButton}>XONG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10, 
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
  }, 
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chooseColorContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  textColorContainer: {
    marginLeft: 15,
    marginTop: 10,
  },
  textTitleColor: {
    fontSize: 18,
  },
  colorContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  colorButton: {
    width: 100,
    height: 100,
    marginBottom: 35,
  },
  buttonContainer: {},
  buttonXong: {
    backgroundColor: '#4d6dc1',
    height: 60,
    width: 370,
    borderRadius: 20,
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    marginTop: 15,
  },
});

export default Screen_02;
