import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { globalStyles } from "./Latihan1";
import { TextInput1 } from "react-native-gesture-handler";

const Separator = () => <View style={styles.separator} />;

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Beranda");
  };
  return (
    <View>
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/gamelan-gede.png")} />
            </View>
            <View
              style={{
                padding: 1,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  marginTop: 19,
                  paddingTop: 8,
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 6,
                }}
              >
                Tebak Alat Musik Apakah ini ?
              </Text>
            </View>
          </View>
          <View style={{ padding: 10, borderRadius: 8 }}>
            <Text
              style={{
                marginTop: 16,
                paddingVertical: 8,
                fontSize: 15,
                fontWeight: "normal",
                textAlign: "center",
                marginTop: 10,
                backgroundColor: "#222831",
                color: "#eeeeee",
                borderRadius: 10,
              }}
            >
              Dimainkan dengan cara digoyangkan
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              textAlign: "center",
              marginTop: 6,
            }}
          >
            Kata kunci :
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              textAlign: "center",
              marginTop: 6,
            }}
          >
            _n _ _ l _ _ _
          </Text>
          <TextInput
            value="_ _ _ _ _ _"
            style={{ fontSize: 20, borderWidth: 1, marginTop: 6 }}
          ></TextInput>
          <View
            style={{
              width: 300,
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/video.png")}
            />
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
