function interpolation({ step, start, end, callback, duration }) {
    const interval = duration / step;
    const delta = end - start;
    let currentStep = 0;

    const intervalId = setInterval(() => {
        const t = currentStep / (step - 1);
        const point = start + t * delta;

        callback([t, point]);

        currentStep++;

        if (currentStep >= step) {
            clearInterval(intervalId);
        }
    }, interval);
}