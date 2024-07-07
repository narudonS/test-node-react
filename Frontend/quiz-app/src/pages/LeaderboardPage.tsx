import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const LeaderboardPage: React.FC = () => {
    const score = localStorage.getItem('score');
    const navigate = useNavigate();

    return (
        <div className="centered-container">
            <h2>Leaderboard</h2>
            <p>Your score: {score}</p>
            <button onClick={() => navigate('/')}>Back to Main</button>
        </div>
    );
};

export default LeaderboardPage;
