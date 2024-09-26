import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

function FirstScreen({ route, navigation }) {
  //Lay mau tu param screen02
  const { selectedColor: selectedColorFromParams } = route.params || {}; 
  const [selectedColor, setSelectedColor] = useState('Blue');

  // Khi nhận params mới, cập nhật màu đã chọn
  useEffect(() => {
    if (selectedColorFromParams) {
      setSelectedColor(selectedColorFromParams);
    }
  }, [selectedColorFromParams]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          //source={require('../image/vs_blue.png')} 
           source={
            selectedColor === "#f30d0d"
              ? require('../image/vs_red.png')
              : selectedColor === "#000000"
              ? require('../image/vs_black.png')
              : selectedColor === "#c5f1fb"
              ? require('../image/vs_silver.png')
              : require('../image/vs_blue.png') // Mặc định là màu xanh
           }
             style={styles.image} 
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>★★★★★</Text>
          <Text style={styles.textCmt}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.costContainer}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>
        <View style={styles.refundContainer}>
          <Text style={styles.textRefund}>Ở đâu rẻ hơn hoàn tiền</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.pickerWrapper}
        onPress={() => navigation.navigate('Screen_02', { selectedColor })}
      >
        <Text style={styles.pickerText}>4 MÀU - CHỌN MÀU</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>


      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.buttonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 18,
    color: '#fdd835',
    marginRight: 8,
  },
  textCmt: {
    fontSize: 12,
    color: '#888',
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  refundContainer: {
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  textRefund: {
    fontSize: 14,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  pickerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#000000', 
    borderRadius: 8,
    width: '100%',
    marginBottom: 40,
  },
  pickerText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 24,
    color: '#000',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d32f2f',
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#d32f2f',
    paddingVertical: 16,
    width: '80%',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FirstScreen;
