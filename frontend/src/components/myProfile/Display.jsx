import ExposeView from "./ExposeView.jsx";

const Display = (props) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <ExposeView courses = {props.courses} id = "Given.Mathebula1@wits.ac.za"/>
        </div>
    )
}

export default Display;