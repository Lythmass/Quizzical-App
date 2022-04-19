import React from "react"

export default function Quiz(props) {

     const random = Math.floor(Math.random() * 4);
     const answers = [...props.incorrect, props.correct];
     [answers[random], answers[3]] = [answers[3], answers[random]];
     const displayAnswers = answers.map(answer => {

          return (
               <button>{answer}</button>
          )
     });

     
     return (
          <div className = "question">
               <h1>{props.question}</h1>
               <div className = "answers">
                    {displayAnswers}
               </div>
          </div>
     )
}
