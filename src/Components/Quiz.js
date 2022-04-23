import React from "react"
import Buttons from "./Buttons.js"
import { nanoid } from "nanoid"

export default function Quiz(props) {

     const [showAnswers, setShowAnswers] = React.useState(false);
     const all = props.all.map(single => {
          return (
               <div>
                    <h2 dangerouslySetInnerHTML = {{__html: single.question}}/>
                    <div className = "answers">
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
                    <button
                         className = "check-answers"
                         onClick = {() => setShowAnswers(true)}
                    >
                         Check Answers
                    </button>
               </div>
          </div>
     )

}
