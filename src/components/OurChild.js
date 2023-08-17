import React from "react";
import { View,Text } from "react-native";

const OurChild=({message})=>{
    return(
        <View style={{height:200,width:200,backgroundColor:'red'}}>
            <Text>{message}</Text>
        </View>
    )
}

export default OurChild;