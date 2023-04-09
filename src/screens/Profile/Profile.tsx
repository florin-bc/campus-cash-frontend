import ProfileCircle from "../../components/ProfileCircle";
import { StyleSheet, TextInput, Text, View, ScrollView } from "react-native";

export default function Profile({ name, firstname, rating}) {
  firstname = "Rodrigo";
  name = "Miguel";
  rating = 5;

  const data = {
    id: undefined,
    email: undefined,
    phone: undefined,
    birthdate: undefined,
    university: undefined,
    faculty: undefined,
    field: undefined,
    group: undefined,
    dorm: undefined,
    room: undefined,
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameprofile}>
        <View style={styles.namecontainer}>
          <Text style={styles.bigname}>
            {firstname} {name}
          </Text>
          <Text style={styles.rating}>Rating: {rating}</Text>
        </View>
        <ProfileCircle firstname={firstname} name={name} />
      </View>
      <ScrollView horizontal={false} style={styles.scroll}>
        <TextInput style={styles.box} editable={false} value={`User ID: @${data.id}`}></TextInput>
        <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Email: ${data.email}`}></TextInput>
        </View>
        <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Telefon: ${data.phone}`}></TextInput>
        </View>
        <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Data nașterii: ${data.birthdate}`}></TextInput>
        </View>
        <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Universitate: ${data.university}`}></TextInput>
        </View>
        <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Facultate: ${data.faculty}`}></TextInput>
        </View>
        <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Specializare: ${data.field}`}></TextInput>
        </View>
        <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Grupa: ${data.group}`}></TextInput>
        </View>
        {data.dorm ? <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Cămin: ${data.dorm}`}></TextInput>
        </View>: null}
        {data.room ? <View style={styles.box}>
          <TextInput style={styles.id} editable={false} value={`Camera: ${data.room}`}></TextInput>
        </View>: null}
      </ScrollView>
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
  nameprofile: {
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    paddingBottom: 12,
  },
  namecontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  bigname: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E8EDDF",
  },
  rating: {
    fontSize: 16,
    color: "#E8EDDF",
    fontWeight: "400",
  },
  id: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "400",
    opacity: 1,
  },
  box: {
    display: "flex",
    width: "100%",
    height: 60,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 12,
    padding: 8,
    marginTop: 20,
    // backgroundColor: "#CFDBD5",
    backgroundColor: 'rgba(232, 237, 223, 0.19)',
    // opacity: 0.19,
    fontSize: 18,
    color: "#E8EDDF",
    fontWeight: "400",
  },
  scroll: {
    width: "85%",
  },
});
