import { LitRenderer } from './renderer.js';
import { Router } from './router.js';
import authService from './api/authService.js';
import dataService from './api/dataService.js';
import * as userData from './utility.js' ;
import * as pageRequestDetails from './utility.js' ;
import page from '../node_modules/page/page.mjs';


import { initNavigation, navigation } from './views/navigation/navigation.js';
import { initHomePage, homePage} from './views/home/home.js';
import { initLoginPage, loginPage } from './views/login/login.js';
import { initRegisterPage, registerPage } from './views/register/register.js';
import { initListingsPage, listingsPage } from './views/listings/listings.js';
import { initCreatePage, createPage } from './views/create/create.js';
import { initDetailsPage, detailsPage } from './views/details/details.js';
import { initEditPage, editPage } from './views/edit/edit.js';
import { initProfilePage, profilePage} from './views/profile/profile.js';
import { initSearchPage, searchPage} from './views/search/search.js';

import stylesCss from '../style/styles.css';


const main = document.querySelector('main');
const nav = document.querySelector('nav');

const renderer = new LitRenderer();
const renderMain = renderer.createRenderHandler(main);
const renderNav = renderer.createRenderHandler(nav);

const router = new Router();
const redirectHandler = router.createRedirectHandler();


initHomePage(renderMain);
initNavigation(renderNav, redirectHandler, authService, userData);
initLoginPage(renderMain, redirectHandler, authService);
initRegisterPage(renderMain, redirectHandler, authService);
initListingsPage(renderMain, dataService, pageRequestDetails);
initCreatePage(renderMain, redirectHandler, dataService);
initDetailsPage(renderMain, redirectHandler, dataService, userData);
initEditPage(renderMain, redirectHandler, dataService);
initProfilePage(renderMain, dataService, userData, pageRequestDetails);
initSearchPage(renderMain, redirectHandler, dataService, pageRequestDetails);


page(navigation);
page('index.html', '/');
page('/', '/home');
page('/home', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/listings', listingsPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/profile', profilePage)
page('/search', searchPage);


page.start();

