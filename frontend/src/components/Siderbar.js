import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons  from 'react-icons/ai'
import Comments from './Comments'
import {Data} from './Data'
import Submenu from './Submenu'
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FcSms } from "react-icons/fc";
import { AiFillSafetyCertificate } from "react-icons/ai";


const Nav = styled.div`
background:#003B5C;
height:80px;

display:flex;
justify-content: flex-start;
align-items: center;
`;
const NavIcon=styled.div`
margin-left:2rem;
font-size:2rem;
height:80px;
display:flex;
justify-content: flex-start;
align-items:center
`;
const SidebarNav=styled.div`
background:#003B5C;
width:250px;
height:100vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
left: ${({sidebar})=>(sidebar ? '0' : '-100%')};
transition:350ms;
z-index:10`;
const SidebarWrap=styled.div`width:100%;`;

const SidebarNav1=styled.div`
background:#003B5C;
width:310px;
height:100vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
right: 0;
transition:350ms;
z-index:10`;

const Content=styled.div`
height:100vh;
display:flex;

justify-content:center;
position:relative;
top:1;
left:0;
transition:350ms;
z-index:10`;

function Siderbar() {
    const [sidebar,setSidebar]=useState(false)
    const [open ,setOpen]=useState(true)
    const showSidebar=()=>setSidebar(!sidebar)
  return (
    <>
    <Nav>
      <NavIcon>
          <FaIcons.FaBars onClick={()=>showSidebar()}/>
      </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon>
              <AiIcons.AiOutlineClose  onClick={()=>showSidebar()}/>
          </NavIcon>
          {Data.map((item,index)=>{
              return <Submenu item={item} key={index}/>
          })}
        </SidebarWrap>
    </SidebarNav>
     <Content className={`${sidebar ? "w-50 mx-60 ":"w-20 mx-60 "} duration-300  bg-WitsBlue text-base `}>
     <div className={`${sidebar ? "w-100":"w-100"} duration-300 p-2  bg-WitsBlue text-base  justify-content: center`}>
       <h1>Content</h1>
       <h3>What is machine learning?
       Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.
       
       Recommendation engines are a common use case for machine learning. Other popular uses include fraud detection, spam filtering, malware threat detection, business process automation (BPA) and Predictive maintenance.
       
       Why is machine learning important?
       Machine learning is important because it gives enterprises a view of trends in customer behavior and business operational patterns, as well as supports the development of new products. Many of today's leading companies, such as Facebook, Google and Uber, make machine learning a central part of their operations. Machine learning has become a significant competitive differentiator for many companies.
       
       What are the different types of machine learning?
       Classical machine learning is often categorized by how an algorithm learns to become more accurate in its predictions. There are four basic approaches:supervised learning, unsupervised learning, semi-supervised learning and reinforcement learning. The type of algorithm data scientists choose to use depends on what type of data they want to predict.</h3>
     </div>
     </Content>
    


    <SidebarNav1 sidebar={sidebar} >
        <SidebarWrap>
          <NavIcon>
              <FcSms  onClick={()=>setOpen(!open)}/>
          </NavIcon>
         
         <Comments/>
        </SidebarWrap>
    </SidebarNav1>
    </>
  )
}

export default Siderbar