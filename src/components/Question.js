import React, { useState, useEffect } from "react";

const Question = ({ step, onClick }) => {
  const [currentStep, setCurrentStep] = useState(null);
  
  useEffect(() => {
    setCurrentStep(step)
  }, [step]);

  return currentStep && currentStep.questionId == 0  ? (
    <div className='container'>
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <div>
          <h2>{currentStep.question}</h2>
        </div>
      </div>
      <div onClick={() => onClick(0)} className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <div>
          <h2>{"I Don't Have C-PTSD"}</h2>
        </div>
      </div>
    </div>
  ) : (
    <div onClick={() => onClick(0)} className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
    <div>
      <h2>{"I Don't Have C-PTSD"}</h2>
    </div>
  </div>
  )
}

export default Question;
