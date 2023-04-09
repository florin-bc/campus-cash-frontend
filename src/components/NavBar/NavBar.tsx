import { StyleSheet, View, Text } from "react-native";
import Home from "../../../assets/icons/home.svg";
import Money from "../../../assets/icons/money.svg";
import Loan from "../../../assets/icons/loan.svg";

export default function NavBar() {
    const navigateHome = () => { console.log("navigateHome") }
    const navigatePayments = () => { console.log("navigatePayments") }
    const navigateLoans = () => { console.log("navigateLoans") }

  return (
    <View style={styles.container}>
      <Home onPress={navigateHome}/>
      <Money onPress={navigatePayments}/>
      <Loan onPress={navigateLoans}/>
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
