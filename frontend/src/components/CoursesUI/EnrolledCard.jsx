import Actions from "./Actions"
import React from 'react';
import { Card, Button, Carousel } from "react-bootstrap";
import "../../App.css";

const EnrolledCard = ({courseID, courseName, images})=>{
    
    return(
        <div style = {MainStyle} data-testid = "en-ui-div">
            <div style = {ImageStyle}>
            {images.length > 0 ? (
          <Carousel variant="dark">
            {images.map((image, index) => (
              <Carousel.Item>
                <img
                  key={image.url}
                  style={{
                    maxHeight: "300px",
                    minHeight: "300px",
                    maxWeight: "200px",
                    minWeight: "200px",
                  }}
                  className="d-block w-100"
                  src={image.url}
                  alt="Second view"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div
            style={{
              maxHeight: "300px",
              minHeight: "300px",
              maxWeight: "200px",
              minWeight: "200px",
              
            }}
          >
            <div className="circle">{courseName[0]}</div>
          </div>
        )}
            </div>
            <div style = {TitleStyle}>{courseName}</div>
            <div style = {ActionStyle}>
                <Actions title = 'Learn' 
                click = 'learn' 
                courseID = {courseID} 
                courseName = {courseName}/>
            </div>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '330px',
    minWidth: '330px',
    alignSelf: 'center',
    height: '410px',
    borderRadius: 9,
    marginLeft: 20,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const ImageStyle = {
    display:'flex',
    height: '78%',
    padding: 4
    //background: 'red'
}

const TitleStyle = {
    fontWeight: 'bold',
    margin: 5
}

const ActionStyle = {
    display: 'flex',
    justifyContent: 'center'

}

export default EnrolledCard;