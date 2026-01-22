const throttle = (callback, delay) => {
    let timeout = null
    return (...args) => {
        if (!timeout) {
            callback(...args)
            timeout = setTimeout(() => {
                timeout = null
            }, delay)
        }
    }
}
const search = (query) => {
    console.log(`Searching for: ${query}`);
}
const throttledSearch = throttle(search, 500)
throttledSearch('hello 1')
throttledSearch('hello 2')
throttledSearch('hello 3')
throttledSearch('hello 4')