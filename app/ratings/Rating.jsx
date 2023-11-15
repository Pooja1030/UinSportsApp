import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rating = ({ maxStars = 5, isDarkMode }) => {
  const [rating, setRating] = useState(0);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleStarPress(i)}
          style={styles.starButton}
        >
          <Icon
            name={i <= rating ? 'star' : 'star-o'}
            size={25}
            color={i <= rating ? 'gold' : 'gray'}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.ratingContainer}>
      <Text style={[styles.ratingHeader, isDarkMode ?  styles.darkText: null]}>Overall Rating</Text>
      <View style={styles.ratingStarsContainer}>
        {renderStars()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    marginTop: 150,
    alignItems: 'center',
  },
  ratingHeader: {
    fontSize: 24,
    left: 10,
    color: '#000000',
    fontWeight: "bold"
  },
  ratingStarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#483d8b',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 10,
    height:59,
    width: 220,
    left:10
  },
  starButton: {
    padding: 5,
  },
  darkText: {
    color: '#ffffff', // White text color for dark mode
  },
});

export default Rating;
