function interpolation({ step, start, end, callback, duration }) {
    const interval = duration / step;
    const delta = (end - start)/step;
    let d = start
    let distance = interval

    const intervalId = setInterval(() => {
        const t = d;
        callback([t, distance]);
        d += delta

        if (distance == duration) {
            clearInterval(intervalId);
        }
        distance += interval
    }, interval);
}

interpolation({step: 3, start: 1, end: 2, duration: 10, callback: ([x, y]) => console.log(`[${x.toFixed(2)}, ${y.toFixed(2)}]`)});