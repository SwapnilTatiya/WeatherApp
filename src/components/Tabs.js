import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';


const Tab=createBottomTabNavigator()

const Tabs=({weatherType})=>{
    return(
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'grey',
      tabBarStyle:{
        backgroundColor:'white'
      },
      headerStyle:{
        backgroundColor:'white'
      },
      headerTitleStyle:{
        fontWeight:'bold',
        fontSize:25,
        color:'black'
      }
    }}>
      <Tab.Screen name={'Current Weather'} options={{
        tabBarIcon: ({focused})=>(<Feather name='droplet' size={25} color={focused?'tomato':'black'}/>)
      }}>
        {()=><CurrentWeather weatherData={weatherType.list[0]}/>}
      </Tab.Screen>
      <Tab.Screen name={'Upcoming Weather'} options={{
        tabBarIcon: ({focused})=>(<Feather name='clock' size={25} color={focused?'tomato':'black'}/>)
      }}>
        {()=><UpcomingWeather weatherData={weatherType.list}/>}
      </Tab.Screen>
      <Tab.Screen name={'Location'} options={{
        tabBarIcon: ({focused})=>(<Feather name='home' size={25} color={focused?'tomato':'black'}/>)
      }}>
        {()=><City population={weatherType.city.population} place={weatherType.city.name} country={weatherType.city.country} riseTime={weatherType.city.sunrise} setTime={weatherType.city.sunset}/>}
      </Tab.Screen>
    </Tab.Navigator>
    )
}
export default Tabs