import React from 'react';

interface QuestionProps {
    question: string;
    answers: string[];
    onAnswer: (answer: string) => void;
    currentQuestionIndex: number; // Add currentQuestionIndex to QuestionProps
}

const Question: React.FC<QuestionProps> = ({ question, answers, onAnswer, currentQuestionIndex }) => {
    return (
        <div className="question">
            <h3>{currentQuestionIndex}: {question}</h3>
            <ol>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <button onClick={() => onAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Question;
