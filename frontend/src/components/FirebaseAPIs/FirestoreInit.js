import {db} from "../firebase-config";
import {doc, setDoc} from "firebase/firestore"; 

export default class FirestoreInit{
    
     // *** this class must be called when new user register on the app
    constructor(userID){
        this.initComments(userID);
        this.initFinCourse(userID);
    }
    /*
    
    *** MUST READ ***
    ====================================================================================
    --- Example to access this file ---
        import FirestoreInit from '../FirebaseAPIs/FirestoreInit';

        new FirestoreInit(PASS_ID);
    ====================================================================================
    */

    // this method adds the user to the finished courses documnet with empty array...
    initFinCourse = async (userID) =>{
        const emptyArray = {
            courses: []
        }
        let document = "FinCourses";
        await setDoc(doc(db, document, userID), emptyArray);
    }

    // this method adds the user to the comments documnet with empty array...
    initComments = async (userID) =>{
        const emptyArray = {
            comms: []
        }
        let document = "Comments";
        await setDoc(doc(db, document, userID), emptyArray);
    }

}


