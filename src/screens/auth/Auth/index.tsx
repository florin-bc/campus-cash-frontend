import { StyleSheet, Text, View, Image } from "react-native";
import LoginButton from "../../../components/LoginButton";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationType } from "../../../router/types";

const Auth = () => {
  const navigation = useNavigation<RootNavigationType<"Auth">>();

  const navigateToMoodleAuth = () => navigation?.push("MoodleAuth");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/Screenshot_7.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.motto}>We make it easy for you:{`\)`}</Text>
      <LoginButton onPress={navigateToMoodleAuth} />
      <Text style={styles.terms} onPress={() => console.log("pressed")}>
        Terms and conditions
      </Text>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#242423",
  },
  motto: {
    color: "#E8EDDF",
    fontSize: 18,
    fontWeight: "200",
    opacity: 0.5,
    marginTop: 20,
    marginBottom: 80,
  },
  logo: {
    width: 122,
    height: 154,
    marginTop: 122,
  },
  terms: {
    color: "#E8EDDF",
    fontSize: 18,
    fontWeight: "medium",
    position: "absolute",
    bottom: 40,
  },
});
