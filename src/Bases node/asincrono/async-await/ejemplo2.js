const showData = async () => {
    try{        
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
    
        return console.log(data);
    }
    catch(error){
        return console.error(error);
    }
}
showData()