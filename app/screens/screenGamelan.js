import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "./Latihan1";

const Separator = () => <View style={styles.separator} />;

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Beranda");
  };
  return (
    <View>
      <Text style={styles.title}>Pengenalan Alat Musik</Text>
      <Separator />
      <View
        style={{
          flexWrap: "wrap",
          marginHorizontal: 18,
          marginTop: 18,
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: "100%",
            marginBottom: 18,
          }}
        >
          <View>
            <View
              style={{
                width: 300,
                height: 300,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/gamelan-gede.png")} />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Gamelan
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "normal",
              textAlign: "center",
              marginTop: 6,
            }}
          >
            Gamelan Jawa merupakan seperangkat alat musik tradisional Jawa yang
            biasanya terdiri dari Gong, Kenong, Gambang, Celempung serta
            beberapa alat musik pendamping lainnya. Keistimewaan alunan musik
            gamelan Jawa adalah cenderung bersuara lembut, seperti sengaja
            menghadirkan suasana ketenangan jiwa dan selaras dengan prinsip
            hidup masyarakat Jawa pada umumnya.
          </Text>
          <View
            style={{
              marginHorizontal: 20,
              paddingTop: 20,
              paddingRight: 300,
              position: "relative",
              flexDirection: "row",
            }}
          >
            <Image source={require("../assets/suara.png")} />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              paddingRight: 160,
              paddingTop: 510,
              position: "absolute",
              marginLeft: 15,
            }}
          >
            <Text style={{ fontSize: 18 }}>Sound On</Text>
          </View>
        </View>
      </View>
    </View>
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
    fontFamily: "sans-serif",
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
});
