import React from 'react';

const Footer = ()=>{
    return(
        <div style = {FooterStyle}>
            <h4 style = {{color: 'white', marginLeft: 12,marginBottom: 12, fontWeight: 'bold'}}>Department of Family Medicine and Primary Care</h4>
            <div style = {GroupStyle}>
            <div style = {RowStyle}>
                <h5 style = {{fontWeight: 'bold'}}>Find Us</h5>
                <h6>Wits Medical School Administration</h6>
                <h6>7 York Road</h6>
                <h6>Parktown 2193</h6>
                <h6>Johannesburg</h6>
                <h6>South Africa</h6>

            </div>
            <div style = {RowStyle}>
                <h5 style = {{fontWeight: 'bold'}}>Contact Us</h5>
                <h6>011 717 2051</h6>
                <h6>www.wits.ac.za</h6>
            </div>
           
            </div>
            <p style = {{color: 'white', marginLeft: 12, marginTop: 12}}>&#169; 2022 University of the Witwatersrand</p>
        </div>
    )
}

const FooterStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: '#003b5c',
    width: '100%',
    marginTop: 20

}

const GroupStyle = {
    display: 'flex',
    color: 'white',
    marginLeft: 12
    //alignItems: 'center',
    //justifyContent: 'center'
}

const RowStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 12,
    
}

export default Footer;