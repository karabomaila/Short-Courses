import ExposeView from "./ExposeView.jsx";

const Display = (props) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <ExposeView 
            userID = {props.userID}
            courses = {props.courses} 
            comments = {props.comments}
            />
        </div>
    )
}

export default Display;