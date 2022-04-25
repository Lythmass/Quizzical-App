import React from "react"
import Buttons from "./Buttons.js"
import { nanoid } from "nanoid"

export default function Quiz(props) {

     const [score, setScore] = React.useState(0);
     const [showAnswers, setShowAnswers] = React.useState(false);

     React.useEffect(() => {
          setScore(() => {
               let sum = 0;
               for(let i = 0; i < props.all.length; i++) {
                    sum += 1 * window.localStorage.getItem(props.all[i].correct);
               }
               return sum;
          });
     }, [showAnswers]);

     const all = props.all.map(single => {
          return (
               <div className = "qa">
                    <h2 dangerouslySetInnerHTML = {{__html: single.question}}/>
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
               {all}
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
