import React from "react"
import { nanoid } from 'nanoid'
import Welcome from "./Components/Welcome.js"
import Quiz from "./Components/Quiz.js"

export default function App() {

     const [quiz, setQuiz] = React.useState(false);
     const [page, setPage] = React.useState("welcome");
     const [quizData, setQuizData] = React.useState([]);

     function start() {
          setQuiz(prevQuiz => !prevQuiz);
     }

     function changePage() {
          setPage("quiz");
          setQuiz(prevQuiz => !prevQuiz);
     }

     React.useEffect(() => {
          fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
          .then(res => res.json())
          .then(data => setQuizData(data.results));
     }, []);
     const eachQuizQuestion = quizData.map(data => {
          data = {
               ...data,
               id: nanoid()
          }
          return (
               <Quiz
                    key = {data.id}
                    id = {data.id}
                    question = {data.question}
                    correct = {data.correct_answer}
                    incorrect = {data.incorrect_answers}
               />
          )
     });

     return (
          <div className = "App" >
               {
                    page == "welcome" ? <Welcome cp = {changePage} />
                    : <div className = "question-body">
                         <div className = "question">
                              {eachQuizQuestion}
                              <button className = "check-answers">Check Answers</button>
                         </div>
                      </div>
               }
          </div>
     );
}
