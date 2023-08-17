import React from "react"
import { FlatList, SafeAreaView,StyleSheet,Text,View,StatusBar,Image, ImageBackground, Dimensions } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import ListItem from "../components/ListItem";
import { convert } from "./CurrentWeather";

const UpcomingWeather =({weatherData})=>{
    const renderItem=({item})=>(
        <ListItem 
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={convert(item.main.temp_min)}
        max={convert(item.main.temp_max)}
        />
    )
    const {container,heading}=styles
    return(
        <SafeAreaView style={container}>
            <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item)=>(item.dt_txt)}/>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#afeeee'
    },
    heading:{
        color:'white',
        fontSize:40,
        textAlign:"center",
        fontWeight:'bold'
    },
    image:{
        width:Dimensions.get('screen').width
    }
})

export default UpcomingWeather