import ProfileCircle from "../../components/ProfileCircle";
import { StyleSheet, View } from "react-native";

export default function Profile() {
  return (
    <View>
      <View style={styles.back} />
      <View style={styles.container}>
        <ProfileCircle />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#242423",
    width: "100%",
    height: "100%",
  },
  back: {
    marginTop: 12,
    marginLeft: 12,
    height: 24,
    width: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
});
