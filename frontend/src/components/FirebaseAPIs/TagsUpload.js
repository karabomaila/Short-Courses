import {db} from "../firebase-config";
import {doc, setDoc, collection, updateDoc, arrayUnion,} from "firebase/firestore"; 

export default class TagUpload{
    constructor(dbTags, userTags, courseID){
        for(let i = 0; i < userTags.length; i++){
            const currTag = userTags[i].toLowerCase();
            this.AddTag(dbTags, currTag, courseID);
        }
    }
    
    

    AddTag(dbTags, currTag, courseID){
        let isFound = false;

        for(let i = 0; i < dbTags.length; i++){
            const currDbTag = dbTags[i];
            if(currTag === currDbTag.id){
                isFound = true;
                break;
            }
        }

        if(isFound){
            this.AppendTag(currTag, courseID);
        }else{
            this.AddNewTag(currTag, courseID);
        }
    }

    AppendTag = async (oldTag, id)=>{
        let document = "CourseTags";
        const REF = doc(db, document, oldTag);
        await updateDoc(REF, {courseID: arrayUnion(id)});
    }


    AddNewTag = async (newTag, id)=>{
        const data ={
            courseID: [id]
        }
        let document = "CourseTags";
        await setDoc(doc(db, document, newTag), data);
    }
}
