import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStlye}>
      <Ionicons style={styles.iconStyles} name="ios-search" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStlye: {
    backgroundColor: "lightgray",
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: "row",
    marginBottom: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyles: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 5,
  },
});

export default SearchBar;
