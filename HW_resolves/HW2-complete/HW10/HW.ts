let a:number | null = +prompt('Enter first number 1-9');
let b:number | null = +prompt('Enter second number 1-9');

if (a>b){
    console.log(a);
}else if (b>a){
    console.log(b);
}else  if (a===b){
    console.log('====');
}