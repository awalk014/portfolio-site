import React, { useState } from "react";
import '../Survey.css'; 

const questions = [
  "Have you enjoyed using the website?",
  "What features do you like the most?",
  "What features do you think need improvement?",
  "Did you encounter any issues while using the website?",
  "Is there anything else you would like to share?",
];

export default function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [showDialog, setShowDialog] = useState(false);

  const handleInputChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
    alert("Survey submitted. Thank you!");
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="survey-container">
      <h2 className="survey-title">Survey</h2>

      
      <div className="survey-question-area">
        
        <p className="survey-question-text">{questions[currentQuestionIndex]}</p>
        <input
          type="text"
          value={answers[currentQuestionIndex]}
          onChange={handleInputChange}
          
          className="survey-input"
        />
      </div>

      
      <div className="survey-navigation">
        <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={nextQuestion}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>

      {showDialog && (
        
        <div className="survey-dialog-overlay">
          
          <div className="survey-dialog-content">
            <p>Survey submitted.</p>
            <p>Thank you for your feedback!</p>
            <p>Your answers:</p>
            <ul>
              {answers.map((answer, index) => (
                <li key={index}>
                  {questions[index]}: {answer}
                </li>
              ))}
            </ul>
        
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
