import React from "react";
import MyCourseCard from "./MyCourseCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaColumns } from "react-icons/fa";
import UserDataContext from "../ContextAPI/UserDataContext";

const MyCoursesList = () => {
  const [MycoursesData, setMycoursesData] = useState([]);
  // const {user, setUser} = useContext(UserDataContext);

  // const getMyCourse = async () =>{
  //   // var temp={"user_id":user[0].username.split("@")[0]}

  //     await axios.post('http://localhost:5000/mycourses',temp)
  //       .then((res)=>{
  //         console.log(res.data);
  //         setMycoursesData(res.data)

  //       }).catch(err=>{
  //         console.log(err)
  //       })
  // };

  useEffect(() => {
    // getMyCourse();
    // console.log(user);
  }, [setMycoursesData]);

  return (
    <div data-testid="list-course" style={MainStyle}>
      {MycoursesData.map((data, index) => (
        <MyCourseCard
          key={index}
          image1={data.picture_1}
          description={data.crs_description}
          name={data.crs_name}
          crs_id={data.crs_id}
        />
      ))}
    </div>
  );
};

const MainStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
  marginTop: 90,
};

export default MyCoursesList;
