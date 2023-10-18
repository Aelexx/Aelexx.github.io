function createWindow(options){
    const awindow = document.createElement('div')
    awindow.classList.add('mwindow', 'nwindow')
    awindow.innerHTML('')
    document.body.appendChild(awindow)
    return awindow
}
