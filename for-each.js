const forEach = (arr, fun) => {
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        fun(arr[i])
    }
}