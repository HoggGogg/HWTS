type Author = {name: string, age: number};
type Book1 = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author[]
}

let book1: Book1 = {
    title: 'a',
    pageCount: 120,
    genre: 'comedy',
    authors: [
        {name: 'David', age : 23}
    ]
}