import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import House from "../../../assets/icons/house.svg";
import University from "../../../assets/icons/university.svg";
import Cash from "../../../assets/icons/cashr.svg";
import NavBar from "../../components/NavBar/NavBar";
import ProjectScreenContainer from "../../components/ProjectScreenContainer";

export default function Payments() {
  const handleDorm = () => {
    console.log("Platesc caminul");
  };
  const handleTax = () => {
    console.log("Platesc taxa lunara");
  };
  const handleRestance = () => {
    console.log("Platesc restanta");
  };
  const handleCourse = () => {
    console.log("Platesc materia");
  };

  return (
    <ProjectScreenContainer>
      <Text style={styles.title}>Payments</Text>
      <View style={styles.flexbox}>
        <TouchableOpacity style={styles.box} onPress={handleDorm}>
          <House style={styles.img}></House>
          <Text style={styles.option}>Plată cămin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={handleTax}>
          <University style={styles.img2}></University>
          <Text style={styles.option}>Plată taxă</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={handleRestance}>
          <Cash style={styles.img}></Cash>
          <Text style={styles.option}>Plată restanță</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={handleCourse}>
          <Cash style={styles.img}></Cash>
          <Text style={styles.option}>Plata materie (facult.)</Text>
        </TouchableOpacity>
      </View>
      <NavBar context={"Payments"} />
    </ProjectScreenContainer>
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
    fontWeight: "regular",
    fontFamily: "Roboto",
  },
  flexbox: {
    marginTop: 48,
    display: "flex",
    alignItems: "center",
  },
  box: {
    marginTop: 28,
    display: "flex",
    flexDirection: "row",
    width: "85%",
    height: 56,
    backgroundColor: "#F5CB5C",
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
  img: {
    marginLeft: 20,
  },
  img2: {
    marginLeft: 10,
  },
});
