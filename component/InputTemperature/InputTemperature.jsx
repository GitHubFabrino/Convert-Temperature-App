import React from "react";
import { s } from "./InputTemperatureStyle";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export function InputTemperature({ defaultValue, onChangeText , unit }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.muInput}
        keyboardType="numeric"
        maxLength={4}
        placeholder="Tapper le  temperature "
        defaultValue={defaultValue} 
        onChangeText={onChangeText}
        
      />
      <Text style={s.unit}>{ unit}</Text>
    </View>
  );
}

