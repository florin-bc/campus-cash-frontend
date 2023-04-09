import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export default function Profile({nume, prenume}) {
    nume = "Rusu";
    prenume = "Andrei";
    const handleProfile = () => {
        console.log("Profile")
    }
  return <TouchableOpacity style={styles.circle} onPress={handleProfile}>
    <Text style={styles.init}>{prenume[0]}{nume[0]}</Text>
  </TouchableOpacity>;
}

styles = StyleSheet.create({
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#F5CB5C",
  },
  init: {
    fontSize: 24,
    color: "#242423",
  }
});
