
function NameTag(name){
    let char = '';
    let arrName = name.split(" ");
    if(arrName.length > 1){
        for(let i = 0; i < arrName.length; i++){
            char = char + arrName[i][0];
        }
        return char;
    }else{
        let size = name.length;
        return name[0] + name[size - 1];
    }

}

export default NameTag;