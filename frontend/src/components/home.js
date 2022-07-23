import { Container, Row,Col } from "react-bootstrap";
import CardViewList from "./CardViewList";
import Navigation from "./navigation";
import React from "react";

function Home(props) {

    return ( 

        <div style = {styles.Main}>
            <Navigation user={props.user}/>
            <p style = {styles.Text}>EXPLORE</p>
            <CardViewList/>
        </div>
       
        
    );
}

const styles = {
   Main:{
    display: 'flex',
    flexDirection: 'column'

   },
   Text:{
        fontWeight: '400',
        fontSize: 22,
        marginLeft: 12,
        color: 'gray'
   }
}

export default Home;