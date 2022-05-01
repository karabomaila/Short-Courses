
module.exports = class FilterComments{

    constructor(list, id){
        for(let i = 0; i < list.length; i++){
            if(list[i].id === id){
                this.comms = list[i].comms;
                this.size = list[i].comms.length;
                break;
            }
        }

        this.myComments = new Array();
        this.Filter(this.size);
    }

    Filter(size){
        for(let i = 0; i < size; i++){
            let comment = this.comms[i].split("+");
            let name = comment[0];
            let courseId = comment[1];
            let msg = comment[2];

            const curr = {
                courseName: name,
                courseID: courseId,
                content: msg
            }
            this.myComments.push(curr);
        }
    }

    getMyComments(){
        return this.myComments;
    }

}