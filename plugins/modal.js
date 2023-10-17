function _createModal (){
    const modal = document.createElement('div');
    modal.classList.add('amodal');
    modal.insertAdjacentHTML('afterbegin', `   

    <div class="modal-overlay">
        <div class="modal-window">

            <div class="modal-header">
            <span class="modal-title">Title</span>    
            <span class="modal-close">&times;</span>
            </div>

            <div class="modal-body">
            <p> See me good </p>
            </div>

            <div class="modal-footer">
            <button>Okay</button>
            <button>Ca</button>
            </div>
        </div>

    </div>`)
    document.body.appendChild(modal)
    return modal

}

$.modal = function(options){
    const ANIMASPEED = 900
    const $modal = _createModal(options)
    let closing = false;
    return {
        open(){
         !closing && $modal.classList.add('open')
            
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
             setTimeout( () => {
                 $modal.classList.remove('hide')
                 closing = false
             }, ANIMASPEED)
            
        },
        destroy(){}
    }
}
