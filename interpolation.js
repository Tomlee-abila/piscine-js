function interpolation({ step, start, end, callback, duration }) {
    const interval = duration / step;
    const delta = (end - start)/step;
    let d = start
    let distance = interval
    let count = 0

    const intervalId = setInterval(() => {
        count++
        const t = d;
        callback([t, distance]);
        d += delta        
        if (count == step) {
            clearInterval(intervalId);
        }
        distance += interval
    }, interval);
}

interpolation({step: 10, start: 2, end: 6, duration: 4, callback: ([x, y]) => console.log(`[${x.toFixed(2)}, ${y.toFixed(2)}]`)});