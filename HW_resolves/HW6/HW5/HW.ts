function stringToarray(str:string):string[] {
    if (str){
        const split:string[] = str.split(' ');
        return split;
    }
    return [''];
}
console.log(stringToarray('Ревуть воли як ясла повні'));