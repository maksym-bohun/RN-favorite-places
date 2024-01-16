import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({ name, size, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.icon}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});
