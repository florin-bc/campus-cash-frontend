import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Person from "../../../assets/icons/icon_person.svg";
import World from "../../../assets/icons/world.svg";
import Document from "../../../assets/icons/document.svg";
import NavBar from "../../components/NavBar/NavBar";

export default function Settings() {
  const handleAccount = () => {
    console.log("Am ajuns pe profil");
  };
  const handleLanguage = () => {
    console.log("Pot schimba limba/nu momentan");
  };
  const handleTerms = () => {
    console.log("Pot vedea termenii si conditiile");
  };
  const handleClose = () => {
    console.log("Pot inchide contul");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cont</Text>
      <View style={styles.flexbox}>
        <TouchableOpacity style={styles.box} onPress={handleAccount}>
          <Person style={styles.img}></Person>
          <Text style={styles.option}>Detalii cont</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={handleLanguage}>
          <World style={styles.img}></World>
          <Text style={styles.option}>Limbă</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={handleTerms}>
          <Document style={styles.img}></Document>
          <Text style={styles.option}>Termeni și condiții</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2} onPress={handleClose}>
          <Text style={styles.option2}>Închide contul</Text>
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
  },
  title: {
    marginTop: 60,
    marginLeft: 20,
    color: "#E8EDDF",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  flexbox: {
    marginTop: 48,
    display: "flex",
    alignItems: "center",
  },
  box: {
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    width: "85%",
    height: 56,
    backgroundColor: "#E8EDDF",
    borderRadius: 12,
    alignItems: "center",
  },
  option: {
    marginLeft: 40,
    color: "#242423",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  box2: {
    marginTop: 240,
    display: "flex",
    flexDirection: "row",
    width: "85%",
    height: 56,
    backgroundColor: "#CA0000",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  option2: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
  img: {
    marginLeft: 20,
  },
});
