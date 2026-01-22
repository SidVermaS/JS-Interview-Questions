function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            return resolve([])
        }
        const result = []
        let completed = 0
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((promiseResult) => {
                result[index] = promiseResult
                ++completed
                if (completed === promises.length) {
                    resolve(result)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    })
}
const demoFn = async (minNo, maxNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNo = parseInt(Math.random() * (maxNo - minNo) + minNo)
            resolve(randomNo)
        }, 0);
    })
}
const result = await promiseAll([demoFn(10, 20), demoFn(20, 30), demoFn(30, 40)])
console.log(result);
