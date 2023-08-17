import React from "react";
import { Text,View,StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { weatherType } from "../utilities/weatherType";
import moment from "moment/moment";

iconType={
    "Rain":"cloud-rain",
    "Snow":"snowflake",
    "Clear sky":'sun',
    "Clouds":'cloud',
}

const ListItem=({dt_txt,min,max,condition})=>{
    const {item,itemText}=styles;
    date=moment(dt_txt).format('dddd')
    time=moment(dt_txt).format('h:mm:ss a')
    return (
        <View style={item}>
            <FontAwesome5 name={weatherType[condition].icon} size={50} color={'#c4f3f3'} />
            <Text style={itemText}>Date : {date}</Text>
            <Text style={itemText}>Time : {time}</Text> 
            <Text style={itemText}>Minimum Temperature : {min} °C</Text>
            <Text style={itemText}>Maximum Temperature : {max} °C</Text>
            <Text style={itemText}>Condition : {condition}</Text>
        </View>        
    )
}

const styles=StyleSheet.create({
    item:{
        flex:1,
        backgroundColor:'#70e1e1',
        borderRadius:10,
        margin:5,
        padding :10,
        justifyContent:'space-around',
        borderWidth:5
    },
    itemText:{
        margin:2,
        fontSize:16
    }
})


export default ListItem