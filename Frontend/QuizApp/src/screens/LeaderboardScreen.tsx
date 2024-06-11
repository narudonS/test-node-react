import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Quiz: undefined;
  Leaderboard: { score: number };
};

type LeaderboardScreenRouteProp = RouteProp<RootStackParamList, 'Leaderboard'>;
type LeaderboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Leaderboard'>;

type Props = {
  route: LeaderboardScreenRouteProp;
  navigation: LeaderboardScreenNavigationProp;
};

const LeaderboardScreen: React.FC<Props> = ({ route }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.score}>Your Score: {score}</Text>
      {/* แสดงคะแนนอื่น ๆ ที่นี่ */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
  },
});

export default LeaderboardScreen;
