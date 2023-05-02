import React, { useCallback, useContext,useEffect,useState } from 'react';
import {useHttp} from '../../hooks/http.hook'
import {Context} from '../../context/Context'
import { Link } from 'react-router-dom';
const questions = [
    {
        questionText: ` 1) The Weeknd's "Save Your Tears" <…> the most popular 2021 music video on Vevo`,
        answerOptions: [
            { answerText: "are", isCorrect: false },
            { answerText: "is", isCorrect: true },
            { answerText: "have", isCorrect: false },
            { answerText: "does", isCorrect: false },
        ],
    },
    {
        questionText: " 2) Many singers streamed <…> online concerts for people all around the world ",
        answerOptions: [
            { answerText: "his", isCorrect: false },
            { answerText: "its", isCorrect: false },
            { answerText: "your", isCorrect: false },
            { answerText: "their", isCorrect: true },
        ],
    },
    {
        questionText: " 3) I love Taylor Swift’s new album, at the moment I <…> to it on repeat ",
        answerOptions: [
            { answerText: "Ate", isCorrect: true },
            { answerText: "Eaten", isCorrect: false },
            { answerText: "Eating", isCorrect: false },
            { answerText: "Eats", isCorrect: false },
        ],
    },
    {
        questionText: ' 4) I don’t <…> watch drama movies, but "King Richard" is pretty good ',
        answerOptions: [
            { answerText: "sometimes", isCorrect: false },
            { answerText: "never", isCorrect: false },
            { answerText: "usually", isCorrect: true },
            { answerText: "always", isCorrect: false },
        ],
    },
    {
        questionText: " 5) <…> meme do you prefer: Doge or Cheems? ",
        answerOptions: [
            { answerText: "when", isCorrect: false },
            { answerText: "which", isCorrect: true },
            { answerText: "what", isCorrect: false },
            { answerText: "why", isCorrect: false },
        ],
    },
    {
        questionText: " 6) If you are bored, you <…> try online test",
        answerOptions: [
            { answerText: "will", isCorrect: false },
            { answerText: "need", isCorrect: false },
            { answerText: "should", isCorrect: true },
            { answerText: "are able", isCorrect: false },
        ],
    },
    {
        questionText: ' 7) It’s such a shame I still <…> "Dune"',
        answerOptions: [
            { answerText: "haven’t seen", isCorrect: true },
            { answerText: "didn’t see", isCorrect: false },
            { answerText: "don’t see", isCorrect: false },
            { answerText: "will not see", isCorrect: false },
        ],
    },
    {
        questionText: ' 8) Wikipedia <…> that Billie Eilish released her second album "Happier Than Ever" on July 30, 2021 ',
        answerOptions: [
            { answerText: " says ", isCorrect: true },
            { answerText: " tells ", isCorrect: false },
            { answerText: " speaks ", isCorrect: false },
            { answerText: " said ", isCorrect: false },
        ],
    },
    {
        questionText: ' 9) Netflix recently released "Britney Vs Spears," a 90-minute documentary <…> the conservatorship established for the pop star ',
        answerOptions: [
            { answerText: " challenging ", isCorrect: false },
            { answerText: " creating ", isCorrect: false },
            { answerText: " surrounding ", isCorrect: true },
            { answerText: " showed ", isCorrect: false },
        ],
    },
    {
        questionText: "  10) I <…> YouTube Originals when you called ",
        answerOptions: [
            { answerText: " watched ", isCorrect: false },
            { answerText: " was watching ", isCorrect: true },
            { answerText: " watch ", isCorrect: false },
            { answerText: " am watching ", isCorrect: false },
        ],
    },
    {
        questionText: " 11) The word “vaccine” <…> the word of the year by many dictionaries for 2021 ",
        answerOptions: [
            { answerText: " named ", isCorrect: false },
            { answerText: " has named ", isCorrect: false },
            { answerText: " has been named ", isCorrect: true },
            { answerText: " has to be name", isCorrect: false },
        ],
    },
    {
        questionText: " 12) Everyone admits <…> a challenging and anxious year ",
        answerOptions: [
            { answerText: " to have", isCorrect: false },
            { answerText: " having ", isCorrect: true },
            { answerText: " have ", isCorrect: false },
            { answerText: " have had ", isCorrect: false },
        ],
    },
    {
        questionText: ' 13) In her first album <…> 2015, Adele finally came back this year with "30" ',
        answerOptions: [
            { answerText: " since ", isCorrect: true },
            { answerText: " that ", isCorrect: false },
            { answerText: " when ", isCorrect: false },
            { answerText: " then ", isCorrect: false },
        ],
    },
    {
        questionText: " 14) Everyone was <…> impressed by the courage of doctors all around the world ",
        answerOptions: [
            { answerText: " entirely ", isCorrect: false },
            { answerText: " highly ", isCorrect: true },
            { answerText: " many ", isCorrect: false },
            { answerText: " badly ", isCorrect: false },
        ],
    },
    {
        questionText: " 15) Billie Eilish won 2 nominations at the 2021 Grammy Award. That’s what we call girl <…> ",
        answerOptions: [
            { answerText: " strength ", isCorrect: false },
            { answerText: " efforts ", isCorrect: false },
            { answerText: " beauty ", isCorrect: false },
            { answerText: " power ", isCorrect: true },
        ],
    },
    {
        questionText: " 16) Joe Biden <…> the 46th president of the United States ",
        answerOptions: [
            { answerText: " made ", isCorrect: false },
            { answerText: " went ", isCorrect: false },
            { answerText: " became ", isCorrect: true },
            { answerText: " started ", isCorrect: false },
        ],
    },
    {
        questionText: " 17) The spaceflight company led by the billionaire Elon Musk launched a <…> trip to orbit with the first-ever all-civilian crew ",
        answerOptions: [
            { answerText: " historic ", isCorrect: true },
            { answerText: " fun ", isCorrect: false },
            { answerText: " charming ", isCorrect: false },
            { answerText: " spacy ", isCorrect: false },
        ],
    },
    {
        questionText: " 18) I <…> Måneskin on Eurovision for quite a while before I realized that Damiano David was very hot ",
        answerOptions: [
            { answerText: " was watching ", isCorrect: false },
            { answerText: " had been watching ", isCorrect: true },
            { answerText: " have been watching ", isCorrect: false },
            { answerText: " would be watching ", isCorrect: false },
        ],
    },
    {
        questionText: " 19) My social media feed has been flooded with <…> posts this year ",
        answerOptions: [
            { answerText: " shop ", isCorrect: false },
            { answerText: " shopped ", isCorrect: false },
            { answerText: " shopply ", isCorrect: false },
            { answerText: " shoppable ", isCorrect: true },
        ],
    },
    {
        questionText: " 20) Do you know that Travis Scott’s 2021 Astroworld Festival was called a <…>? ",
        answerOptions: [
            { answerText: " tragical ", isCorrect: false },
            { answerText: " winning ", isCorrect: false },
            { answerText: " tragedy ", isCorrect: true },
            { answerText: " impressive ", isCorrect: false },
        ],
    },
    {
        questionText: " 21) I'd rather you <…> to some charity funds to support them ",
        answerOptions: [
            { answerText: " would subscribe ", isCorrect: false },
            { answerText: " to subscribe", isCorrect: false },
            { answerText: " will subscribe", isCorrect: false },
            { answerText: " subscribed", isCorrect: true },
        ],
    },
    {
        questionText: " 22) As the two platforms are so <…>, many content creators have reshared videos created on TikTok to VK Video ",
        answerOptions: [
            { answerText: " similar ", isCorrect: true },
            { answerText: " the same", isCorrect: false },
            { answerText: " same ", isCorrect: false },
            { answerText: " boring ", isCorrect: false },
        ],
    },
    {
        questionText: " 23) This year, the sales of CDs are really <…> streaming music services ",
        answerOptions: [
            { answerText: " lagging behind ", isCorrect: true },
            { answerText: " pulling down", isCorrect: false },
            { answerText: " missing out on", isCorrect: false },
            { answerText: " sticking up for", isCorrect: false },
        ],
    },
    {
        questionText: " 24) The Silhouette Challenge dominated <…> TikTok’s February content in 2021 ",
        answerOptions: [
            { answerText: " much ", isCorrect: false },
            { answerText: " many ", isCorrect: false },
            { answerText: " a lot of", isCorrect: false },
            { answerText: " much of", isCorrect: true },
        ],
    },
    {
        questionText: " 25) This is the trending slang of 2021 and another way of saying that someone is over the top ",
        answerOptions: [
            { answerText: " extra ", isCorrect: true },
            { answerText: " cancelled ", isCorrect: false },
            { answerText: " FYI ", isCorrect: false },
            { answerText: " ok, boomer", isCorrect: false },
        ],
    }
];
 function Level_detection() {
    const auth = useContext(Context)
    const {request} = useHttp()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [level, setLevel] = useState("");

    const pressHandler = async event => {
        try {
            const data = await request('/api/test/save', 'POST',{     testName: "Level_detection",
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
            if(score>=21){
                setLevel("Upper-Intermediate")
            }else if(score>=13&&score<=20){
                setLevel("Intermediate")
            }else if(score>=8&&score<=12){
                setLevel("Pre-Intermediate")
            }else if(score>=1&&score<=7){
                setLevel("elementary")
            }else if(score>=0&&score<=3){
                setLevel("Beginner")
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
                                <h4>Ваш уровень : {level}</h4>
                                <p>Правильных ответов {score} из {questions.length}</p>
                                
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
export default Level_detection