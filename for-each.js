const forEach = (arr, fun, thisArg) => {
    for (let i = 0; i < arr.length; i++) {
        fun.call(thisArg, arr[i], i, arr);
    }
};