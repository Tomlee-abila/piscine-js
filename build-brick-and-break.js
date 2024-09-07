export const build = (amount) => {
    let count = 0
    let interval = setInterval(()=>{
        count++
        if (count == amount){
            clearInterval(interval)
        }        
        let brick = document.createElement("div")
        brick.id = `brick-${count}`
        if ((count+1)%3 == 0){
            brick.dataset.faundation = true
        }
        document.body.append(brick) 
    },100)
}
export const repair = (...id) => {
    for (let i = 0; i<id.length; i++){
        let brick = document.getElementById(`${id[i]}`)
        console.log(`${id[i]}`,brick)
        if (brick){
            if(brick.dataset.faundation == "true"){
                console.log("yes")
                brick.dataset.repaired = "in progress"
            }else{
                brick.dataset.repaired = true
            }
        }
    }    
}

export const destroy = () => {
    let bricks = document.getElementsByTagName("div")
    console.log(bricks[bricks.length-1])
    bricks[bricks.length-1].remove()
}