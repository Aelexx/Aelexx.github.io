const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url){
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        //body: JSON.stringify(),
        headers: headers
    }
        ).then(response => {
            if(response.ok){
            return response.json()
            }
            return response.json().then(error => {
                const er = new Error('Something wrong')
                er.data = error
                throw er
            })
        
    })
}

// sendRequest('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

const body = {
    name:'Alex',
    age: 24
}

sendRequest('POST', requestURL, body)
.then(data => console.log(data))
.catch(err => console.log(err))