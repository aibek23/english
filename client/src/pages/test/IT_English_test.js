import React, {      useContext,useState } from 'react';
import {useHttp} from '../../hooks/http.hook'
import {Context} from '../../context/Context'
const questions = [
    {
        questionText: " 1) What is the SI unit for measuring force?",
        answerOptions: [
            { answerText: " Joule ", isCorrect: false },
            { answerText: " Newton ", isCorrect: true },
            { answerText: " Watt ", isCorrect: false },
            { answerText: " Hertz ", isCorrect: false },
        ],
    },
    {
        questionText: " 2) What is the process of converting a solid directly into a gas called?",
        answerOptions: [
            { answerText: " Melting", isCorrect: false },
            { answerText: " Evaporation", isCorrect: false },
            { answerText: " Sublimation ", isCorrect: true },
            { answerText: " Condensation ", isCorrect: false },
        ],
    },
    {
        questionText: " 3) What is the name of the device used to measure the pressure of a gas or liquid?",
        answerOptions: [
            { answerText: " Barometer ", isCorrect: false },
            { answerText: " Thermometer ", isCorrect: false },
            { answerText: " Manometer ", isCorrect: true },
            { answerText: " Spectrometer ", isCorrect: false },
        ],
    },
    {
        questionText: " 4) Which of the following materials is the best conductor of electricity? ",
        answerOptions: [
            { answerText: " Rubber ", isCorrect: false },
            { answerText: " Glass ", isCorrect: false },
            { answerText: " Copper ", isCorrect: true },
            { answerText: " Wood ", isCorrect: false },
        ],
    },
    {
        questionText: " 5) What is the formula for calculating the area of a circle?",
        answerOptions: [
            { answerText: " A = lw", isCorrect: false },
            { answerText: " A = πr²", isCorrect: true },
            { answerText: " A = bh ", isCorrect: false },
            { answerText: " A = (b1 + b2)h/2", isCorrect: false },
        ],
    },
    {
        questionText: " 6) What type of energy is stored in a battery?",
        answerOptions: [
            { answerText: " Kinetic energy ", isCorrect: false },
            { answerText: " Thermal energy ", isCorrect: false },
            { answerText: " Potential energy ", isCorrect: false },
            { answerText: " Chemical energy ", isCorrect: true },
        ],
    },
    {
        questionText: " 7) What is the process of using a computer to simulate and analyze a physical or mathematical system called?",
        answerOptions: [
            { answerText: " Modelling ", isCorrect: true },
            { answerText: " Designing ", isCorrect: false },
            { answerText: " Programming ", isCorrect: false },
            { answerText: " Debugging ", isCorrect: false },
        ],
    },
    {
        questionText: " 8) Which of the following is not a type of renewable energy?",
        answerOptions: [
            { answerText: " Solar energy ", isCorrect: false },
            { answerText: " Wind energy ", isCorrect: false },
            { answerText: " Nuclear energy ", isCorrect: true },
            { answerText: " Hydroelectric energy", isCorrect: false },
        ],
    },
    {
        questionText: " 9) Which of the following is not a type of bridge?",
        answerOptions: [
            { answerText: " Arch bridge ", isCorrect: false },
            { answerText: " Suspension bridge ", isCorrect: false },
            { answerText: " Cantilever bridge ", isCorrect: false },
            { answerText: " Roundabout bridge ", isCorrect: true },
        ],
    },
    {
        questionText: "  10) What is the process of removing impurities from a liquid called?",
        answerOptions: [
            { answerText: " Distillation ", isCorrect: false },
            { answerText: " Filtration ", isCorrect: true },
            { answerText: " Condensation ", isCorrect: false },
            { answerText: " Sublimation ", isCorrect: false },
        ],
    },
    {
        questionText: " 11) What type of material is a thermistor made of?",
        answerOptions: [
            { answerText: " Glass ", isCorrect: false },
            { answerText: " Plastic ", isCorrect: false },
            { answerText: " Metal ", isCorrect: false },
            { answerText: " Ceramic ", isCorrect: true },
        ],
    },
    {
        questionText: "12) What is the process of combining two or more atoms to form a more complex atom called? ",
        answerOptions: [
            { answerText: " Fission", isCorrect: false },
            { answerText: " Fusion ", isCorrect: true },
            { answerText: " Electrification ", isCorrect: false },
            { answerText: " Ionization ", isCorrect: false },
        ],
    },
    {
        questionText: " 13) Which type of motor is used to power electric cars? ",
        answerOptions: [
            { answerText: " AC motor ", isCorrect: true },
            { answerText: " DC motor", isCorrect: false },
            { answerText: " Stepper motor ", isCorrect: false },
            { answerText: " Linear motor ", isCorrect: false },
        ],
    },
    {
        questionText: " 14) What is the process of converting mechanical energy into electrical energy called?",
        answerOptions: [
            { answerText: " Induction ", isCorrect: false },
            { answerText: " Conversion ", isCorrect: false },
            { answerText: " Transformation ", isCorrect: false },
            { answerText: " Generation ", isCorrect: true },
        ],
    },
    {
        questionText: " 15) Which of the following is a measure of the resistance of a material to the flow of electric current?",
        answerOptions: [
            { answerText: " Voltage ", isCorrect: false },
            { answerText: " Current ", isCorrect: false },
            { answerText: " Resistance ", isCorrect: true },
            { answerText: " Impedance ", isCorrect: false },
        ],
    },
    {
        questionText: "16) What is the SI unit for measuring frequency ? ",
        answerOptions: [
            { answerText: " Hertz ", isCorrect: false },
            { answerText: " Joule Joule ", isCorrect: false },
            { answerText: " Watt ", isCorrect: true },
            { answerText: " Newton ", isCorrect: false },
        ],
    },
    {
        questionText: " 17) What is the process of cutting a solid material using a high-pressure stream of water called?",
        answerOptions: [
            { answerText: " a) Watercutting", isCorrect: false },
            { answerText: " Waterjet cutting", isCorrect: true },
            { answerText: "  Water erosion ", isCorrect: false },
            { answerText: " Hydrocutting ", isCorrect: false },
        ],
    },
    {
        questionText: " 18) Which type of welding uses a gas flame to heat and melt the metal?",
        answerOptions: [
            { answerText: " MIG welding", isCorrect: false },
            { answerText: " TIG welding ", isCorrect: false },
            { answerText: " Stick welding ", isCorrect: false },
            { answerText: " Oxyfuel welding ", isCorrect: true },
        ],
    },
    {
        questionText: " 19) What is the process of creating a three-dimensional object from a digital model called?",
        answerOptions: [
            { answerText: " Printing ", isCorrect: false },
            { answerText: " Casting ", isCorrect: false },
            { answerText: " Molding ", isCorrect: false },
            { answerText: " Additive manufacturing ", isCorrect: true },
        ],
    },
    {
        questionText: " 20) What is the unit of measurement for power?",
        answerOptions: [
            { answerText: " Watt ", isCorrect: true },
            { answerText: " Joule ", isCorrect: false },
            { answerText: " Newton ", isCorrect: false },
            { answerText: " Ampere ", isCorrect: false },
        ],
    },
    {
        questionText: " 21) What is the process of transforming a liquid into a solid called?",
        answerOptions: [
            { answerText: " Solidification ", isCorrect: true },
            { answerText: " Condensation ", isCorrect: false },
            { answerText: " Sublimation ", isCorrect: false },
            { answerText: " Melting ", isCorrect: false },
        ],
    },
    {
        questionText: " 22) Which type of lens causes parallel rays of light to converge at a focal point?",
        answerOptions: [
            { answerText: " Convex lens ", isCorrect: true },
            { answerText: " ) Concave lens ", isCorrect: false },
            { answerText: " Prism ", isCorrect: false },
            { answerText: " Mirror ", isCorrect: false },
        ],
    },
    {
        questionText: "23) Which of the following is not a type of bearing?",
        answerOptions: [
            { answerText: " Roller bearing ", isCorrect: false },
            { answerText: " Ball bearing ", isCorrect: false },
            { answerText: " Fluid bearing ", isCorrect: false },
            { answerText: " Gear bearing ", isCorrect: true },
        ],
    },
    {
        questionText: "24) What is the process of using a computer to control the operations of a machine or system called?",
        answerOptions: [
            { answerText: " Automation ", isCorrect: true },
            { answerText: " Robotics ", isCorrect: false },
            { answerText: " Mechanization ", isCorrect: false },
            { answerText: " Cybernetics ", isCorrect: false },
        ],
    },
    {
        questionText: " 25) Which of the following is the branch of physics that deals with the behavior of light?",
        answerOptions: [
            { answerText: " Thermodynamics ", isCorrect: false },
            { answerText: " Electromagnetism ", isCorrect: false },
            { answerText: " Optics ", isCorrect: true },
            { answerText: " Quantum mechanics ", isCorrect: false },
        ],
    }
];
function ITEnglishtest() {
    const auth = useContext(Context)
    const {request} = useHttp()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [level, setLevel] = useState("");

    const pressHandler = async event => {
        try {
            const data = await request('/api/test/save', 'POST',{     testName: "IT_English_test",
            size: `${questions.length}`,
            mistakes: `${event}`}, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(data);
        } catch (e) { console.log(e);}
    }

    const handleClick = (question, index, isCorrect) => {



        // Действия, которые должны выполниться только один раз
        const existingAnswerIndex = userAnswers.findIndex(answer => answer.question === currentQuestion);
        if (existingAnswerIndex !== -1) {
            // обновление существующего ответа
            const updatedAnswer = {
                question: currentQuestion,
                index,
                isCorrect
            };
            setUserAnswers([
                ...userAnswers.slice(0, existingAnswerIndex),
                updatedAnswer,
                ...userAnswers.slice(existingAnswerIndex + 1)
            ]);
        } else {
            // добавление нового ответа
            userAnswers.push({ question: currentQuestion, index, isCorrect });
            const updatedAnswers = [...userAnswers];
            setUserAnswers(updatedAnswers);
            userAnswers.forEach((e)=>{
                if (e.isCorrect) {
                    setScore(score + 1);
                }
            })
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setTimeout(() => {
                setCurrentQuestion(nextQuestion);
            }, 700);
        } else {
            
       
        setTimeout(() => {
            var answer = 0
            userAnswers.forEach((e)=>{
                if (e.isCorrect) {
                    answer=answer+1
                }
            })
            pressHandler(answer);
            if (score >= 21) {
                setLevel("5+ Satisfactorily")
            } else if (score >= 13 && score <= 20) {
                setLevel("5 Excellent")
            } else if (score >= 8 && score <= 12) {
                setLevel("4 good")
            } else if (score >= 1 && score <= 7) {
                setLevel("2 bad")
            } else if (score >= 0 && score <= 3) {
                setLevel("2 bad")
            }
            setShowScore(true);
        }, 1000);
    }

}
return (
    <div className="skyscraperTest">
        <div className='skyscraperTestW'>
            <div className="container d-flex justify-content-center">
                <div className='col-lg-8'>
                    {showScore ? (
                        <div className="showScore-div">
                            <h3>Список ваших ответов:</h3>
                            <h4>Your score  {level}</h4>
                            <p>Правильных ответов {questions.length-score} из {questions.length}</p>

                            {userAnswers.map((answer, index) => (
                                <div key={index * 15} className="shadow p-4 m-5 rounded-4 bg-white">
                                    <h3 key={index * 26} className="shadow-none">{questions[index].questionText}</h3>
                                    <div key={index++}>
                                        {questions[index].answerOptions.map((option, i) => (
                                            <div key={i + index + 2} className="answerOption m-3">
                                                <input
                                                    key={i * index + 7}
                                                    type="radio"
                                                    className={`radioCustomButton ${i === answer.index && !option.isCorrect ? "userFalse" : option.isCorrect ? "userTrue" : ""}`}
                                                    name={`question-${index}`}
                                                    value={option.answerText}
                                                    checked={option.isCorrect}
                                                    disabled
                                                />
                                                <label key={i ** index++} className={`rounded-4 radioCustomLabel ${i === answer.index && !option.isCorrect ? "userFalse" : option.isCorrect ? "userTrue" : ""}`}>{option.answerText}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="question-div shadow-sm p-4 m-5 rounded-4 bg-white">
                                <h1>{questions[currentQuestion].questionText}</h1>
                                <p>Question {currentQuestion + 1}/{questions.length}</p>
                            </div>
                            <div className="answer-div shadow p-4 m-5 rounded-4 bg-white">
                                {questions[currentQuestion].answerOptions.map((option, index) => (
                                    <div key={index} className="answerOption " onClick={() => {
                                        handleClick(currentQuestion, index, option.isCorrect)
                                        // console.log(index, userAnswers[currentQuestion].index)
                                    }}>
                                        <input
                                            type="radio"
                                            className={`radioCustomButton  ${userAnswers[currentQuestion]?.index ? "" : ""}`}
                                            name={`question-`}
                                            value={option.answerText}
                                            checked={index === userAnswers[currentQuestion]?.index}
                                            onChange={() => { }}
                                        />
                                        <label className="radioCustomLabel ">{option.answerText}</label>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
);
}
export default ITEnglishtest;