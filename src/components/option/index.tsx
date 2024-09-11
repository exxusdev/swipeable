import { TouchableOpacity, TouchableOpacityProps, ColorValue } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { stylesOption } from "./styles"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    backgroundColor: ColorValue
}

export function Option({ icon, backgroundColor, ...rest }: Props){
    return (
        <TouchableOpacity style={[stylesOption.container, { backgroundColor }]} activeOpacity={0.7}>
            <MaterialIcons name={icon} size={24} color="white" />
        </TouchableOpacity>
    )    
}