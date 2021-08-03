import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultScreen from "./screens/ResultScreen";

const Stack = createStackNavigator();

export default function main() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen
        options={{
          title: "Score"
        }}
        name="ResultScreen" component={ResultScreen} />       

      </Stack.Navigator>
    </NavigationContainer>
  );

}