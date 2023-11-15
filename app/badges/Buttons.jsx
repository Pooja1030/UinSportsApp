import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const handleSubmit = () => {
  // Add your submission logic here
  console.log("Submitted");
};

const Buttons = () => {
  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={styles.Button}
        onPress={handleSubmit}
      >
        <Text style={styles.ButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 250,
  },
  Button: {
    backgroundColor: '#32CD32', 
    width: 120, 
    height: 43, 
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  ButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20, 
  },
});

export default Buttons;

