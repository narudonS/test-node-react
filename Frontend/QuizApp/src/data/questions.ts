export type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    question: "เมืองหลวงของฝรั่งเศสคือเมืองอะไร?",
    answers: ["เบอร์ลิน", "มาดริด", "ปารีส", "ลิสบอน"],
    correctAnswer: "ปารีส",
  },
  {
    question: "2 + 2 เท่ากับเท่าไหร่?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  // เพิ่มคำถามเพิ่มเติมที่นี่
];

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((q) => ({
    ...q,
    answers: q.answers.sort(() => 0.5 - Math.random()),
  }));
};
