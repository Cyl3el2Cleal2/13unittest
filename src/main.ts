import { merge } from "./function";

const a = [100, 50, 10];
const b = [2, 4, 8];
const c = [3, 6, 9];

const x = merge(a, b, c);
console.log(x); 