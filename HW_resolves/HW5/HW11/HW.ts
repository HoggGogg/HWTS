// function sum(arr) {
//     let basket = 0;
//     for (const item of arr) {
//         basket = basket + item;
//     }
//     return basket;
// }
//
// console.log(sum([1, 2, 10]));

let sum = (arr:number[]):number => {
    let basket:number = 0;
    for (const item of arr) {
        basket = basket + item;
    }
    return basket;
}

console.log(sum([1, 23, 10]));