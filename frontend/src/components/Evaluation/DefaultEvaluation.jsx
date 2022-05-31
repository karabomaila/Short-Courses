import React from 'react';
import EvaluationCheckbox from './EvaluationCheckbox';
import EvaluationFeedback from './EvaluationFeedback';
import EvaluationRadio from './EvaluationRadio';
import EvaluationSlider from './EvaluationSlider';


const DefaultEvaluation=()=>{
    return(
        <div style = {MainStyle}>
            <EvaluationSlider content = 'The slides were well prepared/presented'/>
            <EvaluationSlider content = 'The course stimulated my interest in the field related to the course'/>
            <EvaluationSlider content = 'The course had variety of instructional methods to reach the course objective '/>
            <EvaluationCheckbox content = 'Would you recommend this course to a friend'/>
            <EvaluationCheckbox content = 'Did you cover all the learning outcomes'/>
            <EvaluationCheckbox content = 'The course description accurately described the course content'/>
            <EvaluationRadio content = 'The radio button demo' array = {['List', 'List2', 'List List']}/>
            <EvaluationFeedback />
        </div>
    );
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column'
}

export default DefaultEvaluation;