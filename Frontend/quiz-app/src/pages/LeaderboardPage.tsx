import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeaderboardPage: React.FC = () => {
    const score = localStorage.getItem('score');
    const navigate = useNavigate();

    return (
        <div>
            <h2>Leaderboard</h2>
            <p>Your score: {score}</p>
            <button onClick={() => navigate('/')}>Back to Main</button>
        </div>
    );
};

export default LeaderboardPage;
