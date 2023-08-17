import React,{useEffect, useState} from 'react';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env'
import { useGetWeather } from './src/hooks/useGetWeather';
//

const App=()=>{
  console.log(`App Started!`)
  const [loading,error,weather]=useGetWeather()
  if(loading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'red'}/>
      </View>
    )
  }
  console.log(`Won't load`)
  if(weather && weather.list){
    console.log(`Got Data bruh!`)
    return (   
        <NavigationContainer>
          <Tabs weatherType={weather}/>
        </NavigationContainer>
      )
  }

}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
})
export default App
