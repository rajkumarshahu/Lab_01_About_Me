import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import Greeting from './components/Greeting';
import Header from './components/Header';
import StudentID from './components/StudentID';
// import MyDetails from './components/MyDetails';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="About Me" />
      <Greeting />
      <Image
        source={{
          uri: 'https://rajkumarshahu.com/assets/images/raj-photo1.JPG',
        }}
        style={styles.img}
      />
      <StudentID />
      {/* <MyDetails /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#f5f1da',
  },
  img: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
  },
});

export default App;
