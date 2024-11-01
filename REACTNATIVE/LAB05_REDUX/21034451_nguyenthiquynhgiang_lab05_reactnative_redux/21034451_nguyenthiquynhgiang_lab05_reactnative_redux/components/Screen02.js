import React, { useEffect } from 'react';
import { Text, StyleSheet, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, addTodo } from './todoSlice';
import { useRoute, useNavigation } from '@react-navigation/native';

const Screen02 = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const navigation = useNavigation(); 
  const route = useRoute();
  const { userName } = route.params || {};

  useEffect(() => {
    if (route.params?.newJob) {
      dispatch(addTodo(route.params.newJob));
    }
  }, [route.params?.newJob, dispatch]);
  
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleToggle(item.id)}>
        <Ionicons 
          name={item.completed ? 'checkbox-outline' : 'square-outline'} 
          size={24} 
          color="black" 
        />
      </TouchableOpacity>
      <Text style={[styles.itemTitle, item.completed && styles.completed]}>
        {item.title}
      </Text>
      <TouchableOpacity onPress={() => handleRemove(item.id)}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="arrow-back-outline" size={24} color="black" style={styles.icon} />
        
        <View style={styles.profileContainer}>
          <Image 
            source={require('../assets/User.png')} 
            style={styles.image} 
          />
          <View style={styles.textContainer}>
            <Text style={styles.text01}>Hi {userName} </Text>
            <Text style={styles.text02}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.findContainer}>
        <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="Search" 
          placeholderTextColor="#bcc1ca" 
        />
      </View>

      <View style={styles.listToDoContainer}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => {
          navigation.navigate('Screen03');
        }}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
  },
  textContainer: {
    paddingLeft: 10,
  },
  text01: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text02: {
    color: '#999999',
    fontSize: 14,
  },
  findContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 43,
    borderWidth: 1,
    borderColor: '#9095a0',
    paddingHorizontal: 16,
    marginVertical: 20,
    alignSelf: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    color: '#000',
  },
  listToDoContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#30c8f8',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen02;
