import { homeTemplate } from './homeTemplate.js'

let _renderMain = undefined;

export function initHomePage(renderMain) {
    _renderMain = renderMain;
}

export async function homePage() {
    _renderMain(homeTemplate())
}

