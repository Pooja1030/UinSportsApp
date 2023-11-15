import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const badgesData = ['Good', 'All-Star Coach', 'Technique Excellent', 'Friendly'];

const BadgesList = ({ isDarkMode }) => {
  const [text, onChangeText] = useState('');
  const [selectedBadges, setSelectedBadges] = useState([]);

  const handleBadgeClick = (index) => {
    // Toggle the selection of the badge at the given index
    if (selectedBadges.includes(index)) {
      setSelectedBadges(selectedBadges.filter((badgeIndex) => badgeIndex !== index));
    } else {
      setSelectedBadges([...selectedBadges, index]);
    }
  };

  const isBadgeSelected = (index) => selectedBadges.includes(index);

  return (
    <View style={styles.badgesContainer}>
      <Text style={[styles.badgesHeader, isDarkMode ? styles.darkText : null]}>Badges</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.badgesScrollView}
      >
        {badgesData.map((badge, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.badge,
              isBadgeSelected(index) && styles.selectedBadge,
            ]}
            onPress={() => handleBadgeClick(index)}
          >
            <Text style={styles.badgeText}>{badge}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={[styles.TextContainer, isDarkMode ? styles.darkTextContainer : null]}>
        <Text style={[styles.TextHeader, isDarkMode ? styles.darkText : null]}>Comments</Text>
        <TextInput
          style={[
            styles.input,
            isDarkMode ? styles.darkInput : null,
            isDarkMode ? styles.darkText : null,
          ]}
          onChangeText={onChangeText}
          value={text}
          multiline
          numberOfLines={1}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgesContainer: {
    marginTop: 50,
    left: 10,
  },
  badgesHeader: {
    fontSize: 24,
    marginLeft: 160,
    bottom: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
  badgesScrollView: {
    flexDirection: 'row',
    padding: 0,
  },
  badge: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightgrey',
    padding: 10,
    marginRight: 15,
    height: 120,
    width: 120,
    shadowColor: '#f0e68c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  selectedBadge: {
    backgroundColor: '#808080',
  },
  TextContainer: {
    right: 10,
    top: 10,
    height: 260,
    color: '#000000',
    borderColor: 'lightgrey',
  },
  TextHeader: {
    fontSize: 24,
    marginLeft: 150,
    color: '#000000',
    top: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 150,
    margin: 12,
    borderRadius: 15,
    borderWidth: 2,
    padding: 10,
    color: '#000000',
    top: 25,
  },
  darkText: {
    color: '#ffffff',
  },
  darkTextContainer: {
    borderColor: 'white',
  },
  darkInput: {
    borderColor: 'white',
  },
});

export default BadgesList;
