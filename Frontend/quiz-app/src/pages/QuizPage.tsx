import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { getRandomQuestions } from '../utils/randomize';
import './styles.css';

const QuizPage: React.FC = () => {
    const [questions, setQuestions] = useState(getRandomQuestions());
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions(getRandomQuestions());
    }, []);

    const handleAnswer = (answer: string) => {
        if (answer === questions[currentQuestionIndex].correct) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Save the score to localStorage or state management library before navigating
            localStorage.setItem('score', score.toString());
            navigate('/leaderboard');
        }
    };

    return (
        <div className="centered-container">
            <p>Question {currentQuestionIndex + 1} / {questions.length}</p> {/* Display current question number */}
            {questions.length > 0 && (
                <Question
                    currentQuestionIndex={currentQuestionIndex + 1}
                    question={questions[currentQuestionIndex].question}
                    answers={questions[currentQuestionIndex].answers}
                    onAnswer={handleAnswer}
                />
            )}
        </div>
    );
};

export default QuizPage;
