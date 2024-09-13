const debounce = (func, delay = 1000) =>{
    let timeout

    return (...args)=>{
        clearTimeout(timeout)

        timeout = setTimeout(() =>{
            func(...args)
        }, delay)
    }
}

const opDebounce = (func, delay = 1000, option = {leading: false, trailing: true}) =>{
    let timeout

    return (...args)=>{
        if (option.leading) func(...args)

        if (option.trailing){
            clearTimeout(timeout)

            timeout = setTimeout(() =>{
                func(...args)
            }, delay)
        }
    }
        
}

