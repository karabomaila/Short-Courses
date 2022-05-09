import React,{useState} from 'react';
import { NavItem } from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import axios from 'axios';


function Submenu({item,setCurrSlide}) {

    const setSlide = (item)=>{
        setCurrSlide(item.body)
        console.log(item.body)
    }
    

    const SidebarLink=styled.div`
    display:flex;
    color:#e1e9fc;
    justify-content;
    align-items:center;
    padding:20px;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;

    &:hover{
        background:#252831;
        border-left:4px solid #632ce4;
        cursor:pointer;
    }
    `;

    const SideBarLabel = styled.span`
    margin-left:16px;
    margin-right:30px;
    `;

    const Dropdown=styled.div`
    background:#414757;
    height:60px;
    padding-left:3rem;
    display:flex;
    align-items:center;
    text-decorations:none;
    color:#f5f5f5;
    font-size:18px;

    &:hover{
        background:#632ce4;
        cursor:pointer:
    }
    `;

    const [sub,setSub]=useState(false);
    const showSub=()=>setSub(!sub)
  return (
    <>
     <SidebarLink onClick={item.slides && showSub}>
        
             {item.icon}
             <SideBarLabel>{item.chapter}</SideBarLabel>
        <div>
            {item.slides && sub
             ? item.iconOpened
            :item.slides
            ? item.iconClosed
            :null}
        </div>
        </SidebarLink>
        {sub && item.slides.map((item,index)=>{
            return(
                <Dropdown key={index}>
                    {item.icon}
                    <SideBarLabel style={{cursor:'pointer'}} key={index} onClick={(e)=>{
                        e.preventDefault()
                        setSlide(item)
                    }}>{item.title}</SideBarLabel>
                </Dropdown>
            )
        })}
     
    </>
  )
}

export default Submenu