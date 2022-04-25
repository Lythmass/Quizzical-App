import React from "react"
import { nanoid } from "nanoid"

export default function Buttons(props) {

     function saveValue(event) {
          window.localStorage.setItem(props.name, event.target.value);
          if(event.target.value == props.correct) {
               window.localStorage.setItem(props.correct, 1);
          } else {
               window.localStorage.setItem(props.correct, 0);
          }
     }

     const displayAnswers = props.value.map(answer => {
          const id = nanoid();
          return (
               <div className = "quiz-buttons">
                    <input
                         type = "radio"
                         name = {props.name}
                         id = {id}
                         value = {answer}
                         onChange = {saveValue}
                    />
                    <label htmlFor = {id}>
                         <p
                              dangerouslySetInnerHTML = {{__html: answer}}
                              className = {`
                                   ${props.show && props.correct === answer ? "answer-correct"
                                   :
                                   (props.show && answer !== props.correct && window.localStorage.getItem(props.name) === answer
                                   ?
                                   "answer-incorrect" : "answer")}
                              `}
                         />
                    </label>

               </div>
          )
     });
     return (
          <div>
               {displayAnswers}
          </div>
     )

}
