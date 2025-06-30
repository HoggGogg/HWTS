function exchange(sumUAH: number, currencyValues: { currency: string, value: number }[], exchangeCurrency: string):number {
    // @ts-ignore
    let itemObj: any = currencyValues.find(item => item.currency === exchangeCurrency);
    return sumUAH / itemObj.value;
}

let result:number = exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');
console.log(result);