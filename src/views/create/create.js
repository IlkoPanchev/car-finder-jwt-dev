
import {createTemplate} from './createTemplate.js'


let _renderMain = undefined;
let _redirectHandler = undefined;
let _dataService = undefined;

export function initCreatePage(renderMain, redirectHandler, dataService) {
    _renderMain = renderMain;
    _redirectHandler = redirectHandler;
    _dataService = dataService;
}


export async function createPage(ctx) {

    const form = {
        invalidFields: {},
        errorMessages: []
    }

    _renderMain(createTemplate(onSubmit));

    async function onSubmit(event) {


        event.preventDefault();
        const formData = new FormData(event.target);
        form.errorMessages = [];

        const brand = formData.get('brand').trim();
        const model = formData.get('model').trim();
        const description = formData.get('description').trim();
        let year = formData.get('year').trim();
        let price = formData.get('price').trim();


        if (brand == '') {
            form.errorMessages.push('Brand is required');
        }

        if (model == '') {
            form.errorMessages.push('Model is required');
        }

        if (description == '') {
            form.errorMessages.push('Description is required');
        }

        
        if (year == '') {
            form.errorMessages.push('Year is required');
        }

        if (isNaN(year) || Number(year) < 1950) {
            form.errorMessages.push('Year must be positive number');
        }

        if (price == '') {
            form.errorMessages.push('Price is required');
        }

        if (isNaN(price) || Number(price) < 0) {
            form.errorMessages.push('Price must be positive number');
        }

        if (form.errorMessages.length != 0) {
            return alert(form.errorMessages.join('\n'))
        }

        price = Number(price);
        year = Number(year);
        const fileInput = document.querySelector('#file');
        let imageUrl = undefined;
        if(fileInput){
            imageUrl = fileInput.files[0]
        }

        const formDataToSend = new FormData();
        formDataToSend.append('brand', brand);
        formDataToSend.append('model', model);
        formDataToSend.append('description', description);
        formDataToSend.append('year', year);
        formDataToSend.append('imageUrl', imageUrl);
        formDataToSend.append('price', price);
    
    
            await _dataService.createRecord(formDataToSend, true);
            _redirectHandler('/listings');

    

    }
}