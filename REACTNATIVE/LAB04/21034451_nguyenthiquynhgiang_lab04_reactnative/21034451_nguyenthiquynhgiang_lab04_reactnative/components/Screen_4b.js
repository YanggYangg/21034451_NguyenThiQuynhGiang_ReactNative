import React from 'react';
import { Text, StyleSheet, View, Image, Dimensions, TextInput, FlatList } from 'react-native';
import ListFooter from './Footer';

const { width, height } = Dimensions.get('window');

function Screen_4b() {
  const DATA = [
    { id: '1', img: require('../image/giacchuyen.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Shop 1', price: '69.900 đ', rating: 5, reviews: 15 },
    { id: '2', img: require('../image/daynguon.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Shop 2', price: '69.900 đ', rating: 4, reviews: 15 },
    { id: '3', img: require('../image/dauchuyendoipsps2.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Shop 3', price: '69.900 đ', rating: 3, reviews: 15 },
    { id: '4', img: require('../image/dauchuyendoi.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Shop 4', price: '69.900 đ', rating: 2, reviews: 15 },
    { id: '5', img: require('../image/carbusbtops2.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Shop 5', price: '69.900 đ', rating: 4, reviews: 15 },
    { id: '6', img: require('../image/daucam.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Shop 6', price: '69.900 đ', rating: 4, reviews: 15 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.img} style={styles.itemImage} />
      <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.itemShop}>Shop {item.shop}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{'★'.repeat(item.rating)}</Text>
        <Text style={styles.reviews}>({item.reviews})</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.item1}>
          <Image
            source={require('../icon/icons8-left-arrow-16.png')}
            style={styles.imageIcon}
          />
        </View>
        <View style={styles.item2}>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../icon/icons8-find-16.png')}
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Dây cáp usb"
              />
            </View>
          </View>
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../icon/icons8-cart-16.png')}
            style={styles.imageIcon}
          />
        </View>
        <View style={styles.item4}>
          <Image
            source={require('../icon/icons8-more-16.png')}
            style={styles.imageIcon}
          />
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2} //Hien 2 cot
          columnWrapperStyle={styles.row} // style cho moi cot
        />
        <ListFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#1ba9ff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: height * 0.08,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    left: 10,
  },
  inputField: {
    flex: 1,
    height: 30,
    paddingLeft: 30,
  },
  item1: {
    marginRight: 15,
  },
  item2: {
    flex: 1,
    marginHorizontal: 10,
  },
  item3: {
    marginHorizontal: 10,
  },
  item4: {
    marginLeft: 15,
  },
  imageIcon: {
    width: 16,
    height: 16,
  },
  bodyContainer: {
    flex: 1,
    //padding: 10,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,//Khoang cach giua cac item
    borderRadius: 5, 
    padding: 10, 
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  itemName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemShop: {
    color: '#777',
    fontSize: 12,
  },
  itemPrice: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    color: '#FFD700',
  },
  reviews: {
    marginLeft: 5,
    color: '#777',
  },
  row: {
    justifyContent: 'space-between',//gian cach moi muc cua moi hang
  },
});

export default Screen_4b;
