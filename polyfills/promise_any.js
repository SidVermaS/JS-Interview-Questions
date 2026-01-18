function promiseAny(promises)   {
    return new Promise((resolve, reject)=>{
        if(!promises.length) {
            reject(new AggregateError([], 'All promises were rejected'))
        }
        const errors = []
        let failed = 0
        promises.forEach((promise, index) =>    {
            Promise.resolve(promise).then((promiseResult)=>{
                resolve(promiseResult)
            }).catch((error)=>{
                ++failed
                errors[index] = error
                if(failed===promises.length)    {
                    reject(new AggregateError(errors, 'All promises were rejected'))
                }
            })
        })
    })
}
const demoFn = async (minNo, maxNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNo = parseInt(Math.random() * (maxNo - minNo) + minNo)
            resolve(randomNo)
            // reject(randomNo)
        }, 0);
    })
}
const result = await promiseAny([demoFn(10, 20), demoFn(20, 30), demoFn(30, 40)])
console.log(result);
