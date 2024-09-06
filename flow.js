const flow = (...funcs) => {
    return (...args) => {
        return funcs.reduce((acc, func) => {
            if (typeof func !== 'function') {
                throw new TypeError('All arguments must be functions');
            }
            return func(acc);
        }, args);
    };
};
