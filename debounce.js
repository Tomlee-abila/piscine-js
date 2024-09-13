const debounce = (func, delay = 1000) =>{
    let timeout

    return (...args)=>{
        clearTimeout(timeout)

        timeout = setTimeout(() =>{
            func(...args)
        }, delay)
    }
}

const opDebounce = (func, delay = 1000, option = {leading: false}) =>{
    let timeout
    let invokeLeading = false

    return (...args)=>{        
        if (option.leading && !invokeLeading){
            func(...args)
            invokeLeading = true
        }
        if (timeout) clearTimeout(timeout)                          

        timeout = setTimeout(() =>{
            func(...args)
            timeout = undefined
        }, delay)
    }
        
}

// let count = 0

// const button = document.querySelector("#button")

// const update = opDebounce(count => console.log(count), 1000, {leading: true})

// button.addEventListener("click", e =>{
//     count ++
//     update(count)
// })