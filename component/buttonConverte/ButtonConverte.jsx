import { s } from "./ButtonConverte.style"
import { Text , TouchableOpacity} from "react-native";

export function ButtonConvert({onPress, unit}) {

    return (
      <TouchableOpacity onPress={ onPress} style = {s.button}>
            <Text style = { s.text}>Convertir en { unit}</Text>
      </TouchableOpacity>
    );
}