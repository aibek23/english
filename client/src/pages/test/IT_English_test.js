import React, {      useContext,useState } from 'react';
import {useHttp} from '../../hooks/http.hook'
import {Context} from '../../context/Context'
const questions = [
    {
        questionText: " 1) What does 'CPU' stand for??",
       answerOptions: [
       { answerText: " Central Programming Unit ", isCorrect: false },
       { answerText: " Newton ", isCorrect: true },
       { answerText: " Watt ", isCorrect: false },
       { answerText: " Hertz ", isCorrect: false },
       ],
       },
       {
       questionText: " 2) What is the maximum data transfer rate for USB 3.0?",
       answerOptions: [
       { answerText: " 480 Mbps ", isCorrect: false },
       { answerText: " 5 Gbps ", isCorrect: true },
       { answerText: " 10 Gbps ", isCorrect: false  },
       { answerText: " 20 Gbps ", isCorrect: false },
       ],
       },
       {
       questionText: " 3) What type of cable is used to connect a computer to a router?",
       answerOptions: [
       { answerText: " . Ethernet cable", isCorrect: true },
       { answerText: " Coaxial cable ", isCorrect: false },
       { answerText: " Fiber optic cable", isCorrect: false },
       { answerText: " USB cable ", isCorrect: false },
       ],
       },
       {
       questionText: " 4) What is the smallest unit of digital information? ",
       answerOptions: [
       { answerText: " Megabyte ", isCorrect: false },
       { answerText: " Byte ", isCorrect: true },
       { answerText: " Gigabyte ", isCorrect: false },
       { answerText: " Terabyte ", isCorrect: false },
       ],
       },
       {
       questionText: " 5) What does RAID stand for?",
       answerOptions: [
       { answerText: " Redundant Array of Inexpensive Disks", isCorrect: false },
       { answerText: " Redundant Array of Independent Disks", isCorrect: true },
       { answerText: " Reliable Array of Inexpensive Disks ", isCorrect: false },
       { answerText: " Reliable Array of Independent Disks", isCorrect: false },
       ],
       },
       {
       questionText: " 6) What type of connector is used to connect a monitor to a computer?",
       answerOptions: [
       { answerText: " VGA ", isCorrect: true },
       { answerText: " HDMI ", isCorrect: false },
       { answerText: " USB ", isCorrect: false },
       { answerText: " Ethernet", isCorrect: false },
       ],
       },
       {
       questionText: "7) What is the maximum resolution for HDMI 2.0?",
       answerOptions: [
       { answerText: " 1080p", isCorrect: false },
       { answerText: " 1440p ", isCorrect: false },
       { answerText: " 4K ", isCorrect: true },
       { answerText: " 8K ", isCorrect: false },
       ],
       },
       {
       questionText: "8) What is the purpose of a router in a computer network?",
       answerOptions: [
       { answerText: " To connect devices to the internet ", isCorrect: true },
       { answerText: " To connect devices to each other ", isCorrect: false },
       { answerText: " To transfer data between networks", isCorrect: false },
       { answerText: " To encrypt data transmissions ", isCorrect: false },
       ],
       },
       {
       questionText: " 9) What is the difference between RAM and ROM?",
       answerOptions: [
       { answerText: " RAM is volatile, while ROM is non-volatile ", isCorrect: true},
       { answerText: " RAM is non-volatile, while ROM is volatile ", isCorrect: false },
       { answerText: " RAM is faster than ROM ", isCorrect: false },
       { answerText: " ROM is faster than RAM", isCorrect: false },
       ],
       },
       {
       questionText: "  10) What type of storage is an SSD?",
       answerOptions: [
       { answerText: " Optical storage", isCorrect: false },
       { answerText: " Magnetic storage", isCorrect: false },
       { answerText: " Solid-state storage ", isCorrect: true },
       { answerText: " Flash storage ", isCorrect: false },
       ],
       },
       {
       questionText: "  11) What does DNS stand for? ",
       answerOptions: [
       { answerText: " Dynamic Network System", isCorrect: false },
       { answerText: " Domain Name System ", isCorrect: true },
       { answerText: " Data Network Service ", isCorrect: false },
       { answerText: " Digital Network Solution ", isCorrect: false },
       ],
       },
       {
       questionText: "12) What is a firewall?",
       answerOptions: [
       { answerText: " A device that prevents unauthorized access to a network ", isCorrect: true },
       { answerText: " A device that amplifies wireless signals", isCorrect: false },
       { answerText: " A device that connects networks together ", isCorrect: false },
       { answerText: " A device that filters spam emails ", isCorrect: false },
       ],
       },
       {
       questionText: "13) What is the difference between a hub and a switch? ",
       answerOptions: [
       { answerText: " A hub broadcasts data to all connected devices, while a switch directs data only to the intended recipient ", isCorrect: true },
       { answerText: " . A switch broadcasts data to all connected devices, while a hub directs data only to the intended recipient", isCorrect: false },
       { answerText: " A hub and a switch are the same thing  ", isCorrect: false },
       { answerText: " A hub is used for wired networks, while a switch is used for wireless networks ", isCorrect: false },
       ],
       },
       {
       questionText: " 14) What is a codec?",
       answerOptions: [
       { answerText: " A device that converts analog signals to digital signals", isCorrect: false },
       { answerText: " A device that compresses and decompresses digital audio and video signals", isCorrect: true },
       { answerText: " A device that encrypts and decrypts data transmissions ", isCorrect: false },
       { answerText: " A device that amplifies and filters digital signals ", isCorrect: false },
       ],
       },
       {
       questionText: "15) What is the function of an operating system? ",
       answerOptions: [
       { answerText: " To manage the computer's hardware and software resources ", isCorrect: true },
       { answerText: " To provide internet connectivity to the computer ", isCorrect: false },
       { answerText: " To protect the computer from viruses and malware ", isCorrect: false },
       { answerText: " To display graphics and multimedia content ", isCorrect: false },
       ],
       },
       {
       questionText: "16) What is a GUI?",
       answerOptions: [
       { answerText: " A computer programming language ", isCorrect: false },
       { answerText: " A device driver", isCorrect: false },
       { answerText: " A graphical user interface ", isCorrect: true },
       { answerText: " A file extension", isCorrect: false },
       ],
       },
       {
       questionText: " 17) What is a VPN?",
       answerOptions: [
       { answerText: " A virtual private network that allows users to securely access a private network over the internet ", isCorrect: true },
       { answerText: "A video processing network used for live streaming", isCorrect: false },
       { answerText: "  A virus protection network that scans for malware ", isCorrect: false },
       { answerText: " A virtual power network that optimizes energy usage ", isCorrect: false },
       ],
       },
       {
       questionText: " 18) What is the purpose of a BIOS?",
       answerOptions: [
       { answerText: " To control the computer's hardware at a low level ", isCorrect: true },
       { answerText: " To provide virus protection to the computer ", isCorrect: false },
       { answerText: " To manage the computer's network connections ", isCorrect: false },
       { answerText: " To encrypt data transmissions between the computer and the internet ", isCorrect: false },
       ],
       },
       {
       questionText: " 19) What is the difference between a bit and a byte?",
       answerOptions: [
       { answerText: " A bit is 8 times smaller than a byte ", isCorrect: false },
       { answerText: " A bit is 8 times larger than a byte", isCorrect: false },
       { answerText: " A bit is a unit of data storage, while a byte is a unit of digital information ", isCorrect: true },
       { answerText: " A bit is used for analog signals, while a byte is used for digital signals ", isCorrect: false },
       ],
       },
       {
       questionText: "20) What is the difference between HTTP and HTTPS?",
       answerOptions: [
       { answerText: " . HTTPS is a more secure version of HTTP that uses encryption to protect data transmissions ", isCorrect: true },
       { answerText: " HTTP is a more secure version of HTTPS that uses encryption to protect data transmissions ", isCorrect: false },
       { answerText: " HTTP is used for audio and video streaming, while HTTPS is used for web browsing ", isCorrect: false },
       { answerText: " HTTPS is faster than HTTP because it uses a dedicated network connection ", isCorrect: false },
       ],
       },
       {
       questionText: "21) What is a subnet mask? ",
       answerOptions: [
       { answerText: " A 32-bit number that defines the network and host portions of an IP address", isCorrect: true },
       { answerText: " A device that measures network bandwidth usage ", isCorrect: false },
       { answerText: " A protocol used to transfer data between networks ", isCorrect: false },
       { answerText: " A method for encrypting data transmissions over a network ", isCorrect: false },
       ],
       },
       {
       questionText: " 22) What is a DNS server? ",
       answerOptions: [
       { answerText: " A server that translates domain names into IP addresses ", isCorrect: true },
       { answerText: " A server that provides internet connectivity to devices ", isCorrect: false },
       { answerText: " A server that filters spam emails ", isCorrect: false },
       { answerText: " A server that stores data backups ", isCorrect: false },
       ],
       },
       {
       questionText: " 23) What is a cookie?",
       answerOptions: [
       { answerText: " A small file stored on a user's computer by a website to remember user preferences and activity ", isCorrect: true },
       { answerText: " A device used to connect a computer to a network ", isCorrect: false },
       { answerText: " A type of computer virus ", isCorrect: false },
       { answerText: " A program used to scan for malware ", isCorrect: false },
       ],
       },
       {
       questionText: "24) What is a USB flash drive? ",
       answerOptions: [
       { answerText: " A portable storage device that uses flash memory to store data ", isCorrect: true },
       { answerText: " A device used to connect a computer to a printer ", isCorrect: false },
       { answerText: " A device used to connect a computer to the internet ", isCorrect: false },
       { answerText: " A device used to scan documents and photos", isCorrect: false },
       ],
       },
       {
       questionText: " 25) What is a motherboard? ",
       answerOptions: [
       { answerText: " The main circuit board of a computer that connects all the components together ", isCorrect: true },
       { answerText: " A device that amplifies and filters audio signals ", isCorrect: false },
       { answerText: " A device that controls the computer's power supply ", isCorrect: false },
       { answerText: " A device that stores and retrieves data from a hard drive ", isCorrect: false },
       ],
       },

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