import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";

export default function Login() {
  return (
    <TouchableNativeFeedback>
      <View style={styles.box}>
        <Image
          source={require("../assets/moodle-logo-short1.png")}
          style={styles.moodle}
        ></Image>
        <Text style={styles.authbutton}>Log in with Moodle</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 240,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#F5CB5C",
  },
  moodle: {
    width: 32,
    height: 20,
  },
  authbutton: {
    color: "#242423",
    fontSize: 18,
    fontWeight: "medium",
  },
});
