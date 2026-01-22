const arr = [100, 200, 300, 400];

Array.prototype.forEachPolyfill = function (callbackFn) {
  for (let index = 0; index < this.length; index++) {
    callbackFn(this[index], index, this);
  }
};

arr.forEachPolyfill((element, index, mainArr) => {
  console.log(element, index, mainArr.length);
});
