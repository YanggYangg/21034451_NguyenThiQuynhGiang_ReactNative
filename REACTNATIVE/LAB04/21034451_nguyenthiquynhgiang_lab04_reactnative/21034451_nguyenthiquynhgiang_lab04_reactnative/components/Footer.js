import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ListFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconLeft} onPress={() => alert('Menu pressed')}>
        <Image
          source={require('../icon/icons8-menu-16.png')}
          style={styles.imageIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconCenter} onPress={() => alert('Home pressed')}>
        <Image
          source={require('../icon/icons8-home-16.png')}
          style={styles.imageIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconRight} onPress={() => alert('Return pressed')}>
        <Image
          source={require('../icon/icons8-return-16.png')}
          style={styles.imageIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#1ba9ff',
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between', //can trai, giua, phai
    alignItems: 'center',
    position: 'absolute',//Vi tri tuyet doi
    bottom: 0,//xuong day man hinh
    paddingHorizontal: 20, //Khoang cach giua icon voi bien
  },
  iconLeft: {
    flex: 1, 
    alignItems: 'flex-start',
  },
  iconCenter: {
    flex: 1,
    alignItems: 'center',
  },
  iconRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  imageIcon: {
    width: 30,
    height: 30,
  },
});

export default ListFooter;
