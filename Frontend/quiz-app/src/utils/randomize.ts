import { questions } from '../data/questions';

export const getRandomQuestions = () => {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 20);
    return shuffledQuestions.map(q => ({
        ...q,
        answers: q.answers.sort(() => 0.5 - Math.random())
    }));
};
