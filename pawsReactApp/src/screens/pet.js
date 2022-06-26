import React from 'react';
import {Text, StyleSheet} from 'react-native';

const PetScreen = function () {
  return <Text style={styles.textStyle}>This is the pet screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default PetScreen;
