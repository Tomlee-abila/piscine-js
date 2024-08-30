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
        }
    }
    return result
}

function DNA(input){
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
            case "U" :
                result += "A";
                break;
        }
    }
    return result
}

console.log(RNA("ATCG"))