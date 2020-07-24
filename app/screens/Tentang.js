import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "./Latihan1";

const Separator = () => <View style={styles.separator} />;

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Beranda");
  };
  return (
    <View>
      <Text style={styles.title}>Informasi Saya</Text>
      <Separator />
      <Text style={styles.title}>
        Saya adalah seorang yang senang berkutik dengan dunia komputer. dari
        dahulu saya sangat menggemari dunia seputar komputer, hingga saat ini
        saya senang mengutakatik komputer
      </Text>
      <Button title="Kembali" onPress={pressHandler} />
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
