import page from '../node_modules/page/page.mjs'

export class Router{
    constructor(){

    }
    createRedirectHandler(){
        return page.redirect;
    }
}