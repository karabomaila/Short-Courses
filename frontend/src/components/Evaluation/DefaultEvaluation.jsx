import React from 'react';
import EvaluationCheckbox from './EvaluationCheckbox';
import EvaluationFeedback from './EvaluationFeedback';
import EvaluationRadio from './EvaluationRadio';
import EvaluationSlider from './EvaluationSlider';


const DefaultEvaluation=(props)=>{
    return(
        <div style = {MainStyle} data-testid = 'def-div'>
            <p style = {{fontWeight: 'bold'}}>{props.courseName} Evaluation</p>
            <EvaluationSlider content = 'The slides were well prepared/presented'/>
            <EvaluationSlider content = 'The course stimulated my interest in the field related to the course'/>
            <EvaluationSlider content = 'The course had variety of instructional methods to reach the course objective '/>
            <EvaluationCheckbox content = 'Would you recommend this course to a friend'/>
            <EvaluationCheckbox content = 'Did you cover all the learning outcomes'/>
            <EvaluationCheckbox content = 'The course description accurately described the course content'/>
            <EvaluationRadio content = 'Out of 100 how good is this course' array = {['75+', '50 - 74', '0 - 49']}/>
            <EvaluationFeedback />
        </div>
    );
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column',
    padding: 18,
    marginBottom: 20,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)',
}

export default DefaultEvaluation;