import React from "react"

import Welcome from "./Components/Welcome.js"

export default function App() {
     const [quiz, setQuiz] = React.useState(false);

     function start() {
          setQuiz(prevQuiz => !prevQuiz);
     }

     return (
          <div className = "App" >
          {!quiz && <Welcome start = {start} />}
          </div>
     );
}
