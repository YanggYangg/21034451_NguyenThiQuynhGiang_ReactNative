import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';

const Screen03 = () => {
  const [enterImg, setEnterImg] = useState('');
  const [enterName, setEnterName] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addProduct({ img: enterImg, name: enterName, price: enterPrice }));
    navigation.navigate('Screen02');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập link hình"
          value={enterImg}
          onChangeText={setEnterImg}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập tên sản phẩm"
          value={enterName}
          onChangeText={setEnterName}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập giá"
          value={enterPrice}
          onChangeText={setEnterPrice}
        />
      </View>

      <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
        <Text style={styles.textAdd}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btnAdd: {
    backgroundColor: 'red',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAdd: {
    fontSize: 18,
  },
});

export default Screen03;
