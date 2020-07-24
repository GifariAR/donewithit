import musicQuestions from "./suara";
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function Beranda({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginHorizontal: 17,
            paddingTop: 15,
            position: "relative",
            height: 54,
            flexDirection: "row",
            backgroundColor: "white",
          }}
        ></View>

        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Selamat Datang
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 16,
          }}
        >
          <Image
            style={{ height: 350, width: "100%" }}
            source={require("../assets/indonesia.jpg")}
          ></Image>
        </View>
        <View style={{ paddingHorizontal: 16, paddingTop: 5 }}>
          <Text>Indonesia</Text>
          <Text>Wonder Full Indonesia</Text>
        </View>
        <View
          style={{
            height: 17,
            backgroundColor: "#f2f2f4",
            marginTop: 30,
          }}
        ></View>
        <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
          <View>
            <Image
              source={require("../assets/ina.png")}
              style={{ height: 200, width: "100%", borderRadius: 7 }}
            />
          </View>
          <View>
            <Text>Indonesia</Text>
            <Text>Wonder Full Indonesia</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{ height: 54, flexDirection: "row", backgroundColor: "white" }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={{ width: 26, height: 26 }}
              source={require("../assets/home.png")}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 10,
              color: "#545454",
              marginTop: 4,
              color: "#43ab4a",
            }}
          >
            Home
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("TebakGambar")}>
            <Image
              style={{ width: 26, height: 26 }}
              source={require("../assets/gambar2.png")}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 10,
              color: "#545454",
              marginTop: 4,
              color: "#43ab4a",
            }}
          >
            Tebak Gambar
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TebakSuara", {
                questions: musicQuestions,
              })
            }
          >
            <Image
              style={{ width: 26, height: 26 }}
              source={require("../assets/suara.png")}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 10,
              color: "#545454",
              marginTop: 4,
              color: "#43ab4a",
            }}
          >
            Tebak Suara
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Pengenalan")}>
            <Image
              style={{ width: 26, height: 26 }}
              source={require("../assets/sumber.png")}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 10,
              color: "#545454",
              marginTop: 4,
              color: "#43ab4a",
            }}
          >
            Pengenalan
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("about2")}>
            <Image
              style={{ width: 26, height: 26 }}
              source={require("../assets/back.png")}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 10,
              color: "#545454",
              marginTop: 4,
              color: "#43ab4a",
            }}
          >
            Kembali
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Beranda;
