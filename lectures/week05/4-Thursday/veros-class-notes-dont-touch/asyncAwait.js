

//async  

//await

const myFunction = async () => {
    
    let result = await fetch(`https://jsonplaceholder.typicode.com/todos`)

    console.log('waiting for data');
    let data = await result.json()

    // synch code
    console.log(data);

}
