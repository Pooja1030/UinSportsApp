import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


const CloseOpenButton = ({isDarkMode}) => {
  return (
    <View>
        <View style={styles.contentContainer}>
          <Text style={[styles.feedbackText,isDarkMode ?  styles.darkText: null ]}>   Give Your Feedback            X</Text>
        </View>

      <View style={styles.additionalContentContainer}>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoText, isDarkMode ?  styles.darkText : null ]}> <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8c2KvvRomeLOrvSFZroFaHvONa6yGMyO5xIAIJtGqIScE23TT6d7jQYQ2cPHNWYW5tI&usqp=CAU',}}
        style={{resizeMode:"cover",width: 40, height: 40}}
        /> CLUB FOR CRICKET...</Text>
          <Text style={[styles.infoText, {fontSize: 20, fontWeight:'semibold'},isDarkMode ? styles.darkText : null]}><Image
        source={{uri: 'https://t3.ftcdn.net/jpg/05/43/00/48/360_F_543004860_AiMa6Qr8ub2khwxduNxWg8R9bpYTauW4.jpg',}}
        style={{resizeMode:"cover",width: 40, height: 40, top:10}}
        />  Students, Club</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    bottom: -10,
  },
  feedbackText: {
    width: 410,
    height: 70,
    padding: 20,
    fontSize: 25,
    backgroundColor: "#ff8c00",
    color: "#000000",
    marginBottom: 30,
    fontWeight:"bold"
  },
  additionalContentContainer: {
    alignItems: "center",
    justifyContent: "center",
    right: 100,
    top: 0,

    
  },
  infoContainer: {
    bottom: -110,
    left: 120,
    borderWidth: 2,
    borderColor:"grey",
    borderRadius: 12,
    width: 340,
    alignItems: "center",
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  darkText: {
    color: '#ffffff', // White text color for dark mode
  },
});

export default CloseOpenButton;
