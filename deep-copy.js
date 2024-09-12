const deepCopy = (obj) =>{
    if (obj.constructor == Array){
        return [...obj]
    }else{
        return {...obj}
    }
}