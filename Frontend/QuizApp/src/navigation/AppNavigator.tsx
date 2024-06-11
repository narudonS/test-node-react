import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

type RootStackParamList = {
  Quiz: undefined;
  Leaderboard: { score: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Quiz">
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
