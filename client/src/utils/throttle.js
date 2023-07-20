export function throttle(fn, delay) {
    let throttling = false;
    let savedArgs = null;
    let savedThis = null;
    return function wrapper(...args) {
        if (throttling) {
            savedArgs = args;
            savedThis = this;
        } else {
            throttling = true;
            fn.apply(this, args);
            setTimeout(() => {
                throttling = false;
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = null;
                    savedThis = null;
                }
            }, delay);
        }
    };
}
