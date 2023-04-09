import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import miniProfil from "../../../../screens/Otokare";

const MiniProfile = ({ miniProfil }) => {
  return (
    <View style={styles.flex}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${miniProfil.photo}`,
          }}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.nameLvl}>
            <Text style={styles.name}>{miniProfil.name}</Text>
            <Text style={styles.level}>(Lvl: {miniProfil.lvl})</Text>
          </View>
          <Text style={styles.xp}>XP: {miniProfil.xp}</Text>
          <Text style={styles.id}>@{miniProfil.username}</Text>
        </View>
        <Icon name="edit" size={32} color="#fff" style={styles.editIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    width: "100%",
    height: 96,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    paddingBottom: 10,
    elevation: 5,
  },
  container: {
    width: "90%",
    height: 84,
    backgroundColor: "#2196F3",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    elevation: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#fff",
    borderWidth: 2,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  nameLvl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  level: {
    color: "#D7D7D7",
    fontSize: 11,
    marginRight: 20,
  },
  xp: {
    color: "#D7D7D7",
    fontSize: 11,
  },
  id: {
    color: "#D7D7D7",
    fontSize: 11,
  },
  editIcon: {
    marginLeft: 10,
  },
});

export default MiniProfile;
