import React from "react"

export default function Welcome(props) {

     return (
          <div className = "welcome">
               <h1>Quizzical</h1>
               <h3>Test your general knowledge with this flamboyant quiz!</h3>
               <button onClick = {props.cp}>Start Quiz</button>
          </div>
     )
}
