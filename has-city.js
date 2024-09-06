const hasCity = (country, arrStr) =>{
    return (city) =>{
        for (let i=0;i<arrStr.length;i++){
            if (city == arr[i]){
                return city+" is a city from "+country
            }
        }
        return city+" is not a city from "+country
    }
}