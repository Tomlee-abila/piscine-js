const mult2 = (a) => {
    return (b) =>{
        return a*b
    }
}

const add3 = (a) =>{
    return (b) =>{
        return (c) => {
            return a+b+c
        }
    }
}

const sub4 =(a) =>{
    return (b) =>{
        return (c) => {
            return (d) => {
                return a-b-c-d
            }
        }
    }
}