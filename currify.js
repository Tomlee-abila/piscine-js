const currify = (func) => {
    // Get the number of arguments the original function expects
    const arity = func.length;

    // Recursive function to handle currying
    const curried = (...args) => {
        if (args.length >= arity) {
            // If enough arguments are provided, call the original function
            return func(...args);
        } else {
            // Otherwise, return a new function that takes the next argument
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };

    return curried;
};
