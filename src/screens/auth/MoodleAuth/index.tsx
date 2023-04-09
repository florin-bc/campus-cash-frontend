import { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import ProjectScreenContainer from "../../../components/ProjectScreenContainer";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationType } from "../../../router/types";
import { AuthContext } from "../../../providers/AuthProvider/context";

const MoodleAuth = () => {
  const navigation = useNavigation<RootNavigationType<"MoodleAuth">>();

  const { authenticateUser } = useContext(AuthContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (newText: string) => {
    setUser(newText);
  };

  const handlePasswordChange = (newText: string) => {
    setPassword(newText);
  };

  const handleSubmit = async () => {
    const loginObj = { email: user, password };
    const result = await authenticateUser(loginObj, "emailAndPass");
    if (!result) {
      return;
    }
    navigation.navigate("Home");
  };

  return (
    <ProjectScreenContainer rightButton={"close"}>
      <View style={styles.container}>
        <View style={styles.bluebox}>
          <View style={styles.bluedark}>
            <Text style={styles.title}>
              UNIVERSITATEA POLITEHNICA BUCUREȘTI
            </Text>
          </View>
        </View>
        <Text style={styles.logintext}>Log in to your account</Text>
        <Image
          source={require("../../../../assets/UPB_C-1-e1605917237180-300x300.png")}
          style={styles.logo}
        ></Image>
        <View style={styles.username}>
          <Text style={styles.credentials}>Username or email</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleUserChange}
            value={user}
            placeholder="Username or email"
          />
        </View>
        <View style={styles.username}>
          <Text style={styles.credentials2}>Pasword</Text>
          <TextInput
            style={styles.input}
            onChangeText={handlePasswordChange}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <TouchableNativeFeedback style={styles.login} onPress={handleSubmit}>
          <View style={styles.login}>
            <Text style={styles.title}>Log in</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ProjectScreenContainer>
  );
};

export default MoodleAuth;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  backContainer: {
    width: "100%",
    height: 32,
    marginTop: 40,
    display: "flex",
  },
  back: {
    width: 24,
    height: 24,
    marginRight: 16,
    backgroundColor: "#000000",
    alignSelf: "flex-end",
  },
  bluebox: {
    display: "flex",
    width: "100%",
    height: 90,
    backgroundColor: "#5677B7",
    justifyContent: "center",
    alignItems: "center",
  },
  bluedark: {
    display: "flex",
    width: "85%",
    height: 50,
    backgroundColor: "#2E4C86",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  logintext: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "300",
  },
  logo: {
    marginTop: 20,
    height: 126,
    width: 126,
  },
  username: {
    marginTop: 40,
    width: "85%",
  },
  credentials: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "300",
  },
  credentials2: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "300",
    marginTop: -20,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 12,
    borderTopColor: "#CFDBD5",
    borderLeftColor: "#CFDBD5",
    borderRightColor: "#CFDBD5",
    width: "100%",
    marginBottom: 10,
    padding: 10,
  },
  login: {
    display: "flex",
    width: 175,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5677B7",
    borderRadius: 8,
  },
});
