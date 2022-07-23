import React from "react";
import EvaluationCheckbox from "./EvaluationCheckbox";
import EvaluationRadio from "./EvaluationRadio";
import EvaluationSlider from "./EvaluationSlider";
import EvaluationFeedback from './EvaluationFeedback';

const ViewForm = (props)=>{

    return(
        <div data-testid = 'view-form' style = {MainStyle}>
             <p style = {{fontWeight: 'bold'}}>{props.courseName} Evaluation</p>
            {props.data.map((item, index) =>{
                if(item.type === 'radio'){
                    return <EvaluationRadio content = {item.content} array = {item.array}/>
                }else if(item.type === 'box'){
                    return <EvaluationCheckbox content = {item.content}/>
                }else{
                    return <EvaluationSlider content = {item.content}/>
                }
            }
            )}

            {props.checked &&
                <EvaluationFeedback />
            }

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

export default ViewForm;