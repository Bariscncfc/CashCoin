import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const Coin = ({ name, image, symbol, price, priceChange }) => {
  return (
    <View style={styles.CoinContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.imgText}>
          <Image
            source={{ uri: image }}
            style={{ width: 40, height: 40, marginLeft: 15 }}
          />
          <Text style={styles.title}>{name} </Text>
        </View>
        <Text style={styles.symbol}>Sembol: {symbol} </Text>
        <Text style={styles.price}> Fiyat:${price} </Text>
        {priceChange < 0 ? (
          <Text style={styles.red}> Değişim: {priceChange.toFixed(2)}%</Text>
        ) : (
          <Text style={styles.green}> Değişim: {priceChange.toFixed(2)}%</Text>
        )}
      </View>
      <Text style={styles.white}>
        ------------------------------------------------------------------
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  CoinContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222f3e",
    paddingTop: 20,
  },
  imgText: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  contentContainer: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    color: "#fff",
    marginLeft: 50,
  },
  symbol: {
    textAlign: "center",
    paddingLeft: 3,
    fontSize: 14,
    color: "#FFC312",
    paddingTop: 10,
  },
  price: {
    textAlign: "center",
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 14,
    color: "#1289A7",
  },
  red: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 3,
    paddingTop: 10,
  },
  green: {
    color: "green",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 3,
    paddingTop: 10,
  },
  white: {
    color: "#fff",
  },
});

export default Coin;
