import React from "react";
import { Text,View } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const IconText=({iconName,iconSize,iconColor,textStyle,textContent})=>{
    return(
        <View style={{alignItems:'center'}}>
            <Feather name={iconName} size={iconSize} color={iconColor}/>
            <Text style={textStyle}>{textContent}</Text>
        </View>
    )
}

export default IconText