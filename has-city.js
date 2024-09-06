const hasCity = (country, arrStr) =>{
    return (city) =>{
        for (let i=0;i<arrStr.length;i++){
            if (city == arrStr[i]){
                return city+" is a city from "+country
            }
        }
        return city+" is not a city from "+country
    }
}