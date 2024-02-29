import React from "react";
import { style } from "./TemperatureDispaly.style";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export function TemperatureDispaly({ value , unit }) {
  return (
      <Text style = { s.text }>{value} { unit}</Text>
      
  );
}


const s = StyleSheet.create({
    text: {
        fontSize: 80, 
        color : "white"
    }
})