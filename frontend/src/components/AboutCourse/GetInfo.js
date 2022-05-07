
export default class GetInfo{
    constructor(list, courseID){
        for(let i = 0; i < list.length; i++){
            if(list[i].courseID === courseID){
                this.description = list[i].description;
                this.content = list[i].content;
                break;
            }
        }
    }

    PullData(){
        const payload = {
            description: this.description,
            outcomes: this.GetOutcomes(),
            duration: this.GetDuration()
        }
        return payload;
    }

    GetDuration(){
        let duration = 0;
        for(let i = 0; i < this.content.length; i++){
            let slides = this.content[i].slides;
            for(let k = 0; k < slides.length; k++){
                let currDuration = slides[k].duration;
                console.log(currDuration);
                if(currDuration > 0){
                    duration += currDuration;
                }
            }
           
        }

        return duration;
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