const express = require("express");
const { pool } = require("./db");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// all users
app.get("/users", (req, res) => {
  pool.query(`SELECT * FROM users`, (err, results) => {
    if (err) {
      res.status(400); // client made a bad request
      throw err;
    }
    res.status(202); // client's request was ACCEPTED

    // response is a list of users as a JSONArray node
    res.send(results.rows);
  });
});

// register
app.post("/users/register", (req, res) => {
  // get the details from request body.
  const first_name = req.body.first_name;
  const user_id = req.body.user_id;
  const password = req.body.password;

  pool.query(
    `INSERT INTO users (user_id , password, first_name)
          VALUES ($1, $2, $3)`,
    [user_id, password, first_name], // use details to make a query to the database
    (err, results) => {
      if (err) {
        res.status(400); // client made a bad request
      }
      res.status(201); // USER CREATED
    }
  );
});

// user login
app.post("/users/login", (req, res) => {
  // get login details from request body
  const user_id_fromUser = req.body.user_id;
  const password_fromUser = req.body.password;

  pool.query(
    `SELECT user_id, password,first_name FROM users WHERE user_id = $1 `,
    [user_id_fromUser], // use details to make a query to the database
    (err, results) => {
      if (err) {
        res.status(400); // client made a bad request
        throw err;
      }

      // check if user details match the user form database
      if (results.rows.length !== 0) {
        console.log(results.rows[0].user_id + "from database");

        if (results.rows[0].password === password_fromUser) {
          res.send(results.rows[0].first_name);
        } else {
          res.send("Incorect passowrd");
        }
      } else if (results.rows.length == 0) {
        // noMatch
        res.send("no account");
      }
    }
  );
});

//enroll
app.post("/enroll", (req, res) => {
  const course_id = req.body.crs_id;
  const user_id = req.body.user_id;

  console.log(course_id);
  console.log(user_id);

  var data = `INSERT INTO enroll (crs_code , user_id)
    VALUES ($1, $2)`;

  pool.query(
    data,
    [course_id, user_id], // use details to make a query to the database
    (err, results) => {
      if (err) {
        res.send(false); // client couldn't enroll
        // console.log("nah" + err);
      } else {
        res.send(true); // we are in
        console.log("yes");
      }
    }
  );
});

app.post("/mycourses", (req, res) => {
  pool.query(
    "Select * from courses where crs_creator = $1",
    [req.body.user_id],
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      } else {
        console.log(err);
      }
    }
  );
});





app.post('/enrolled',(req,res)=>{

  const user_id = req.body.user_id;

  pool.query(
    "Select crs_code from enroll where user_id = $1",
    [user_id], // logged in user id
    (error, results) => {
      if (!error) {
        const data = []; // will add every object here

        // number of caurses the user is taking
        for (let i = 0; i < results.rowCount; i++) {
          var j = results.rows[i].crs_code;
          //get each course the user is doing
          pool.query(
            "Select * from courses where crs_id = $1",
            [j],
            (err, result) => {
              if (!err) {
                data.push(result.rows[0]); // adding all the enrolled course to one json

                if (i == results.rowCount - 1) {
                  res.send(data);
                }
              } else {
                console.log(err.message);
              }
            }
          );
        }
      } else {
        console.log(err.message);
      }
    }
  );
});

app.post("/CreateCourse", (req, res) => {
  var data =
    "INSERT INTO courses (crs_creator,crs_description,crs_id,crs_name,Picture_1,Picture_2) VALUES($1,$2,$3,$4,$5,$6);";

  pool.query(
    data,
    [
      req.body.user_id,
      req.body.crs_description,
      req.body.crs_id,
      req.body.crs_name,
      req.body.picture_1,
      req.body.picture_2,
    ],
    (err, results) => {
      if (err) {
        // course was not created
        throw err;
      } else {
        res.send("1 record inserted"); // course is created
      }
    }
  );
});

app.get("/allcourses", (req, res) => {
  pool.query("Select * from courses", (err, result) => {
    if (!err) {
      res.send(result.rows);
      console.log(result.rows);
    } else {
      res.send(err.message);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});