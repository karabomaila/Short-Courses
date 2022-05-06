
export default class FilterCourses {

    constructor(){
       
    }

    Filter(list, id){
        this.size = 0;
        for(let i = 0; i < list.length; i++){
            if(list[i].id === id){
                this.courses = list[i].courses;
                this.size = list[i].courses.length;
                break;
            }
        }

        this.myCourses = new Array();
        this.Rearrange(this.size);
    }

    Rearrange(size){
        for(let i = 0; i < size; i++){
            let currCourse = this.courses[i];
            let temp = currCourse.split("+");

            const curr = {
                courseName: temp[0],
                courseID: temp[1]
            }

            this.myCourses.push(curr);
        }
    }

    getMyCourses(){
        return this.myCourses;
    }
}