import ExposeView from "./ExposeView.jsx";

const Display = (props) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <ExposeView 
            id = "2381410@students.wits.ac.za"
            courses = {props.courses} 
            comments = {props.comments}
            />
        </div>
    )
}

export default Display;