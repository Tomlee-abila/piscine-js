const flow = (...funcs) => {
    return (initialValue) => {
        return funcs.reduce((acc, func) => func(acc), initialValue);
    };
};
