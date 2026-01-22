const arr = [100, 200, 300, 400];

Array.prototype.reducePolyfill = function (callbackFn, initialValue) {
    let result = initialValue;
    for (let index = 0; index < this.length; index++) {
        result = callbackFn(result, this[index], index, this);
    }
    return result;
}
const resultArr = arr.reducePolyfill(
    (acc, current, index, mainArr) => {
        acc.push(`${current} ${index} ${mainArr.length}`);
        return acc;
    }, []
);
console.log(resultArr);