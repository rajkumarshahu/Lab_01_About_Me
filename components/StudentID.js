import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StudentID = () => {
  return (
    <View style={styles.studentId}>
      <Text style={styles.text}>Student ID: 300783746</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  studentId: {
    height: 60,
    padding: 15,
  },
  text: {
    color: '#00416d',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default StudentID;
