import React from "react";
import { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import { link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Comments from "./Comments";
// import { Data } from "./Data";
import Submenu from "./Submenu";
import { FcSms } from "react-icons/fc";
import { storage, db } from "./firebase-config";
import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { FiBookOpen, FiBook } from "react-icons/fi";
import { MdLibraryBooks } from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom';
import Notes from './Notes'  



const textareaStyle = {
  resize: "both",
  width: "100%",
  minWidth: "70%",
};

const Nav = styled.div`
  background: #003b5c;
  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.div`
  background: #003b5c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarNav1 = styled.div`
  background: #003b5c;
  width: 310px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  transition: 350ms;
  z-index: 10;
`;

const Content = styled.div`
  height: 100vh;
  display: flex;

  justify-content: center;
  position: relative;
  top: 1;
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

function Siderbar() {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [data,setData] = useState([])
  const slidesCollectionRef = collection(db, "slides");
  const [currSlide,setCurrSlide] = useState([]);
  const {state} = useLocation();
  console.log(state.user[0].username.split("@")[0])
  console.log(state.crs_id)

  

  useEffect(()=>{

    // var crs_id = courseID
    const lindo = async ()=>{
      const q = query(slidesCollectionRef, where("courseID", "==", state.crs_id))
    const data = await getDocs(q);
    // console.log(data)
    let tmp = data.docs[0]._document.data.value.mapValue.fields
    let tmpChaps = []
    tmp.content.arrayValue.values.map((item,index)=>{
      let tmp2 = item.mapValue.fields
      let outcomes = []
      tmp2.outcomes.arrayValue.values.map(item2=>{
        let outcome = item2.stringValue
        outcomes.push(outcome)
      })
      let tmpSlides =[]
      tmp2.slides.arrayValue.values.map(tmpSlide=>{
        // let outcome = item2.stringValue
        let slide = tmpSlide.mapValue.fields
        let tmpBody = []
        slide.body.arrayValue.values.map(bodyItem=>{
          let temp2 = bodyItem.mapValue.fields
          let ft = {
            id:temp2.id.integerValue,
            type:temp2.type.stringValue,
          }
          if(parseInt(ft.id)<=3){
            ft = {...ft,content:temp2.content.stringValue}
          }else{
            ft = {...ft,url:temp2.url.stringValue}

          }
          tmpBody.push(ft)

        })
        let tmpSlidee = {
          id:slide.id.integerValue,
          chapter:slide.chapter.integerValue,
          name:slide.name.stringValue,
          duration:slide.duration.integerValue,
          body:tmpBody
        }
        tmpSlides.push(tmpSlidee)

      })
      let tmpChap = {
        id:tmp2.id.integerValue,
        name:tmp2.name.stringValue,
        slides:tmpSlides,
        outcomes:outcomes
      }
      tmpChaps.push(tmpChap)
      
    })
    // console.log(tmp)
    let tmpImages = []
    tmp.images.arrayValue.values.map(curr=>{
      tmpImages.push({
        id:curr.mapValue.fields.id.integerValue,
        url:curr.mapValue.fields.url.stringValue
      })

    })

    let finalCourse = {
      name:tmp.name.stringValue,
      courseID:tmp.courseID.stringValue,
      description:tmp.description.stringValue,
      content:tmpChaps,
      images:tmpImages
    }
    // console.log(finalCourse)
    let tmpData = [];
    setCurrSlide(finalCourse.content[0].slides[0].body)

    finalCourse.content.map((chapter, index) => {
      // console.log(chapter)
      let slides = [];
      chapter.slides.map((slide, index) => {
        // console.log(slide)
        slides.push({ title: slide.name, icon: <MdLibraryBooks />,body:slide.body });
      });
      
      let temp = {
        chapter: chapter.name,
        icon: <FiBookOpen />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        slides: slides,
        open: false,
      };
      tmpData.push(temp);
    });
    // console.log(tmpData);
    console.log("hi")
    setData(tmpData);}

    lindo();
    
  },[setCurrSlide])

  

  return (
    <>
      <Nav data-testid="nav">
        <NavIcon data-testid="navIcon">
          <FaIcons.FaBars data-testid="showbtn" onClick={() => showSidebar()} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar} data-testid="sidebar">
        <SidebarWrap data-testid="wrap">
          <NavIcon>
            <AiIcons.AiOutlineClose data-testid="hidebtn" onClick={() => showSidebar()} />
          </NavIcon>
          {data.map((item, index) => {
            // setCurrSlide(item.slides)
            return <Submenu item={item} key={index} setCurrSlide={setCurrSlide} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      <Content
        className={`${
          sidebar ? "w-50 mx-60 " : "w-50 mx-60 "
        } duration-300  bg-WitsBlue text-base `}
      >
        <div
           data-testid="run"
          className={`${
            sidebar ? "w-100" : "w-100"
          } duration-300 p-2  bg-WitsBlue text-base  justify-content: center`}
        >
          {currSlide.map((slide, index) =>{
          
            if (slide.type === "title") {
              console.log(slide)
              return (
                <h1
                  autoFocus
                  key={index}
                  id={
                    index.toString() +
                    "1" +
                    slide.type
                  }
                  
                  style={{
                    ...textareaStyle,
                    textAlign: "center",
                  }}
                  
                >{slide.content}</h1>
              );
            }
            else if (slide.type === "subtitle") {
              
              return (
                <h3
                  autoFocus
                  key={index}
                  id={
                    
                    index.toString() +
                    "1" +
                  slide.type
                  }
                  
                  style={{
                    ...textareaStyle,
                    textAlign: "center",
                  }}
                  
                >{slide.content}</h3>
              );
            }
            else if (slide.type === "paragraph") {
              
              return (
                <p
                  autoFocus
                  key={index}
                  id={
                    
                    index.toString() +
                    "1" +
                    slide.type
                  }

                  style={{
                    ...textareaStyle,
                    textAlign: "center",
                  }}
                  value={slide.content}
                >{slide.content}</p>
              );
            }
            else if (slide.type === "image") {
              return (
                <div style={{ resize: "both", overflow: "auto" }}>
                  <img
                    style={{
                      border: "2px solid black",
                      maxWidth: "95%",
                      maxHeight: "95%",
                    }}
                    key={index}
                    id={
                      index.toString() +
                      "1" +
                      slide.type
                    }
                    src={slide.url}
                  ></img>
                </div>
              );
            } else if (slide.type === "video") {
              return (
                <div>
                  <iframe
                    key={index}
                    id={
                      index.toString() +
                      "1" +
                      slide.type
                    }
                    style={{ resize: "both", overflow: "auto" }}
                    src={slide.url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            }

          })}
        </div>
      </Content>

      <SidebarNav1 sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon>
            <FcSms onClick={() => setOpen(!open)} />
          </NavIcon>

          <Notes/>
        </SidebarWrap>
      </SidebarNav1>
    </>
  );
}

export default Siderbar;
