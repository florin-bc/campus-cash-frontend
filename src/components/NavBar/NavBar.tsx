import { StyleSheet, View, Text } from "react-native";
import Home from "../../../assets/icons/home.svg";
import Money from "../../../assets/icons/money.svg";
import Loan from "../../../assets/icons/loan.svg";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationType } from "../../router/types";

export default function NavBar({ context }: any) {
  const navigation = useNavigation<RootNavigationType<typeof context>>();
  const navigateHome = () => {
    navigation?.push("Home");
  };
  const navigatePayments = () => {
    navigation?.push("Payments");
  };
  const navigateLoans = () => {
    navigation?.push("Loans");
  };

  return (
    <View style={styles.container}>
      <Home onPress={navigateHome} />
      <Money onPress={navigatePayments} />
      <Loan onPress={navigateLoans} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: 56,
    bottom: 0,
    backgroundColor: "rgba(207, 219, 213, 0.2)",
  },
});
