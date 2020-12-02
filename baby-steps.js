let args = process.argv.slice(2);
let result = args.reduce(
  (acc, arg) => acc + +arg
, 0);
console.log(result);
