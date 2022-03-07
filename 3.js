function sum(a){
  return function sum1(b){
    return a+b
  }
}
const sum = a => b => a+b