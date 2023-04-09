import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import buses from "../../../../screens/Otokare";

const BusCard = ({bus }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${bus.photo}`,
        }}
      />
      <Text style={[styles.vehicle, styles.vehicle1]}>{bus.name}</Text>
      <Text style={styles.vehicle}>{bus.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 129,
    marginTop: 12,
    borderRadius: 12,
    borderColor: "grey",
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: "grey",
    borderWidth: 2,
  },
  vehicle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  vehicle1: {
    marginTop: 10,
  },
});

export default BusCard;
