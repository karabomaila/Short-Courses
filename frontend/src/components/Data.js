import React from "react";
import { FaIcons, AiIcons } from "react-icons/fa";
import { BiChevronRightCircle, BiSend } from "react-icons/bi";
import { FiBookOpen, FiBook } from "react-icons/fi";
import { MdLibraryBooks } from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";

export const Data = [
  {
    chapter: "Chapter 1",
    icon: <FiBookOpen />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    slides: [
      { title: "slide1", icon: <MdLibraryBooks /> },
      { title: "slide2", icon: <MdLibraryBooks /> },
      { title: "slide3", icon: <MdLibraryBooks /> },
      { title: "slide4", icon: <MdLibraryBooks /> },
      { title: "slide5", icon: <MdLibraryBooks /> },
    ],
    open: false,
  },
  {
    chapter: "Chapter 2",
    icon: <FiBookOpen />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    slides: [
      { title: "slide1", icon: <MdLibraryBooks /> },
      { title: "slide2", icon: <MdLibraryBooks /> },
      { title: "slide3", icon: <MdLibraryBooks /> },
      { title: "slide4", icon: <MdLibraryBooks /> },
      { title: "slide5", icon: <MdLibraryBooks /> },
    ],
    open: false,
  },
  {
    chapter: "Chapter 3",
    icon: <FiBookOpen />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    slides: [
      { title: "slide1", icon: <MdLibraryBooks /> },
      { title: "slide2", icon: <MdLibraryBooks /> },
      { title: "slide3", icon: <MdLibraryBooks /> },
      { title: "slide4", icon: <MdLibraryBooks /> },
      { title: "slide5", icon: <MdLibraryBooks /> },
    ],
    open: false,
  },
];
