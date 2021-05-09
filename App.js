import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Text, SearchBar, Image } from "react-native-elements";
import Coin from "./src/components/Coin";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.titleProject}>CashCoin</Text>
        </View>
        {filterCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#222f3e",
    justifyContent: "center",
    alignItems: "center",
  },
  titleProject: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 50,
  },
});

export default App;
