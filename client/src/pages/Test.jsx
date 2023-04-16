import React, { useState } from 'react';
// import Quiz from 'react-quiz-component';
//  const quiz =  {
//     "quizTitle": "English Test A1",
//     "quizSynopsis": "Test of Basic English Knowledge",
//     "questions": [
//       {
//         "question": "Which of the following is a color?",
//         "questionType": "text",
//         "answers": [
//           "green",
//           "book",
//           "table",
//           "car"
//         ],
//         "correctAnswer": "1",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },
//       {
//         "question": "What is the opposite of 'big'?",
//         "questionType": "text",
//         "answers": [
//           "small",
//           "tall",
//           "short",
//           "thin"
//         ],
//         "correctAnswer": "1",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },
//             {
//         "question": "What is the opposite of 'happy'?",
//         "questionType": "text",
//         "answers": [
//           "sad",
//           "angry",
//           "excited",
//           "tired"
//         ],
//         "correctAnswer": "1",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       }
//     ]
//   }

//   ,
//       {
//         "question": "What is the plural of 'dog'?",
//         "questionType": "text",
//         "answers": [
//           "dogs",
//           "doges",
//           "dogos",
//           "doggies"
//         ],
//         "correctAnswer": "1",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },
//       {
//         "question": "What is the correct form of the verb 'to be' in the present tense for 'he'?",
//         "questionType": "text",
//         "answers": [
//           "am",
//           "is",
//           "are",
//           "be"
//         ],
//         "correctAnswer": "2",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },
//       {
//         "question": "What is the opposite of 'happy'?",
//         "questionType": "text",
//         "answers": [
//           "sad",
//           "angry",
//           "excited",
//           "tired"
//         ],
//         "correctAnswer": "1",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },
//       {
//         "question": "What is the plural of 'cat'?",
//         "questionType": "text",
//         "answers": [
//           "cats",
//           "cates",
//           "catos",
//           "kitties"
//         ],
//         "correctAnswer": "1",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },
//       {
//         "question": "What is the correct form of the verb 'to be' in the present tense for 'they'?",
//         "questionType": "text",
//         "answers": [
//           "am",
//           "is",
//           "are",
//           "be"
//         ],
//         "correctAnswer": "3",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },
//       {
//         "question": "Which of the following is not a fruit?",
//         "questionType": "text",
//         "answers": [
//           "apple",
//           "banana",
//           "carrot",
//           "orange"
//         ],
//         "correctAnswer": "3",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },{
//         "question": "What is the correct form of the verb 'to be' in the present tense for 'I'?",
//         "questionType": "text",
//         "answers": [
//           "am",
//           "is",
//           "are",
//           "be"
//         ],
//         "correctAnswer": "1",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       },
//       {
//         "question": "What is the plural of 'child'?",
//         "questionType": "text",
//         "answers": [
//           "childs",
//           "childrens",
//           "childes",
//           "children"
//         ],
//         "correctAnswer": "4",
//         "messageForCorrectAnswer": "Correct!",
//         "messageForIncorrectAnswer": "Incorrect!"
//       }

const questions = [
    {
        questionText: "What is the capital of France?",
        answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
        ],
    },
    {
        questionText: "Who is CEO of Tesla?",
        answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
        ],
    },
    {
        questionText: "The iPhone was created by which company?",
        answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
        ],
    },
    {
        questionText: "How many Harry Potter books are there?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
        ],
    },
];


export default function Test() {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);

    const handleClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="container">
            {showScore ? (
                <section className="showScore-section">
                    правильных ответов {score} из {questions.length}
                </section>
            ) : (
                <>
                    <section className="question-section">
                        <h1>
                            Question {currentQuestion + 1}/{questions.length}
                        </h1>
                        <p>{questions[currentQuestion].questionText}</p>
                    </section>

                    <section className="answer-section">
                        {questions[currentQuestion].answerOptions.map((item, index) => (
        
                             <li className="answerOption">
                             <input
                             key={index}
                               type="radio"
                               className="radioCustomButton"
                               name="radioGroup"
                               value={true}
                               onClick={() => handleClick(item.isCorrect)}
                             />
                             <label className="radioCustomLabel" >
                             {item.answerText}
                             </label>
                            </li>
                        ))}
                    </section>
                </>
            )}
        </div>
    );
}