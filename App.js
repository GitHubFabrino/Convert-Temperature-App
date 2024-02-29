import { useEffect  } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import hotbackgroud from "./assets/2.3 hot.png";
import coldBackgroud  from "./assets/cold.png";
import { InputTemperature } from "./component/InputTemperature/InputTemperature";
import { TemperatureDispaly } from "./component/temperatureDisplay/TemperatureDispaly";
import { useState } from "react";
import { DEFAULT_TEMPERATURE, UNIT } from "./constant";

import { getOppositeUnit , convertTemperatureTo , isIceTemperzture} from "./services/temperature-service";
import { ButtonConvert } from "./component/buttonConverte/ButtonConverte";
export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(UNIT.celcius);
  const oppositeUnit = getOppositeUnit(currentUnit);
  const converteValue = convertTemperatureTo(oppositeUnit, inputValue);


  const [ currentBg , setCurrentBg ] = useState()

  function getConvertdTemperature() {

    const valueAsFloat = Number.parseFloat(inputValue)
    return isNaN(valueAsFloat )? "" : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1)
    
  }

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue)
    if (!isNaN(temperatureAsFloat)) {
      console.log("oui");
      const isColdBg = isIceTemperzture(inputValue, currentUnit)
      console.log(isColdBg);
      setCurrentBg(isColdBg ? coldBackgroud : hotbackgroud)
      
    }
    
  }, [inputValue]);


  return (
    <ImageBackground source={currentBg} style={styles.container}>
      <View style={styles.work}>
        <TemperatureDispaly
          value={getConvertdTemperature()}
          unit={oppositeUnit}
        />
        <View>
          <InputTemperature
            defaultValue={DEFAULT_TEMPERATURE}
            onChangeText={setInputValue}
            unit={currentUnit}
          />
        </View>

        <View>
          <ButtonConvert
            unit={currentUnit}
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },

  work: {
    // backgroundColor: 'red',

    height: 450,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
