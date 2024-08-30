function RNA(input){
    let result = "";
    for (let i = 0; i < input.length; i++){
        if (input[i] === input[i].toLowerCase() || input[i] === " "){
            return "Invalid";
        }
        switch(input[i]){
            case "G":
                result += "C";
                break;
            case  "C":
                result += "G";
                break;
            case "T" :
                result += "A";
                break;
            case "A" :
                result += "U";
                break;
            default:
                return
        }
    }
    return result
}

function DNA(input){
    let result = "";
    for (let i = 0; i < input.length; i++){
        if (input[i] === input[i].toLowerCase()){
            return "Invalid";
        }
        switch(input[i]){
            case "C":
                result += "G";
                break;
            case  "G":
                result += "C";
                break;
            case "A" :
                result += "T";
                break;
            case "U" :
                result += "A";
                break;
            default:
                return
        }
    }
    return result
}
// console.log(RNA("ATCG"))
// console.log(DNA("UAGC"))
console.log(RNA(DNA('AUCG')))