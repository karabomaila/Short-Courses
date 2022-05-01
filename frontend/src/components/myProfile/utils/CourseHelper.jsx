import NameTag from "./NameTag"

const CourseHelper = (props) => {
    let tag = NameTag(props.name);

    const onClick = () =>{
        // must open the course clicked...
        console.log(props.courseID[props.i]);
    }
    return(
        <div style = {OuterBox} onClick = {onClick}>
            <div style = {InnerBox}>
                <h1 style = {{color: '#edf4f5'}}>{tag}</h1>
            </div>
            <div style = {InnerInnerBox}>
                <p style = {{alignSelf: 'center', fontWeight: 'bold'}}>{props.name}</p>
            </div>
            
        </div>
    )
}

const OuterBox = {
    margin: 12,
    width: '20%',
    height: '150px',
    borderRadius: 5,
    display: 'flex',
    background: '#edf4f5',
    borderStyle: 'groove',
    flexDirection: 'column',
    minWidth: '20%',
    alignItems: 'center'
}

const InnerBox = {
    display: 'flex',
    width: '100%',
    height: '55%',
    //alignSelf: 'center', 
    justifyContent: 'center',
    alignItems: 'center',
    background: '#003b5c'
}

const InnerInnerBox = {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    height: '40%',
    background: '#edf4f5'
}

export default CourseHelper;