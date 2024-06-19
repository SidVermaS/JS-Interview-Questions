const arr = [100, 200, 300, 400];

Array.prototype.filterPolyfill = function (callbackFn) {
  const finalArray = [];

  for (let index = 0; index < this.length; index++) {
    if (callbackFn(this[index], index, this)) {
      finalArray.push(this[index])
    }
  }
  return finalArray;
};

const resultArr = arr.filterPolyfill(
  (element, _index, _mainArr) => element < 300
);
console.log(resultArr);
