import React from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import ListFooter from './Footer';

const { width, height } = Dimensions.get('window');

function Screen_4a() {
  const DATA = [
    { id: '1', img: require('../image/ca_nau_lau.png'), name: 'Ca nấu lẩu, nấu mì mini', shop: 'DeVang' },
    { id: '2', img: require('../image/ga_bo_toi.png'), name: '1Kg khô gà bơ tỏi', shop: 'LDT Food' },
    { id: '3', img: require('../image/xa_can_cau.png'), name: 'Xe cần cẩu', shop: 'Thế giới đồ chơi' },
    { id: '4', img: require('../image/do_choi_dang_mo_hinh.png'), name: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi' },
    { id: '5', img: require('../image/lanh_dao_gian_don.png'), name: 'Lãnh đạo giảng đơn', shop: 'Minh Long Book' },
    { id: '6', img: require('../image/hieu_long_con_tre.png'), name: 'Hiểu lòng con trẻ', shop: 'Minh Long Book' },
    { id: '7', img: require('../image/ca_nau_lau.png'), name: 'Ca nấu lẩu, nấu mì mini', shop: 'DeVang' },
    { id: '8', img: require('../image/ga_bo_toi.png'), name: '1Kg khô gà bơ tỏi', shop: 'LDT Food' },
    { id: '9', img: require('../image/xa_can_cau.png'), name: 'Xe cần cẩu', shop: 'Thế giới đồ chơi' },
    { id: '10', img: require('../image/do_choi_dang_mo_hinh.png'), name: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi' },
    { id: '11', img: require('../image/lanh_dao_gian_don.png'), name: 'Lãnh đạo giảng đơn', shop: 'Minh Long Book' },
    { id: '12', img: require('../image/hieu_long_con_tre.png'), name: 'Hiểu lòng con trẻ', shop: 'Minh Long Book' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.img} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.itemShop}>Shop {item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.left}>
          <Image
            source={require('../icon/icons8-left-arrow-16.png')}
            style={styles.imageIcon}
          />
        </View>

        <View style={styles.center}>
          <Text style={styles.textCenter}>Chat</Text>
        </View>

        <View style={styles.right}>
          <Image
            source={require('../icon/icons8-cart-16.png')}
            style={styles.imageIcon}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop</Text>
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <ListFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05,//Ty le phan tram chieu cao man hinh
  },
  headerContainer: {
    backgroundColor: '#1ba9ff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: height * 0.08,//chieu cao header 8%
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  center: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    color: 'white',
    fontSize: width * 0.05,//Ty le phan tram chieu rong man hinh
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  imageIcon: {
    width: width * 0.08,   
    height: width * 0.08, 
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  textContainer: {
    backgroundColor: '#e5e5e5',
    width: '100%',
    paddingVertical: height * 0.01, //Khoang cach tren duoi
  },
  text: {
    fontSize: width * 0.04,  
    marginLeft: width * 0.02,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: width * 0.03,
    borderRadius: 8,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemImage: {
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'contain',
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: width * 0.04,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
  },
  itemShop: {
    fontSize: width * 0.04,
    color: '#f00',
    marginTop: 4,
  },
  chatButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.04, 
  },
});

export default Screen_4a;
