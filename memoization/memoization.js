const factorial=(num)=>{
  if(num===0) {
    return 1
  }
  let result=1
  for(let i=1;i<=num;i++) {
    result*=i
  }
  return result
}

const memoize=(callbackFn)=>{
  const cache={}
  return (...args)=>{
    if(args.toString() in cache)  {
      return cache[args.toString()]
    }
    cache[args.toString()]=callbackFn(...args)
    return cache[args.toString()]
  }
}

console.time("no_memo")
console.log(factorial(150));
console.timeEnd("no_memo")

const memoizeFactorial=memoize(factorial)
console.time("memo")
console.log(memoizeFactorial(150))
console.timeEnd("memo")