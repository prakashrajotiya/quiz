import QuizComponent from "./QuizComponent";
import { useState, useEffect } from "react";
const QuizListComponent = () => {
  const [quizList, setQuizList] = useState([]);
  const [score, setScore] = useState(0);
  useEffect(() => {
    fetchQuiz();
    // console.log("useEff  aaec at",quiz)
  }, []);
  const fetchQuiz = () => {
    fetch(
      "https://raw.githubusercontent.com/googlearchive/android-Quiz/master/Application/src/main/assets/Quiz.json"
    )
      .then((res) => {
        // console.log(res)
        return res.json();
      })
      .then((data) => {
        // console.log("data",data.questions)
        setQuizList(data.questions);

        // console.log("last q uiz",quiz)
        // console.log("last data",data.questions)
      });
  };
  return (
    <div>
      {quizList.map((item,index) => (
        <QuizComponent quiz={item} srNo={index} setScore={setScore} score={score}  key={item.question} />
      ))}
      <div className="score">Your Score <br/> {score} out of {quizList.length}</div>
    </div>
  );
};
export default QuizListComponent;
