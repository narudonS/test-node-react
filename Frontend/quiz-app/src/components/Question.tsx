import React from 'react';

interface QuestionProps {
    question: string;
    answers: string[];
    onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, answers, onAnswer }) => {
    return (
        <div>
            <h2>{question}</h2>
            {answers.map((answer, index) => (
                <button key={index} onClick={() => onAnswer(answer)}>
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default Question;
