import { StyleSheet } from "react-native";

const s = StyleSheet.create({

    container: {
        alignSelf: "stretch",
        justifyContent: "center"
    },
  muInput: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    width: 200,
   
    padding: 10,
    },
    
    unit: {
        position: "absolute",
        fontSize: 35,
        alignSelf: "flex-end",
        paddingRight: 20
    }
});

export { s };
