import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Plane from "../../../../assets/icons/plane.svg";
import NavBar from "../../../components/NavBar/NavBar";

export default function Loan() {
  const [course, setCourse] = useState("");
  const [amount, setAmount] = useState("");

  const handleCourseChange = (newText: string) => {
    setCourse(newText);
  };

  const handleAmountChange = (newText: string) => {
    setAmount(newText);
  };

  const handleSubmit = () => {
    // handle form submission with the text input value
    console.log(course, " ", amount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cere un împrumut</Text>
      <View style={styles.flex}>
        <View style={styles.box}>
          <TextInput
            style={styles.id}
            editable={true}
            placeholder="Data"
            value={course}
            onChangeText={handleCourseChange}
          ></TextInput>
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.id}
            editable={true}
            placeholder="Suma"
            value={amount}
            onChangeText={handleAmountChange}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.login} onPress={handleSubmit}>
          <Plane />
          <Text style={styles.title2}>Cere</Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#242423",
    display: "flex",
  },
  title: {
    marginTop: 120,
    marginLeft: 20,
    color: "#E8EDDF",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  id: {
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 12,
  },
  box: {
    display: "flex",
    width: "85%",
    height: 60,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 12,
    padding: 8,
    marginTop: 20,
    backgroundColor: "rgba(232, 237, 223, 0.19)",
    fontSize: 18,
    color: "#E8EDDF",
    fontWeight: "400",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginTop: 60,
  },
  login: {
    display: "flex",
    flexDirection: "row",
    width: 175,
    height: 60,
    marginTop: 60,
    alignItems: "center",
    backgroundColor: "#F5CB5C",
    borderRadius: 8,
    justifyContent: "center",
  },
  title2: {
    color: "#242423",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginLeft: 24,
  },
});
