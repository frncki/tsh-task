export const isInRange = (runtime, duration, range) => {
    return runtime <= (duration + range) && runtime >= (duration - range);
}

export const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
