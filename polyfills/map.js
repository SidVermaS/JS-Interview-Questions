const arr = [100, 200, 300, 400];

Array.prototype.mapPolyfill = function (callbackFn) {
  const finalArr = [];
  for (let index = 0; index < this.length; index++) {
    finalArr.push(callbackFn(this[index], index, this));
  }
  return finalArr;
};

const resultArr = arr.mapPolyfill(
  (element, index, mainArr) => `${element} ${index} ${mainArr.length}`
);
console.log(resultArr);
