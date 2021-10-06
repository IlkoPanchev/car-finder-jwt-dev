import { html, render } from 'lit-html';

const modalTemplate = (msg, onChoice) => html`
<div id="modal">
    <p>${msg}</p>
    <button @click=${()=> onChoice(true)}>Ok</button>
    <button @click=${()=> onChoice(false)}>Cancel</button>
</div>
`;


const overlay = document.createElement('div');
overlay.id = 'overlay';

export function createModal(msg){

    return new Promise(callback => {
        render (modalTemplate(msg, onChoice), overlay);
        document.body.appendChild(overlay);

        function onChoice(choice){
            clearModal();
            callback(choice);
        }
    });


    function clearModal(){
        overlay.remove();
    }

}
