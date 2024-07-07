import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuizPage from './pages/QuizPage';
import LeaderboardPage from './pages/LeaderboardPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
            </Routes>
        </Router>
    );
};

export default App;
