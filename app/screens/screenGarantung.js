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
              <Image source={require("../assets/garantung-gede.jpg")} />
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
          <Text
            style={{
              fontSize: 15,
              fontWeight: "normal",
              textAlign: "center",
              marginTop: 6,
            }}
          >
            Garantung adalah salah satu alat musik Batak Toba, yang merupakan
            pembawa melodi. Alat musik ini terbuat dari kayu ingol dan dosi
            serta memiliki lima bilah nada. Ada hal yang unik mengenai nama alat
            musik ini, karena ternyata di Kalimantan Tengah, Garantung juga
            merupakan nama alat musik tradisional. Namun bedanya, di Toba
            Garantung adalah alat musik pukul yang terbuat dari kayu, sementara
            di Kalimantan Tengah Garantung merupakan alat musik tradisional
            sejenis gong. (brilio)
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
              paddingTop: 560,
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
