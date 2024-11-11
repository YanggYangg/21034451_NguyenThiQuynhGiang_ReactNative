import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { setFilter, deleteProduct  } from './productsSlice';

const Screen02 = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const filter = useSelector((state) => state.products.filter);

  const filteredProducts = products.filter(
    (product) => filter === 'All' || product.category === filter
  );

  const handleTabPress = (category) => {
    dispatch(setFilter(category));
  };

  const renderProduct = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.img} style={styles.itemImage} />
    <TouchableOpacity onPress={() => navigation.navigate('Screen04', { item })}>
      <Ionicons name="pencil-outline" size={20} color="black" style={styles.iconButton} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => dispatch(deleteProduct(item.id))}>
      <Ionicons name="trash-outline" size={20} color="black" style={styles.iconButton} />
    </TouchableOpacity>
    <Text style={styles.itemText}>{item.name}</Text>
    <Text style={styles.itemText}>${item.price}</Text>
  </View>
);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Screen01')}>
          <Ionicons name="arrow-back-outline" size={24} color="black" style={styles.iconButton} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>The world’s Best Bike</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.buttonTab} onPress={() => handleTabPress('All')}>
          <Text style={styles.textAll}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTab} onPress={() => handleTabPress('RoadBike')}>
          <Text style={styles.textAll}>RoadBike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTab} onPress={() => handleTabPress('Mountain')}>
          <Text style={styles.textAll}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      <View style={styles.addButton}>
        <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('Screen03')}>
          <Text style={styles.textAdd}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  titleContainer: {},
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  buttonTab: {
    borderWidth: 1,
    height: 30,
    width: 80,
    borderColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textAll: {
    textAlign: 'center',
  },
  productList: {
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemText: {
    textAlign: 'center',
  },
  favoriteIcon: {
    fontSize: 18,
    color: 'red',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAdd: {
    backgroundColor: 'pink',
    width: '80%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textAdd: {
    textAlign: 'center',
  },
});

export default Screen02;
