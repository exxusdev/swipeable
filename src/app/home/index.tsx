import { View, FlatList } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

import { stylesHome } from "./styles";
import { contacts } from "../../utils/contacts";

import { Card } from "../../components/card";
import { Option } from "../../components/option";

export function Home(){

    function OnSwipeableWillOpen(direction: "left" | "right") {
        (direction === "left") 
            ? console.warn("Deletar") 
            : console.warn("Arquivar")
    }

    return (
        <View style={stylesHome.container}>
            <FlatList 
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Swipeable
                        containerStyle={stylesHome.swipeableContainer}
                        overshootRight={false}
                        onSwipeableWillOpen={OnSwipeableWillOpen}                            
                        
                        renderRightActions={() => (
                            <View style={stylesHome.rightActions}>
                                <Option icon="archive" backgroundColor="#00B960"/>
                                <Option icon="open-in-new" backgroundColor="#3E68D7"/>
                            </View>
                        )}
                        
                        renderLeftActions={() => (
                            <View style={stylesHome.leftActions}>                              
                                <Option icon="delete" backgroundColor="#E83D55"/>
                            </View>
                        )}
                    >
                        <Card name={item.name} email={item.email} />
                    </Swipeable>
                )}
                contentContainerStyle={stylesHome.content}
                showsVerticalScrollIndicator={false}
            />               
            
        </View>
    )
}