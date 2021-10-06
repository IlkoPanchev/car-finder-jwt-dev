
import {registerTemplate} from './registerTemplate.js'



let _renderMain = undefined;
let _redirectHandler = undefined;
let _authService = undefined;

export function initRegisterPage(renderMain, redirectHandler, authService) {
    _renderMain = renderMain;
    _redirectHandler = redirectHandler;
    _authService = authService;
}


export async function registerPage(ctx) {

    const form = {
        invalidFields: {},
        errorMessages: []
    }

    _renderMain(registerTemplate(onSubmit));

    async function onSubmit(event) {

        event.preventDefault();
        const formData = new FormData(event.target);
        form.errorMessages = [];

        const username = formData.get('username').trim();
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeatPass').trim();
     

            if (username == '') {
                form.errorMessages.push('Username is required');
            }

            
            if (username.length < 3 || username.length > 20) {
                form.errorMessages.push('Username must be between 3 and 20 characters long');
            }

            if (email == '') {
                form.errorMessages.push('Email is required');
            }

            if (email.length > 50) {
                form.errorMessages.push('Email must less than 50 characters long');
            }

            if (password == '') {
                form.errorMessages.push('Password is required');
            }

            if (password.length < 3) {
                form.errorMessages.push('Password must at least 3 characters long');
            }

            if (repeatPass == '') {
                form.errorMessages.push('Repeat password is required');
            }

            if(form.errorMessages.length != 0){
                return alert(form.errorMessages.join('\n'))
            }

            if (password != repeatPass) {
                return alert('Passwords dont match');
            }

            const roles = ['ROLE_USER']

            const data = {username, password, email, roles}

            await _authService.register(data);
            _redirectHandler('/listings');

    }

}