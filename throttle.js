const throttle = (func, delay = 1000) => {
    let shouldWait = false
    return (...args) =>{
        if (shouldWait) return

        func(...args)
        shouldWait = true
        setTimeout(()=>{
            shouldWait = false
        }, delay)
    }
}

const opThrottle = (func, delay = 1000, option = {leading: false, trailing: false}) =>{
    let shouldWait = false
    if (option.trailing == undefined && option.leading == true) option.trailing = true
    if (option.leading == undefined) option.leading = false
    return (...args) =>{
        if (shouldWait) return

        if (option.leading) func(...args), option.leading = false

        shouldWait = true

        setTimeout(()=>{
            shouldWait = false
           if (option.trailing) func(...args)
        }, delay)
        
    }
}

// let count = 0

// const button = document.querySelector("#button")

// const update = opThrottle(() => console.log(count), 1000)

// button.addEventListener("click", e =>{
//     count ++
//     update(count)
// })