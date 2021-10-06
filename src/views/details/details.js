
import {detailsTemplate} from './detailsTemplate.js'


let _renderMain = undefined;
let _redirectHandler = undefined;
let _dataService = undefined;
let _userData = undefined;

export function initDetailsPage(renderMain, redirectHandler, dataService, userData) {
    _renderMain = renderMain;
    _redirectHandler = redirectHandler;
    _dataService = dataService;
    _userData = userData;
}





export async function detailsPage(ctx) {

    const id = ctx.params.id;
    const item = await _dataService.getRecord(id);
    const user = _userData.getUserData();
    let userId = undefined;
    if(user){
        userId = user.id;
    }

    _renderMain(detailsTemplate(item, userId, onDelete));

    async function onDelete(event) {

        // const confirmed = await createModal('Are you sure you want to delete this item?');

        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await _dataService.deleteRecord(item.id);
            _redirectHandler('/listings')
        }

    }




}