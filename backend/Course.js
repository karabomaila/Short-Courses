const client = require("./connection.js");
const express = require("express");
const app = express();
const cors = require("cors");
const { user } = require("pg/lib/defaults");
const res = require("express/lib/response");
var user_id_ = "12345";

app.use(cors());
app.listen(3300, () => {
  console.log("server is now listening");
});

client.connect();

function Create_New_CRS(id, nm, des, user, pic0, pic1) {
  var data =
    "INSERT INTO courses (crs_creator,crs_description,crs_id,crs_name,Picture_1,Picture_2) VALUES($1,$2,$3,$4,$5,$6);";

  client.query(data, [user, des, id, nm, pic0, pic1], (err, results) => {
    if (err) {
      // couerse is not created
      throw err;
    } else {
      console.log("1 record inserted" + results);
      // couerse is created
    }
  });
}

function All_Courses() {
  app.get("/allcourses", (req, res) => {
    client.query("Select * from courses", (err, result) => {
      if (!err) {
        console.log(result.rows);
        res.send(result.rows);
        // loop it ,and get each course info
      } else {
        console.log(err.message);
        res.send(err.message);
        // some error occured
      }
    });
  });
}

function User_Course(user_id) {
  app.get("/enroll/", (req, res) => {
    client.query(
      "Select crs_code from enroll where user_id = $1",
      [user_id], // logged in user
      (error, results) => {
        if (!error) {
          const data = []; // will add every object here

          // number of caurses he is taking
          for (let i = 0; i < results.rowCount; i++) {
            var j = results.rows[i].crs_code;
            //get each course he is doing
            client.query(
              "Select * from courses where crs_id = $1",
              [j],
              (err, result) => {
                if (!err) {
                  data.push(result.rows[0]); // adding all the enrolled course to one json
                  if (i == results.rowCount - 1) {
                    console.log(data); // send once we done pushing
                    res.send(data);
                  }
                } else {
                  console.log(err.message);
                  // some error occured
                }
              }
            );
          }
        } else {
          console.log(err.message);
          // some error occured
        }
      }
    );
  });
}

function Creator_Course(user_id) {
  app.get("/mycourses/", (req, res) => {
    client.query(
      "Select * from courses where crs_creator = $1",
      [user_id],
      (err, result) => {
        if (!err) {
          console.log(result.rows);
          res.send(result.rows);

        } else {
          console.log(err.message);
          //some error occured
        }
      }
    );
  });
}

function Enroll(crs_code, user_id) {
  var data = "INSERT INTO enroll (crs_code,user_id) VALUES($1,$2);";

  client.query(data, [crs_code, user_id], (err, result) => {
    if (err) {
      // couerse is not created,due to some error
      throw err;
    } else {
      console.log("Accepted" + result);
      //accepted
    }
  });
}

function Update_CRS() {
  app.put("/course/:crs_id", (req, res) => {
    var data =
      "UPDATE courses SET crs_description = 'Database and node js,updated' WHERE crs_id = '1'";
    client.query(data, function (err, result) {
      if (err) {
        throw err;
        //some error occured
      } else {
        console.log(result.affectedRows + " record(s) updated");
        //done updating
      }
    });
  });
}

function Delete_CRD() {
  // app.delete("crs_created", (req, res) => {
  var data = "DELETE FROM courses WHERE crs_id = $1";
  client.query(data, [3], (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log("Number of records deleted: ");
    }
  });
}

app.post("user", (req, res) => {
  user_id_ = req.body.user;
  console.log(user_id_);
});

var user_id = "53456";
var crs_id = "53456";
var crs_creator = "12345";
var crs_description =
  "you will become a full stack developer,just take it/enroll, you will see inside";
var name = "Full Stack";
var image0 = "full1.jpeg";
var image1 = "full2.jpeg";


All_Courses();
User_Course(user_id);
Creator_Course("12345");