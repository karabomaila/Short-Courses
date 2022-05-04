import { useContext, useEffect,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardView from "./cardView";
import { Box, CircularProgress } from "@mui/material";
import DataContext from "./DataContext";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../graph";
import { loginRequest } from "../authConfig";
import axios from "axios";


function CardViewList(props) {
  const dataCard = useContext(DataContext);
  const MyDatabase = dataCard.Data;
  
  
  
  
  
  return (
    <Container>
      {MyDatabase.length !== 0 ? (
        <Row>
          {MyDatabase.map((data, index) => (
            <Col key={index}>
              <CardView
                image1={data.picture_1}
                image2={data.picture_1}
                name={data.crs_name}
                crs_id={data.crs_id}
                

              />
            </Col>
          ))}
        </Row>
      ) : (
        <Box style={{ marginLeft: "48%", marginTop: "10%"}}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}
export default CardViewList;
