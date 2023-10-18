function createWindow(options){
    const newDiv = document.createElement('div')
    const newContent = document.textContent('Mouse and rat Rato e Gato')
    newDiv.appendChild(newContent)

    const currentH1 = document.getElementById('id-dyn')
    document.body.insertBefore(newDiv, currentH1)

}

