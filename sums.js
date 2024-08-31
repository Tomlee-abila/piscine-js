const sums = (target) => {
    let arr = []

    function recursive(current, num, add) {
        add += 1
        if (num == 0 || add === target) {
            return
        }        
        let result = []
        let or = add
        let sum = 0
        for (let i = 1; i <= num; i ++) {
            sum += add
            while (sum > target) {
                sum -= add
                add--
                sum += add
            }
            if (add == 0){
                i = num +1
            }else{
                result.push(add)
            }
            

        }
        current.push(result)
        recursive(current, num - 1, or)
    }
    recursive(arr, target, 0)
    return arr
}

console.log(sums(10))
// [[1, 1, 1, 1, 1, 1, 1, 1, 1],[2, 2, 2, 2],[3, 3, 3],[4, 4],[5],[6],[7],[8],[9],[]]