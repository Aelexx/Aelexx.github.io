function _createModal (){
    const myModal = documentCreateElement('div');
    modal.classList.add('amodal');
    modal.insertAdjustHTML('afterbegin', `   

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
    return modal;

}

$.modal = function(options){
    return

}
