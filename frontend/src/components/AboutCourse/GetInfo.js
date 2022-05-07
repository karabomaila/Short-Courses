
export default class GetInfo{
    constructor(list, courseID){
        for(let i = 0; i < list.length; i++){
            if(list[i].courseID === courseID){
                this.description = list[i].description;
                this.duration = list[i].duration;
                this.content = list[i].content;
                break;
            }
        }
    }

    PullData(){
        const payload = {
            description: this.description,
            duration: this.duration,
            outcomes: this.GetOutcomes()
        }

        return payload;
    }

    GetOutcomes(){
        let outcomes = new Array();
        for(let i = 0; i < this.content.length; i++){
            let currOutcome = this.content[i].outcomes;
            for(let j = 0; j < currOutcome.length; j++){
                outcomes.push(currOutcome[j]);
            }
        }

        return outcomes;
    }



}