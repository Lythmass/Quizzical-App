import React from "react"
import { nanoid } from 'nanoid'
import Welcome from "./Components/Welcome.js"
import Quiz from "./Components/Quiz.js"

export default function App() {
     window.localStorage.clear();
     const [quiz, restartQuiz] = React.useState(false);
     const [page, setPage] = React.useState("welcome");
     const [quizData, setQuizData] = React.useState([]);
     const [loading, setLoading] = React.useState(false);

     function restart() {
          setQuizData([]);
          restartQuiz(prevQuiz => !prevQuiz);
     }

     function changePage() {
          setPage("quiz");
     }

     React.useEffect(() => {
          fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
          .then(res => res.json())
          .then(data => setQuizData(data.results));
     }, [quiz]);

     const eachQuizQuestion = quizData.map(data => {
          const random = Math.floor(Math.random() * 4);
          const answers = [...data.incorrect_answers, data.correct_answer];
          [answers[random], answers[3]] = [answers[3], answers[random]];

          return {
               question: data.question,
               answer: answers,
               correct: data.correct_answer,
               id: nanoid()
          }
     });

     return (
          <div className = "App" >
               {
                    page == "welcome" ? <Welcome cp = {changePage} />
                    : <div className = "quiz-body">
                         <div className = "quiz">
                              <Quiz
                                   key = {nanoid()}
                                   all = {eachQuizQuestion}
                                   restart = {restart}
                              />
                         </div>
                      </div>
               }
          </div>
     );
}
