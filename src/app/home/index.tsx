import { useRef } from "react";
import { View, FlatList } from "react-native";
import Swipeable, { SwipeableMethods } from "react-native-gesture-handler/ReanimatedSwipeable";

import { stylesHome } from "./styles";
import { contacts } from "../../utils/contacts";

import { Card } from "../../components/card";
import { Option } from "../../components/option";

export function Home(){
    const openSwipeableRef = useRef<SwipeableMethods | null>(null);

    function onSwipeableWillOpen(
        direction: "left" | "right", 
        currentItem: SwipeableMethods | null
    ) {
        if (direction === "left") {
            console.warn("DELETAR!") 
        }            

        if (openSwipeableRef.current) {
            !(openSwipeableRef.current === currentItem) 
                ? openSwipeableRef.current.close()            
                : undefined
        }

        openSwipeableRef.current = currentItem
    }

    return (
        <View style={stylesHome.container}>
            <FlatList 
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    let currentItem: SwipeableMethods | null = null

                    return (
                        <Swipeable
                            ref={(swipeable) => (currentItem = swipeable)}
                            containerStyle={stylesHome.swipeableContainer}
                            overshootRight={false}
                            onSwipeableWillOpen={(direction) => onSwipeableWillOpen(direction, currentItem)}
                            
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
                        </Swipeable>)
                    }}
                contentContainerStyle={stylesHome.content}
                showsVerticalScrollIndicator={false}
            />               
            
        </View>
    )
}