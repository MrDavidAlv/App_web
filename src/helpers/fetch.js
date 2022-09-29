const baseUrl = 'https://jsonplaceholder.typicode.com';

//peticiones sin token
const fetchNoToken = (endpoint, method, data)  => { 
    const url = `${baseUrl}/${endpoint}`;
    console.log(url); 
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
    })
}

//peticiones con token
const fetchWhitToken = (endpoint, method)  => { 
    const url = `${baseUrl}/${endpoint}`; 
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-csrftoken': sessionStorage.getItem("token")
        }, 
    })
}

//peticiones con token y cuerpo
const fetchWhitTokenAndBody = (endpoint, method, data)  => { 
    const url = `${baseUrl}/${endpoint}`; 
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-csrftoken': sessionStorage.getItem("token")
        }, 
        body: JSON.stringify(data),
    })
}
 
export {
    fetchNoToken,
    fetchWhitToken,
    fetchWhitTokenAndBody
}