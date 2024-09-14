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

const opThrottle = () =>{

}

// let count = 0

// const button = document.querySelector("#button")

// const update = throttle(count => console.log(count), 1000, {leading: true})

// button.addEventListener("click", e =>{
//     count ++
//     update(count)
// })