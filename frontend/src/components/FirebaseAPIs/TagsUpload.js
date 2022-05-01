import {db} from "../firebase-config";
import {useState, useEffect} from 'react';
import {doc, setDoc, collection, getDocs} from "firebase/firestore"; 

export default class TagUpload{
    constructor(dbTags, userTags, courseID){
        for(let i = 0; i < userTags.length; i++){
            const currTag = userTags[i];
            this.AddTag(dbTags, currTag, courseID);
        }
    }

    AddTag(dbTags, currTag, courseID){
        let isFound = false;

        console.log("ID: " + courseID);
        for(let i = 0; i < dbTags.length; i++){
            const currDbTag = dbTags[i];
            if(currTag === currDbTag.id){
                isFound = true;
                console.log("Add is on database " + currDbTag.id);
                break;
            }
        }

        if(isFound){
            console.log("Found append");
        }else{
            console.log("Not found create new");
        }
    }





   

   

}