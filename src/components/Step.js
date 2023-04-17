import React, { useState, useEffect, useCallback, useMemo } from "react";
import Card from './Card';
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';

const Step = ({ step, onClick }) => {
  const [robots, setRobots] = useState(null);
  const [currentStep, setCurrentStep] = useState(null);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users)); 
  }, []);

  useEffect(() => {
    setCurrentStep(step)     
  }, [currentStep]);

  const OnButtonClick = useMemo(() => {
    return onClick;
  }, [onClick]);

  useEffect(() => {
    var cardList = []

    cardList = currentStep?.options?.map((option, index) => {
        var randomRobotInt = parseInt(Math.random()*(robots?.length-1));
        return <Card
          key={currentStep.answerId[index]}
          id={robots ? robots[randomRobotInt].id : 0}
          info={option}
          value={currentStep.answerId[index]}
          onClick={OnButtonClick}
          />
    });

    setCards(cardList)
  }, [currentStep, robots]);

  return (
    <div className="container">
      <div className="row">
        {currentStep ? (
          <div className="col">
            <Question key={uuidv4()} step={currentStep} onClick={OnButtonClick} />
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <div className="col">
          {cards ? cards : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Step;