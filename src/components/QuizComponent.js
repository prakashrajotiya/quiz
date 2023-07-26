import { useState } from "react";

const QuizComponent = ({ quiz,srNo,setScore,score }) => {
  const [isValidAns, setIsValidAns] = useState(false);
  let [clickCount, setClickCount] = useState(0);
  const validateAns = (index, correctIndex) => {
    if (index === correctIndex) {
      setIsValidAns(true);
      setScore(++score)
    } else {
      setIsValidAns(false);
    }
    setClickCount(++clickCount);
  };
  return (
    <div
      className={`mb-4 question ${isValidAns  ? "valid-ans" : ""} ${clickCount &&!isValidAns?'invalid-ans':'' }`}
    >
      <h2 className="text-lg md:text-2xl mb-3">{srNo+1}. {quiz.question}</h2>
      {quiz.answers.map((ans, index) => (
        <div key={index} className="mb-2 ">
          <label className="cursor-pointer text-sm md:text-base">
            <input
              disabled={clickCount}
              type="radio"
              className="mr-2"
              name={quiz.question}
              onChange={() => validateAns(index, quiz.correctIndex)}
              value={ans}
            />
            {ans}
          </label>
        </div>
      ))}
      {isValidAns && (
        <h3 className="text-positive font-bold underline">Correct Answer</h3>
      )}
      {clickCount>0 &&!isValidAns && (
        <h3 className="text-red-500 font-bold underline">Incorrect Answer</h3>
      )}
      
    </div>
  );
};
export default QuizComponent;
