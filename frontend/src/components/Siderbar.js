import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Comments from "./Comments";
import { Data } from "./Data";
import Submenu from "./Submenu";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FcSms } from "react-icons/fc";
import { AiFillSafetyCertificate } from "react-icons/ai";

const temp_slides = [
  {
    id: 1,
    type: "title",
    content: "Title1",
  },
  {
    id: 2,
    type: "subtitle",
    content: "subTitle1",
  },
  {
    id: 3,
    type: "subtitle",
    content: "subTitle2",
  },
]

const textareaStyle = {
  resize: "both",
  width: "100%",
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
  return (
    <>
      <Nav>
        <NavIcon>
          <FaIcons.FaBars onClick={() => showSidebar()} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon>
            <AiIcons.AiOutlineClose onClick={() => showSidebar()} />
          </NavIcon>
          {Data.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      <Content
        className={`${
          sidebar ? "w-50 mx-60 " : "w-20 mx-60 "
        } duration-300  bg-WitsBlue text-base `}
      >
        <div
          className={`${
            sidebar ? "w-100" : "w-100"
          } duration-300 p-2  bg-WitsBlue text-base  justify-content: center`}
        >
          {temp_slides.map((slide, index) =>{
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
                    fontSize: "25px",
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
                    fontSize: "25px",
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
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                  value={slide.content}
                ></p>
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

          <Comments />
        </SidebarWrap>
      </SidebarNav1>
    </>
  );
}

export default Siderbar;
