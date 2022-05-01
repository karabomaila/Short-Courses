
module.exports = class FilterCourses {

    constructor(list, id){
        for(let i = 0; i < list.length; i++){
            if(list[i].id === id){
                this.courses = list[i].courses;
                this.size = list[i].courses.length;
                break;
            }
        }

        this.coursesName = new Array();
        this.coursesID = new Array();
        this.Rearrange(this.size);
    }

    Rearrange(size){
        for(let i = 0; i < size; i++){
            let currCourse = this.courses[i];
            let temp = currCourse.split("+");
            this.coursesName.push(temp[0]);
            this.coursesID.push(temp[1]);
        }
    }

    getMyCourses(){
        return this.coursesName;
    }

    getCourseID(){
        return this.coursesID;
    }



}