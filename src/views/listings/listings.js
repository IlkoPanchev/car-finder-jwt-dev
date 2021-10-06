import { listingsTemplate } from './listingsTemplate.js';
import { loaderTemplate } from '../common/loader.js';
import { until } from '../../../node_modules/lit-html/directives/until.js';

let _renderMain = undefined;
let _dataService = undefined;
let _pageRequestDetails = undefined;

export function initListingsPage(renderMain, dataService, pageRequestDetails) {
    _renderMain = renderMain;
    _dataService = dataService;
    _pageRequestDetails = pageRequestDetails;
}

export async function listingsPage(ctx) {

    let queryStringArr = ctx.querystring.split('&');

    let page = _pageRequestDetails.getPage(queryStringArr);
    let pageSize = _pageRequestDetails.getPageSize(queryStringArr);

    const pageSizeSelectElement = document.querySelector('#page-size-select');
    if (pageSizeSelectElement) {
        pageSizeSelectElement.value = pageSize;
    }

    let count = await _dataService.getCollectionSize();
    let pages = Math.ceil(count / pageSize);

    // let data = await _dataService.getRecordsPagination(page, pageSize);
    _renderMain(until(populateTemplate(page, pages, pageSize, onChange), loaderTemplate()));
    // _renderMain(listingsTemplate(data, page, pages, pageSize, onChange));

    async function onChange() {
        count = await _dataService.getCollectionSize();
        const pageSizeSelectElem = document.querySelector('#page-size-select');
        pageSize = pageSizeSelectElem ? Number(pageSizeSelectElem.value) : _pageRequestDetails.defaultPageSize;
        pages = Math.ceil(count / pageSize);
        page = 1;

        _renderMain(until(populateTemplate(page, pages, pageSize, onChange), loaderTemplate()));
        //  data = await _dataService.getRecordsPagination(page, pageSize);
        //  _renderMain(listingsTemplate(data, page, pages, pageSize, onChange));

    }

}



async function populateTemplate(page, pages, pageSize, onChange) {
    const data = await _dataService.getRecordsPagination(page, pageSize);
    return listingsTemplate(data, page, pages, pageSize, onChange)
}


