import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {weatherType} from '../utilities/weatherType.js'

export const convert=(temp)=>{
  return Math.round((temp-273.15)*100)/100;
}

const CurrentWeather=({weatherData})=>{
  const {wrapper,container,temperature,feels,highLowWrapper,highLow,bodyWrapper,description,message}=styles
  const weather={
    type:weatherData.weather[0].main,
    temp_min:convert(weatherData.main.temp_min),
    temp_max:convert(weatherData.main.temp_max),
    feels_like:convert(weatherData.main.feels_like),
    temp:convert(weatherData.main.temp)
  }
  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weather.type].backgroundColor}]}>
    <View style={container}>
    <Feather name={weatherType[weather.type].icon} size={90} color="black" />
      <Text>Current Weather</Text>
      <Text style={temperature}>{weather.temp}°C</Text>
      <Text style={feels}>Feels like {weather.feels_like}°C</Text>
      <View style={highLowWrapper}>
        <Text style={highLow}>High: {weather.temp_max}°C </Text>
        <Text style={highLow}>Low: {weather.temp_min}°C</Text>
      </View>
    </View>
      <View style={bodyWrapper}>
        <Text style={description}>{weatherData.weather.description}</Text>
        <Text style={message}>{weatherType[weather.type].message}</Text>
      </View>
    </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  highLowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  temperature:{
    color:'black',
    fontSize:48
  },
  feels:{
    color:'black',
    fontSize:30
  },
  highLow:{
    color:'black',
    fontSize:20
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
});

export default CurrentWeather;
