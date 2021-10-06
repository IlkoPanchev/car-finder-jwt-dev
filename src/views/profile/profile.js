import { profileTemplate } from './profileTemplate.js';
import { until } from '../../../node_modules/lit-html/directives/until.js';
import { loaderTemplate } from '../common/loader.js';


let _renderMain = undefined;
let _dataService = undefined;
let _userData = undefined;
let _pageRequestDetails = undefined;


export function initProfilePage(renderMain, dataService, userData, pageRequestDetails) {
    _renderMain = renderMain;
    _dataService = dataService;
    _userData = userData;
    _pageRequestDetails = pageRequestDetails
}


export async function profilePage(ctx) {

    let queryStringArr = ctx.querystring.split('&');

    let page = _pageRequestDetails.getPage(queryStringArr);
    let pageSize = _pageRequestDetails.getPageSize(queryStringArr);

    const pageSizeSelectElement = document.querySelector('#page-size-select');
    if (pageSizeSelectElement) {
        pageSizeSelectElement.value = pageSize;
    }

    const user = _userData.getUserData();
    let count = await _dataService.getCollectionSizeByUser(user.id);
    let pages = Math.ceil(count / pageSize);

    // _renderMain(until(populateTemplate(user, page, pages, pageSize, onChange), loaderTemplate()));
    let data = await _dataService.getRecordsByUserPagination(user.id, page, pageSize);
    _renderMain(profileTemplate(data, page, pages, pageSize, onChange));

    async function onChange() {
        count = await _dataService.getCollectionSizeByUser(user.id);
        const pageSizeSelectElem = document.querySelector('#page-size-select');
        pageSize = pageSizeSelectElem ? Number(pageSizeSelectElem.value) : _pageRequestDetails.defaultPageSize;
        pages = Math.ceil(count / pageSize);
        page = 1;

        // _renderMain(until(populateTemplate(user, page, pages, pageSize, onChange), loaderTemplate()));
        data = await _dataService.getRecordsByUserPagination(user.id, page, pageSize);
        _renderMain(profileTemplate(data, page, pages, pageSize, onChange));
    }
}


async function populateTemplate(user, page, pages, pageSize, onChange) {

    const data = await _dataService.getRecordsByUserPagination(user.id, page, pageSize);
    return profileTemplate(data, page, pages, pageSize, onChange)
}