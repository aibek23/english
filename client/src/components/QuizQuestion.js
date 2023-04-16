import React, { useState } from "react";

const QuizQuestion = ({
  question,
  onAnswerSelected,
  isCorrect,
  showCorrectAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelected = (index) => {
    setSelectedAnswer(index);
    onAnswerSelected(index);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerSelected(index)}
            style={{
              color:
                showCorrectAnswer && index === question.correctAnswer
                  ? "green"
                  : isCorrect && index !== question.correctAnswer
                  ? "red"
                  : "inherit",
            }}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;