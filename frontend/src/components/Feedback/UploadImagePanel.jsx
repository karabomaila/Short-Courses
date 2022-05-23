import Form from 'react-bootstrap/Form'
import React from "react";

const UploadImagePanel = ()=>{
    return(
        <div style = {{display: 'flex', justifyContent: 'center', margin: 12}} data-testid = "up-div">
        <Form.Group controlId="formFileSm" className="mb-3">
         <Form.Control type="file" size="sm" />
        </Form.Group>
        </div>
    )
}

export default UploadImagePanel;