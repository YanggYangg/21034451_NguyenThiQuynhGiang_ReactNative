import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Step01 = () => {
  const [data, setData] = useState([]);
  //Luu data vao AsyncStorage
  const saveDataToStorage = async (dataToSave) => {
    try {
      await AsyncStorage.setItem('storedData', JSON.stringify(dataToSave));
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu:", error);
    }
  };

  //Lay data tu AsyncStorage
  const loadDataFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('storedData');
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      } else {
        //ko co data trong AsyncStorage thi goi API
        fetchDataFromAPIs();
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  //2 API bat ky
  const fetchDataFromAPIs = async () => {
    try {
      const [commentsResponse, postsResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/posts')
      ]);
      const comments = await commentsResponse.json();
      const posts = await postsResponse.json();

      const randomComments = comments.slice(0, 1);
      const randomPosts = posts.slice(0, 1);

      const combinedData = [
        ...randomComments.map(item => ({ id: item.id, name: item.name, email: item.email })),
        ...randomPosts.map(item => ({ id: item.id, name: item.title, email: 'No email' }))
      ];

      setData(combinedData);
      saveDataToStorage(combinedData);
    } catch (error) {
      Alert.alert('Thất bại', 'Không thể lấy dữ liệu từ API');
      console.error(error);
    }
  };

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  // add data bat ky
  const addRandomData = () => {
    const randomId = Math.floor(Math.random() * 1000); 
    const newItem = {
      id: randomId,
      name: `Người dùng ${randomId}`, 
      email: `user${randomId}@example.com`, 
    };

    const updatedData = [...data, newItem];
    setData(updatedData);
    saveDataToStorage(updatedData); // Luu data vao AsyncStorage
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemId}>ID: {item.id}</Text>
      <Text style={styles.itemName}>Name: {item.name}</Text>
      <Text style={styles.itemEmail}>Email: {item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addRandomData}>
          <Text style={styles.text}>Thêm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Xóa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sửa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.displayContainer}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <Text>Không có dữ liệu</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#DDDDDD'
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#33CCFF',
    marginBottom: 20,
    height: 40,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  displayContainer: {
    padding: 10,
    borderWidth: 2,
    width: '100%',
    height: '65%',
    borderRadius: 20,
    borderColor: '#ddd',
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#333',
  },
  itemEmail: {
    fontSize: 16,
    color: '#666',
  },
  itemId: {
    color: 'red',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default Step01;
