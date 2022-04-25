import React from "react"
import Buttons from "./Buttons.js"
import { nanoid } from "nanoid"

export default function Quiz(props) {

     const [score, setScore] = React.useState(0);
     const [showAnswers, setShowAnswers] = React.useState(false);

     // This calculates the number of correct guesses
     // after clicking the "Check Answers" button
     React.useEffect(() => {
          setScore(() => {
               let sum = 0;
               for(let i = 0; i < props.allQuestions.length; i++) {
                    sum += 1 * window.localStorage.getItem(props.allQuestions[i].correct);
               }
               return sum;
          });
     }, [showAnswers]);

     const allQuestions = props.allQuestions.map(single => {
          return (
               <div className = "qa">
                    <h2 dangerouslySetInnerHTML = {{__html: single.question}}/>
                    {/*Display answers for each question*/}
                    <div>
                         <Buttons
                              key = {nanoid()}
                              name = {single.id}
                              value = {single.answer}
                              show = {showAnswers}
                              correct = {single.correct}
                         />
                    </div>
               </div>
          )
     });
     return (
          <div>
               {allQuestions}
               <div className = "button-parent">
               {showAnswers && <h2 className = "score">You scored {score}/5 correct answers</h2>}
                    <button
                         className = "check-answers"
                         onClick = {!showAnswers ? () => setShowAnswers(true) : props.restart}
                    >
                         {!showAnswers ? "Check Answers" : "Play Again"}
                    </button>
               </div>
          </div>
     )

}
