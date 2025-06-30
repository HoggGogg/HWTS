function arrayMinValue(numbers:number[]):number {
    let min:number = numbers[0];
    for (let i:number =1; i<numbers.length; i++) {
        let number:number = numbers[i];
        if (number < min){
            min = number
        }
    }
    return min;
}

console.log(arrayMinValue([99, 11, -123, 22, 33, 44, 55]));