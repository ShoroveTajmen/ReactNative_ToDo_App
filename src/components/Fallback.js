import React from "react";
import { Image, Text, View } from "react-native";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/to-do.jpg")}
        style={{ height: 300, width: 300 }}
      ></Image>
      <Text style={{ marginTop: 10 }}>Start Adding Your Test</Text>
    </View>
  );
};

export default Fallback;
