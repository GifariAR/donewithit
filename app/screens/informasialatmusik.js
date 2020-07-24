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
          flexDirection: "row",
          flexWrap: "wrap",
          marginHorizontal: 18,
          marginTop: 18,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "99%",
            marginBottom: 18,
          }}
        >
          <View>
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Bonang")}>
                <Image source={require("../assets/Bonang-Panembung.png")} />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Bonang
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Gamelan")}>
                <Image source={require("../assets/gamelan-png.png")} />
              </TouchableOpacity>
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
          <View>
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Angklung")}>
                <Image source={require("../assets/angklung1.jpg")} />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Angklung
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Garantung")}
              >
                <Image source={require("../assets/garantung.jpg")} />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Garantung
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            marginBottom: 18,
          }}
        >
          <View>
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/angklung1.jpg")} />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Bangka
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/angklung1.jpg")} />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Bangka
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/angklung1.jpg")} />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Bangka
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                bordercolor: "#efefef",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/angklung1.jpg")} />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Bangka
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 6,
        }}
      >
        Bangka
      </Text>
      <Separator />
      <View>
        <View
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            bordercolor: "#efefef",
            borderRadius: 18,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Bonang")}>
            <Image
              source={require("../assets/Bonang-Panembung.png")}
              style={{ marginHorizontal: 16 }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 6,
          }}
        >
          Suling
        </Text>
      </View>
      <Text style={styles.title}></Text>
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
