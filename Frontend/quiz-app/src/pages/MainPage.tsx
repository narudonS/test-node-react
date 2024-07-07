import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const MainPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="centered-container">
            <h1>Welcome to the Quiz App</h1>
            <button onClick={() => navigate('/quiz')}>Start Quiz</button>
            <button onClick={() => navigate('/leaderboard')}>View Leaderboard</button>
        </div>
    );
};

export default MainPage;
