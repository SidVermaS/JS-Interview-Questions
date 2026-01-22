const debounce=(callback, delay)=>{
    let timeout;
    return (...args)=>{
        if(timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>{
            callback(...args)
        }, delay)
    }
}
const search = (query) =>{
     console.log(`Searching for: ${query}`);
}
const debouncedSearch=debounce(search, 500)
debouncedSearch('hello 1')
debouncedSearch('hello 2')
debouncedSearch('hello 3')
debouncedSearch('hello 4')