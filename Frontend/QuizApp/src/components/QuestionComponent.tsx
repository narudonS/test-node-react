import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Props {
  question: string;
  answers: string[];
  onAnswer: (answer: string) => void;
}

const QuestionComponent: React.FC<Props> = ({ question, answers, onAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {answers.map((answer, index) => (
        <Button key={index} title={answer} onPress={() => onAnswer(answer)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  question: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default QuestionComponent;
