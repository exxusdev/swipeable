import { View, Text } from "react-native";

import { stylesCard } from "./styles";

type Props = {
    name: string;
    email: string;
}

export function Card({ name, email }: Props){
    return(
        <View style={stylesCard.container}>
            <Text style={stylesCard.name}>{name}</Text>
            <Text style={stylesCard.email}>{email}</Text>
        </View>
    )
} 