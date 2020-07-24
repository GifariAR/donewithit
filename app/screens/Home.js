import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Button,
  Alert,
  Image,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("informasi");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 10,
          position: "relative",
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Aplikasi Pengenalan Alat Musik Tradisional Indonesia
          </Text>
        </View>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../assets/angklung.png")}
        ></Image>
      </View>
      <View>
        <Button
          style={styles.buttonstyle}
          title="Mulai"
          onPress={() => navigation.navigate("Aplikasi")}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Tentang"
          onPress={() => navigation.navigate("Informasi")}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Keluar"
          onPress={() => navigation.navigate("Informasisaya")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  buttonstyle: {
    borderRadius: 50,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    justifyContent: "flex-start",
    width: 200,
  },
});

export default Home;
