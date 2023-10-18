function _createModal (options){
    const defwidth = 550
    const modal = document.createElement('div');
    modal.classList.add('amodal');
    modal.insertAdjacentHTML('afterbegin', `   

    <div class="modal-overlay" data-close = true>
        <div class="modal-window" style="width: ${options.width || defwidth}">

            <div class="modal-header">
            <span class="modal-title">${options.title || ''}</span>    
            ${options.closable ? `<span class="modal-close" data-close = true>&times;</span>` : ''}
            </div>

            <div class="modal-body">
            ${options.content || ''}
            </div>

            <div class="modal-footer">
            <button>Okay</button>
            <button>Cancel</button>
            </div>
        </div>

    </div>`)
    document.body.appendChild(modal)
    return modal

}

$.modal = function(options){
    const modal =  {
        open(){
            if(destroyd){
                return console.log('Do not run it!')
            }
            !closing && $modal.classList.add('open')
               
           },
           close(){
               closing = true
               $modal.classList.remove('open')
               $modal.classList.add('hide')
                  setTimeout( () => {
                     $modal.classList.remove('hide')
                      closing = false
                  }, 2000)
               
           },
            destroy(){
                closing = true
                $modal.classList.remove('open')
                closing = false
            }
        
    }
    const $modal = _createModal(options)
    let closing = false;
    let destroyd = false;
    const listener = event => {
        if (event.target.dataset.close){
            modal.close()
        }
    }
    
    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy(){
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener(listener)
            destroyd = true
        }
    })


    
}
