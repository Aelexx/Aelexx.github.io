function sendRequest(method, url){
    return new Promise((resolve, reject) => {
const requestURL = 'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.onload = () => {
    if(xhr.status >= 400){
        reject(xhr.response);
    }
    else{
        resolve(xhr.response);
    }  
}
xhr.onerror = () => {
    reject(xhr.response);
}
xhr.send();
    })
}

