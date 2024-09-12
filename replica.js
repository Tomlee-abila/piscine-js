const is = {
    arr: Array.isArray,
    obj: (n) => n && typeof n === 'object' && !(n instanceof RegExp),
    fun: (n) => typeof n === 'function'
};

function replica(target, ...sources) {
    // Helper function to deeply copy or merge objects
    const deepAssign = (target, source) => {
        Object.keys(source).forEach(key => {
            const srcValue = source[key];
            const tgtValue = target[key];

            if (is.obj(srcValue)) {
                if (!is.obj(tgtValue)) {
                    target[key] = {};
                }
                deepAssign(target[key], srcValue);
            } else if (is.arr(srcValue)) {
                target[key] = srcValue.map(item => is.obj(item) || is.arr(item) ? replica({}, item) : item);
            } else if (srcValue instanceof RegExp) {
                target[key] = new RegExp(srcValue);
            } else {
                target[key] = srcValue;
            }
        });
    };

    sources.forEach(source => deepAssign(target, source));
    return target;
}