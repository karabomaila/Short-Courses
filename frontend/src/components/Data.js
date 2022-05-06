import React from "react";
import { FaIcons, AiIcons } from "react-icons/fa";
import { BiChevronRightCircle, BiSend } from "react-icons/bi";
import { FiBookOpen, FiBook } from "react-icons/fi";
import { MdLibraryBooks } from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";
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

const fetchData = async () => {
  const slidesCollectionRef = collection(db, "slides");

  const q = query(slidesCollectionRef, where("courseID", "==", "23757367CGV6"))
  const data = await getDocs(q);

  let tmp = JSON.parse(JSON.stringify(data.docs[0]))._document.data.value
    .mapValue.fields;

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
      let slide = tmpSlide.mapValue.fields;
      let tmpBody = [];
      slide.body.arrayValue.values.map((bodyItem) => {
        let temp2 = bodyItem.mapValue.fields;
        let ft = {
          id: temp2.id.integerValue,
          type: temp2.type.stringValue,
        };
        if (parseInt(ft.id) <= 3) {
          ft = { ...ft, content: temp2.content.stringValue };
        } else {
          ft = { ...ft, url: temp2.url.stringValue };
        }
        tmpBody.push(ft);
      });
      let tmpSlidee = {
        id: slide.id.integerValue,
        chapter: slide.chapter.integerValue,
        name: slide.name.stringValue,
        duration: slide.duration.integerValue,
        body: tmpBody,
      };
      tmpSlides.push(tmpSlidee);
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
  console.log();
  let tmpData = [];
  finalCourse.content.map((chapter, index) => {
    let slides = [];
    chapter.slide.map((slide, index) => {
      slides.push({ title: slide.name, icon: <MdLibraryBooks /> });
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

  return tmpData;
};

export const Data = fetchData();


