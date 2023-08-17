import React from "react";
import { SafeAreaView,Text,StyleSheet,StatusBar, ImageBackground, View } from "react-native";
import { FontAwesome5,Feather } from '@expo/vector-icons'; 
import IconText from "../components/IconText";
import moment from "moment";

const City=({population,place,country,riseTime,setTime})=>{
    const {container,image,cityName,countryName,cityCountryText,populationWrapper,populationText,riseSetWrapper,riseSetText}=styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/cityBackground.jpg')} style={image}>
                <Text style={[cityName,cityCountryText]}>{place}</Text>
                <Text style={[countryName,cityCountryText]}>{country}</Text>
                <View style={populationWrapper}>
                    <IconText iconName={"user"} 
                    iconSize={50} 
                    iconColor={'red'} 
                    textStyle={populationText} 
                    textContent={`${population}`}/>
                </View>
                <View style={[riseSetWrapper]}>
                    <IconText iconName={"sunrise"}
                     iconSize={50} iconColor={'white'}
                     textStyle={riseSetText} 
                     textContent={`${moment(riseTime).format('h:mm:ss a')}`}/>

                    <IconText iconName={"sunset"} 
                     iconSize={50} 
                     iconColor={'white'} 
                     textStyle={riseSetText} 
                     textContent={`${moment(setTime).format('h:mm:ss a')}`}/>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:StatusBar.currentHeight||0
    },
    image:{
        flex:1
    },
    cityName:{
        fontSize:40
    },
    countryName:{
        fontSize:30
    },
    cityCountryText:{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        color:'white'
    },
    populationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color:'red',
        fontWeight:'bold'
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:30
    },
    riseSetText:{
        fontSize:30,
        color:'white',
        fontWeight:"bold"
    }
})

export default City