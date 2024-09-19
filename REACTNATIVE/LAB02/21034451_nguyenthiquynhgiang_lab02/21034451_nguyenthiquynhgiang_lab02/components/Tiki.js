import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, 
         StyleSheet, Image, SafeAreaView, Dimensions
        } from 'react-native';

const { width, height } = Dimensions.get('window');

const Tiki = () => {
  const [quantity, setQuantity] = useState(1);//So luong 
  const [total, setTotal] = useState(141800);//Tong
  const [discountCode, setDiscountCode] = useState('');

  //Thay doi so luong
  const handleQuantityChange = (type) => {
    const pricePerItem = 141800;
    if (type === 'increase') {
      setQuantity(quantity + 1);
      setTotal((quantity + 1) * pricePerItem);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
      setTotal((quantity - 1) * pricePerItem);
    }
  };

  const handleBuyLater = () => {};

  const applyDiscount = () => {
    // const randomCode = Math.floor(100000 + Math.random() * 900000).toString(); 
    // setDiscountCode(randomCode); 
    const generateRandomCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomCode = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length); 
      randomCode += characters[randomIndex];
    }
    return randomCode;
  };

  const randomCode = generateRandomCode(6); 
  setDiscountCode(randomCode); 
  console.log('Discount code applied:', randomCode);
  };

  const handleOrder = () => {
    console.log('Proceed to place the order');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <View style={styles.firstComponent}>
        <View style={styles.row}>
          <Image 
            source={require('../image/NguyenHamTichPhan.jpg')} 
            style={styles.image} 
          />
          
          <View style={styles.productContainer}>
            <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.supplier}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price}>{total.toLocaleString()} đ</Text>

            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => handleQuantityChange('decrease')}
                disabled={quantity === 1}
                style={[styles.quantityButton, quantity === 1 && styles.disabledButton]}>
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityValue}>{quantity}</Text>

              <TouchableOpacity onPress={() => handleQuantityChange('increase')} style={styles.quantityButton}>
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buyLaterText}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.discountContainer}>
          <TextInput
            style={styles.discountInput}
            placeholder="Mã giảm giá"
            value={discountCode}
            onChangeText={setDiscountCode}
          />
          <Button title="Áp dụng" onPress={applyDiscount} />
        </View>

        </View>


        <View style={styles.giftContainer}>
          <Text>Bạn có phiếu quà tặng Tiki/Got it/Urbox ? </Text>
          <TouchableOpacity style={styles.textGift}>
          <Text style={styles.textGift} >Nhập tại đây</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Tạm tính</Text>
          <Text style={styles.totalPrice}>{total.toLocaleString()} đ</Text>
        </View>

        <View style={styles.buttonContainer} >
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Thành tiền</Text>
          <Text style={styles.totalPrice}>{total.toLocaleString()} đ</Text>
        </View>
        <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
          <Text style={styles.orderButtonText}>Tiến hành đặt hàng</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#c4c4c4',
  },
  container: {
    flex: 1,
    padding: 1.5,
  },
  firstComponent:{
    backgroundColor: '#fff',
    marginBottom: 32,
  },
  row: {
    flexDirection: 'row',  
    alignItems: 'flex-start',  
  },
  image: {
    width: 100, 
    height: 160, 
    resizeMode: 'contain',
    marginRight: 16,  
    backgroundColor: '#fff'
  },
  productContainer: {
    flex: 1,  
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  supplier: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E53935',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  quantityText: {
    fontSize: 18,
  },
  quantityValue: {
    fontSize: 16,
  },
  buyLaterText: {
    color: 'blue',
    marginLeft: 16,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  discountInput: {
    flex: 1,
    height: 40,
    borderColor: '#f2dd1b',
    borderWidth: 2,
    marginRight: 8,
    paddingHorizontal: 8,
    marginVertical: 20
  },
  giftContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  textGift: {
    color: "blue",
  },
  totalContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 16,
  },
  totalText: {
    fontSize: 16,
    color: '#333',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#E53935',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer:{
    backgroundColor: '#fff',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 16,

  },
});

export default Tiki;
