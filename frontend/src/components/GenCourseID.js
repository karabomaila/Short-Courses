/*
    -> Generate unique ID for a course... 
*/
function createID(userID, courseName){
    const userIDSplit = userID.split("@");
    const id = userIDSplit[0];
    const sec = new Date().getTime();
    let courseID = "";

    const len = courseName.length;
    const courseNameSplit = courseName.split(" ");
    if(courseNameSplit.length > 1){
        courseID = id + courseNameSplit[0][0].toUpperCase() + courseNameSplit[1][0].toUpperCase() + sec;
    }else{
        courseID = id + courseNameSplit[0][0].toUpperCase() + courseNameSplit[0][len - 1].toUpperCase() + sec;
    }
    
    console.log(courseID);
    return courseID;
}

export default createID;