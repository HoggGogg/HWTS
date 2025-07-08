type User = {
    id: number;
    name: string;
    email: string;
};

foobar<User[]>('https://jsonplaceholder.typicode.com/users')
    .then(users => {
        users.forEach(user => console.log(user.name));
    })
    .catch(error => {
        console.error('Error:', error);
    });

// @ts-ignore
async function foobar<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
}

