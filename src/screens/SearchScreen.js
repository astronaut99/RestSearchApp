import { View, Text } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterByPrice = (price) => {
    //price === '$' | '$$' | '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };
  console.log(results);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterByPrice("$$$")} title="Big Spender" />
    </View>
  );
};
export default SearchScreen;
