import ExposeView from "./ExposeView.jsx";

const Display = (props) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <ExposeView 
            id = "Given.Mathebula1@wits.ac.za"
            courses = {props.courses} 
            comments = {props.comments}
            />
        </div>
    )
}

export default Display;