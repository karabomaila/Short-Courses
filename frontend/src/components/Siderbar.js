import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Comments from "./Comments";
import fetchSlides from "./FetchSlides";
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
import { useParams, useLocation } from "react-router-dom";
import Notes from "./Notes";

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

const f = {
  id: {
    integerValue: "0",
  },
  name: {
    stringValue: "Richard",
  },
  content: {
    arrayValue: {
      values: [
        {
          mapValue: {
            fields: {
              content: {
                stringValue: "Richard 101",
              },
              _id: {
                integerValue: "1653247288336",
              },
              fontSize: {
                integerValue: "20",
              },
              type: {
                stringValue: "text",
              },
              height: {
                integerValue: "54",
              },
              width: {
                integerValue: "421",
              },
              position: {
                mapValue: {
                  fields: {
                    top: {
                      integerValue: "0",
                    },
                    left: {
                      doubleValue: 294.6000099182129,
                    },
                  },
                },
              },
            },
          },
        },
        {
          mapValue: {
            fields: {
              url: {
                stringValue: "https://www.youtube.com/embed/1xPu_a3WRSQ",
              },
              type: {
                stringValue: "video",
              },
              height: {
                integerValue: "200",
              },
              position: {
                mapValue: {
                  fields: {
                    left: {
                      doubleValue: 96.60000991821289,
                    },
                    top: {
                      integerValue: "135",
                    },
                  },
                },
              },
              width: {
                integerValue: "300",
              },
              _id: {
                integerValue: "1653247581269",
              },
            },
          },
        },
        {
          mapValue: {
            fields: {
              height: {
                integerValue: "81",
              },
              _id: {
                integerValue: "1653247606204",
              },
              position: {
                mapValue: {
                  fields: {
                    top: {
                      integerValue: "328",
                    },
                    left: {
                      doubleValue: 102.59999465942383,
                    },
                  },
                },
              },
              type: {
                stringValue: "text",
              },
              content: {
                stringValue: "This Is Richard Here Introducing Us To COMS",
              },
              fontSize: {
                integerValue: "20",
              },
              width: {
                integerValue: "299",
              },
            },
          },
        },
        {
          mapValue: {
            fields: {
              height: {
                integerValue: "200",
              },
              position: {
                mapValue: {
                  fields: {
                    top: {
                      integerValue: "140",
                    },
                    left: {
                      doubleValue: 539.6000099182129,
                    },
                  },
                },
              },
              width: {
                integerValue: "300",
              },
              url: {
                stringValue:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVf4wEGNcp2DO72fI_xKMijDVjClNzLm2zA&usqp=CAU",
              },
              type: {
                stringValue: "image",
              },
              _id: {
                integerValue: "1653247870535",
              },
            },
          },
        },
        {
          mapValue: {
            fields: {
              type: {
                stringValue: "text",
              },
              width: {
                integerValue: "291",
              },
              content: {
                stringValue: "Here Is A Picture Of Richard",
              },
              position: {
                mapValue: {
                  fields: {
                    top: {
                      doubleValue: 333.0000305175781,
                    },
                    left: {
                      doubleValue: 556.6000099182129,
                    },
                  },
                },
              },
              _id: {
                integerValue: "1653247888735",
              },
              fontSize: {
                integerValue: "20",
              },
              height: {
                integerValue: "59",
              },
            },
          },
        },
      ],
    },
  },
  chapter: {
    integerValue: "0",
  },
};

function Siderbar() {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [data, setData] = useState([]);
  const slidesCollectionRef = collection(db, "slides");
  const [currSlide, setCurrSlide] = useState([]);
  const { state } = useLocation();
  console.log(state.user[0].username.split("@")[0]);
  console.log(state.crs_id);

  useEffect(() => {
    // var crs_id = courseID
    const lindo = async () => {
      const q = query(
        slidesCollectionRef,
        where("courseID", "==", state.crs_id)
      );
      const data = await getDocs(q);
      // console.log(data)
      let tmp = data.docs[0]._document.data.value.mapValue.fields;
      let tmpChaps = [];
      tmp.content.arrayValue.values.map((item, index) => {
        let tmp2 = item.mapValue.fields;
        let outcomes = [];
        tmp2.outcomes.arrayValue.values.map((item2) => {
          let outcome = item2.stringValue;
          outcomes.push(outcome);
        });
        let tmpSlides = [];
        tmp2.slides.arrayValue.values.map((tmpSlide) => {
          // let outcome = item2.stringValue
          let slide = tmpSlide.mapValue.fields;
          tmpSlides.push(fetchSlides(slide));
        });
        let tmpChap = {
          id: tmp2.id.integerValue,
          name: tmp2.name.stringValue,
          slides: tmpSlides,
          outcomes: outcomes,
        };
        tmpChaps.push(tmpChap);
      });
      // console.log(tmp)
      let tmpImages = [];
      tmp.images.arrayValue.values.map((curr) => {
        tmpImages.push({
          id: curr.mapValue.fields.id.integerValue,
          url: curr.mapValue.fields.url.stringValue,
        });
      });

      let finalCourse = {
        name: tmp.name.stringValue,
        courseID: tmp.courseID.stringValue,
        description: tmp.description.stringValue,
        content: tmpChaps,
        images: tmpImages,
      };
      console.log(finalCourse.content[0].slides[0].slides)
      let tmpData = [];
      setCurrSlide(finalCourse.content[0].slides[0].slides);

      finalCourse.content.map((chapter, index) => {
        // console.log(chapter)
        let slides = [];
        chapter.slides.map((slide, index) => {
          // console.log(slide)
          slides.push({
            title: slide.name,
            icon: <MdLibraryBooks />,
            body: slide.body,
          });
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
      console.log("hi");
      setData(tmpData);
    };

    lindo();
  }, [setCurrSlide]);

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
            <AiIcons.AiOutlineClose
              data-testid="hidebtn"
              onClick={() => showSidebar()}
            />
          </NavIcon>
          {data.map((item, index) => {
            // setCurrSlide(item.slides)
            return (
              <Submenu item={item} key={index} setCurrSlide={setCurrSlide} />
            );
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
          {currSlide.map((slide, index) => {
            if (slide.type === "text") {
              console.log(slide);
              return (
                <h1
                  autoFocus
                  key={index}
                  id={index.toString() + "1" + slide.type}
                  style={{
                    fontSize:slide.fontSize,
                    maxWidth: slide.width,
                    maxHeight: slide.height,
                    position:"absolute",
                    top: slide.top,
                    left: slide.left
                  }}
                >
                  {slide.content}
                </h1>
              );
            }  else if (slide.type === "image") {
              return (
                <div style={{overflow: "auto" }}>
                  <img
                    style={{
                      maxWidth: slide.width,
                      maxHeight: slide.height,
                      position:"absolute",
                      top: slide.top,
                      left: slide.left
                    }}
                    key={index}
                    id={index.toString() + "1" + slide.type}
                    src={slide.url}
                  ></img>
                </div>
              );
            } else if (slide.type === "video") {
              return (
                <div>
                  <iframe
                    key={index}
                    id={index.toString() + "1" + slide.type}
                    style={{
                      maxWidth: slide.width,
                      maxHeight: slide.height,
                      top: slide.top,
                      left: slide.left
                    }}
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

          {/* <Notes/> */}
        </SidebarWrap>
      </SidebarNav1>
    </>
  );
}

export default Siderbar;
