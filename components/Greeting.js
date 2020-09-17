import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Greeting = () => {
  return (
    <View style={styles.greeting}>
      <Text style={styles.text}>Hi! I am Raj Kumar Shahu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    height: 60,
    padding: 15,
  },
  text: {
    color: '#00416d',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default Greeting;
