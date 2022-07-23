import React from 'react';
import CardViewList from './CardViewList';
import Navigation from './navigation';

function Explore(props) {
  
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

  

export default Explore;