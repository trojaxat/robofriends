import React, { useState, useEffect } from "react";
import LinkList from '../../components/LinkList';
import Step from '../../components/Step';
import Steps from '../../const/Steps';
import LinksFlashback from '../../const/LinksFlashback';
import LinksRumination from '../../const/LinksRumination';
import LinksSplitting from '../../const/LinksSplitting';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [steps, setSteps] = useState(Steps)
  const [step, setStep] = useState(steps[0]);
  const [links, setLinks] = useState([]);
  
  const updateStep = (questionId) => {
    if (steps.length < (questionId + 1)) {
      return; 
    }
    
    if(steps[questionId]) {
      setStep(steps[questionId])
    }
    
    if (steps[questionId].questionId == 1) {
      setLinks(LinksRumination)
    } else if (steps[questionId].questionId == 2) {
      setLinks(LinksFlashback)
    } else if (steps[questionId].questionId == 3) {
      setLinks(LinksSplitting)
    } else {
      setLinks([])
    }
  }

  return (
    <div>
      <div className='tc'>
        <h1 className='f1'>c-PTSD</h1>
          <Step key={uuidv4()} step={step} onClick={(questionId) => updateStep(questionId)}/>
          <LinkList links={links} />
      </div>
    </div>
  )
}

export default App;