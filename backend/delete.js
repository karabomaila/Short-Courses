const express = require("express");
const { pool } = require("./db");
const app = express();
const cors = require("cors");

// Delete  FROM "enroll" where Crs_code='23814104DMC7'

pool.query(
    "Delete  FROM enroll where crs_code= $1",
    ["23814104DMC7"], // logged in user id
    (error, results) => {

        console.log(results)
        console.log(error)
              
      } 
    
  );