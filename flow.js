const flow = (funcs) => {
    return (...args) => {
        if (args.length >1){
            args =[funcs[0](...args)]
        }
        return funcs.reduce((acc, func) => func(acc), args[0]);
    };
};
