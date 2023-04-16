import React, { useContext } from "react";
import { Context } from '../context/Context'
// import skyscraper from '../img/skyscraper(1440x900).jpg'
export const Personal = () => {
    const auth = useContext(Context)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
    }
    return (
        <div className="skyscraper">
            <div className="container">
                <div className="col-md-4 bg-white p-4" style={{ "borderRadius": "20px" }} >
                    <table>
                        <tbody>
                            <tr style={{borderBottom: "solid"}}>
                                <td style={{"padding":"15px"}}>Name:</td>
                                <td style={{"padding":"15px"}}>John</td>
                            </tr>
                            <tr >
                                <td style={{"padding":"15px"}}>Surname:</td>
                                <td style={{"padding":"15px"}}>Doe</td>
                            </tr>
                            <tr>
                                <td style={{"padding":"15px"}}>Phone:</td>
                                <td style={{"padding":"15px"}}>555-1234</td>
                            </tr>
                            <tr>
                                <td style={{"padding":"15px"}}>Date of Creation:</td>
                                <td style={{"padding":"15px"}}>2022-02-15</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn  btn-danger" style={{"margin":"15px"}} onClick={(e) => logoutHandler(e)}>выйти</button>
                </div>
            </div>
        </div>
    )
}

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
