import React from 'react';

const CommentCard = (props)=>{

    let initials = ''
    const array = props.comment.mapValue.fields.userName.stringValue.split(" ");
    initials = array[0][0] + array[1][0];

    return(
        <div style = {CardOutline}>
            <div style = {CardLeft}>
                    <span style = {Profile}>{initials}</span>
            </div>
            <div style = {CardRight}>
                <div style = {NameStyle}>
                    {props.comment.mapValue.fields.userName.stringValue}
                </div>
                <div style = {BodyStyle}>
                    {props.comment.mapValue.fields.comment.stringValue}
                </div>
            </div>
        </div>
    )
}


const CardOutline = {
    display: 'flex',
    width: '70%',
    alignSelf: 'center',
    marginBottom: 12,
    marginTop: 12,
    borderRadius: 9,
    //borderColor: 'gray',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
    
}

const CardLeft = {
    display: 'flex',
    //background: 'red',
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}

const CardRight = {
    display: 'flex',
    //background: 'blue',
    flex: 6,
    flexDirection: 'column'
}

const Profile = {
    display: 'flex',
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#daa520',
    margin: 12,
    fontWeight: 'bold',
    color: 'white',
}

const NameStyle = {
    display: 'flex',
    fontWeight: 'bold',
    color: '#003b5c',
    marginTop: 5,
    marginBottom: 5
}

const BodyStyle = {
    display: 'flex',
    margin: 8,
    color: 'gray'
}

export default CommentCard;