import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the chemical symbol for water?", answer: "H2O" },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
  { question: "What year did the Titanic sink?", answer: "1912" },
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex === questions.length - 1) {
        return 0; // Start over if we've reached the last question.
      }
      return prevIndex + 1;
    });
  };

  const toggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>
          {questions[currentQuestionIndex].question}
        </Text>
        {showAnswer && (
          <Text style={styles.answer}>
            {questions[currentQuestionIndex].answer}
          </Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleAnswer} style={styles.button}>
            <Text style={styles.buttonText}>
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextQuestion} style={styles.button}>
            <Text style={styles.buttonText}>Next Question</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#121212", // Dark background
  },
  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#1E1E1E", // Slightly lighter than the container for contrast
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E0E0E0", // Light grey for high contrast text
    marginBottom: 20,
  },
  answer: {
    fontSize: 18,
    color: "#BDBDBD", // Slightly dimmer grey for the answer text
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#6200EE", // Vibrant color for buttons to stand out
    padding: 12,
    borderRadius: 5,
    elevation: 2, // Add elevation for depth
  },
  buttonText: {
    color: "#FFFFFF", // White text for readability
    fontWeight: "500",
    fontSize: 16,
  },
});

export default App;
