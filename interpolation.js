function interpolation({ step, start, end, callback, duration }) {
    const interval = duration / step;
    const delta = (end - start)/step;
    let currentStep = 0;
    let d = start

    const intervalId = setInterval(() => {
        const t = d;
        start += interval
        

        callback([t, start]);
        d += delta
        currentStep++;
        

        if (start >= duration) {
            clearInterval(intervalId);
        }
    }, interval);
}

// interpolation({
//     step: 5,
//     start: 0,
//     end: 1,
//     callback: ([x, y]) => console.log(`[${x.toFixed(2)}, ${y.toFixed(2)}]`),
//     duration: 10
// });