let strValue: string | null = prompt('enter number 1 0 -3');
if (strValue !== null) {
    let numValue = +strValue;
    if (numValue !== 0) {
        console.log('virno');
    } else {
        console.log('ne virno');
    }
}
