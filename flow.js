const flow = (...funcs) => {
    return (...args) => {
        return funcs.reduce((acc, func) => {
            if (Array.isArray(acc)) {
                return func(...acc);
            }
            return func(acc);
        }, args);
    };
};
