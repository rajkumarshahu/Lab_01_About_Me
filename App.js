import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Greeting from './components/Greeting';
import Header from './components/Header';
import StudentID from './components/StudentID';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="About Me" />
      <Greeting />
      <Image
        source={{
          uri: 'https://rajkumarshahu.com/assets/images/raj-photo1.JPG',
        }}
        style={styles.img}
      />
      <StudentID />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#f5f1da',
  },
  img: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 20,
  },
});

export default App;
