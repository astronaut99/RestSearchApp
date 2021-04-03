import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something Went Wrong");
    }
  };

  // Call search api when component is first rendered.
  useEffect(() => {
    searchApi("mo");
  }, []);

  return [searchApi, results, errorMessage];
};
