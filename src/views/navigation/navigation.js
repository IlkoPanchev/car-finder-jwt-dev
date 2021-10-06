import { navigationTemplate } from './navigationTemplate.js'


let _renderNav = undefined;
let _redirectHandler = undefined;
let _authService = undefined;
let _userData = undefined;

export function initNavigation(renderNav, redirectHandler, authService, userData) {
    _renderNav = renderNav;
    _redirectHandler = redirectHandler;
    _authService = authService;
    _userData = userData;
}

export async function navigation(ctx, next) {

    const user = _userData.getUserData();

    _renderNav(navigationTemplate(user, logout))

    async function logout() {
        await _authService.logout();
        _redirectHandler('/home');
    }

    next();

}


