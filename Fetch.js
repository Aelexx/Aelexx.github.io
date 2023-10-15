const requestURL = 'https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/p409874903/reports/reportinghub?params=_u..nav%3Dmaui'

function sendRequest(method, url, body = null){
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
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