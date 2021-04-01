
// **Question: Comment your answer in your js file**: What does NaN stand for? 

// The global NaN property is a value representing Not-A-Number. The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it. It is rather rare to use NaN in a program.



// * Check if `"hello"` is NaN. 

console.log(typeof "hello");

// * Check if `3` is NaN.

console.log(typeof 3);
// * What is the type of NaN?

console.log(parseInt("blabla"));
console.log(Math.sqrt(-1));
console.log(5 ** NaN);
console.log(0 * Infinity);
console.log(undefined + undefined);
console.log("something" / 3);

// #### 2. Rounding 
// ```javascript
// console.log(0.1 * 0.2);
// ```
// The above in JavaScript will print: `0.020000000000000004`. 
// Use a method to make sure that only `0.02` is printed.

console.log((0.1 * 0.2).toFixed(2));

// #### 3. Infinity
// * Divide Infinity by `0`. 
// * Divide Infinity by Infinity. 
// * Divide `1` by `0`.

console.log(Infinity / 0);
console.log(Infinity / Infinity);
console.log(1 / 0);











8