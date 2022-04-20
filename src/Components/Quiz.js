import React from "react"
import { nanoid } from "nanoid"

export default function Quiz(props) {

     const random = Math.floor(Math.random() * 4);
     const answers = [...props.incorrect, props.correct];
     [answers[random], answers[3]] = [answers[3], answers[random]];
     const displayAnswers = answers.map(answer => {
          const id = nanoid();
          return (
               <div className = "quiz-buttons">
                    <input type = "radio" name = {props.id} id = {id}/>
                    <label for = {id}>
                         <p className = "answer">{answer}</p>
                    </label>
               </div>
          )
     });


     return (
          <div>
               <h2>{props.question}</h2>
               <div className = "answers">
                    {displayAnswers}
               </div>
          </div>
     )
}
