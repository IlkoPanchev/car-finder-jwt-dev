import {loginTemplate} from './loginTemplate.js'


let _renderMain = undefined;
let _redirectHandler = undefined;
let _authService = undefined;

export function initLoginPage(renderMain, redirectHandler, authService) {
    _renderMain = renderMain;
    _redirectHandler = redirectHandler;
    _authService = authService;
}

export async function loginPage(ctx) {

    const form = {
        invalidFields: {},
        errorMessages: []
    }

    _renderMain(loginTemplate(onSubmit));
   
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        form.errorMessages = [];

        const username = formData.get('username');
        const password = formData.get('password');

    
            if (username == '') {
                form.errorMessages.push('Username is required');
            }

            if (password == '') {
                form.errorMessages.push('Password is required');
            }

            if(form.errorMessages.length != 0){
                return alert(form.errorMessages.join('\n'))
            }

            const data = {username, password}

            await _authService.login(data);
            _redirectHandler('/listings');


    }

}