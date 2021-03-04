import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../screen/Main'
import Bluetooth from '../screen/Bluetooth'

const Stack = createStackNavigator()

export default class Stacks extends React.Component {
  render () {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
                    <Stack.Screen name='Main' component={Main}/>
                    <Stack.Screen name='Bluetooth' component={Bluetooth}/>
                </Stack.Navigator> 
            </NavigationContainer>
        ) 
    }
}
