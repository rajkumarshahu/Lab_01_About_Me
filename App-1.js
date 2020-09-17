import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Image
        source={{
          uri: 'https://rajkumarshahu.com/assets/images/raj-photo1.JPG',
        }}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  img: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    borderRadius: 50,
  },
});

export default App;
