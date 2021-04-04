import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import ResultsList from "./ResultsList";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.textStyle}>{result.name}</Text>
      <Text style={styles.subStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginLeft: 15,
    marginBottom: 5,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 15,
  },
  subStyle: {
    fontWeight: "100",
    marginLeft: 15,
  },
});

export default ResultsDetail;
