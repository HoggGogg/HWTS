// function foobar(text) {
//     document.write(`<p>${text}</p>`);
// }
// foobar('qwerty');

let foobar = (text:string):void => {
    return document.write(`<p>${text}</p>`);
}

foobar('Hello');