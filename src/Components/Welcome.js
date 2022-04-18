import React from "react"

export default function Welcome(props) {

     return (
          <div className = "welcome">
               <h1>Quizzical</h1>
               <h3>Test your general knowledge on this flamboyant quiz!</h3>
               <button onClick = {props.start}>Start Quiz</button>
          </div>
     )
}
