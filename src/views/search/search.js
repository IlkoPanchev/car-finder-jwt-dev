import { resultTemplate } from './resultTemplate.js';
import { until } from '../../../node_modules/lit-html/directives/until.js';
import { loaderTemplate } from '../common/loader.js';



let _renderMain = undefined;
let _dataService = undefined;
let _redirectHandler = undefined;
let _pageRequestDetails = undefined;


export function initSearchPage(renderMain, redirectHandler, dataService, pageRequestDetails) {
    _renderMain = renderMain;
    _redirectHandler = redirectHandler;
    _dataService = dataService;
    _pageRequestDetails = pageRequestDetails
}


export async function searchPage(ctx) {


    let queryStringArr = ctx.querystring.split('&');
    
    let page = getPage(queryStringArr);
    let pageSize = getPageSize(queryStringArr);

    const pageSizeSelectElement = document.querySelector('#page-size-select');
    if (pageSizeSelectElement) {
        pageSizeSelectElement.value = pageSize;
    }
    let keyword = getKeyword(queryStringArr);

    let count = await _dataService.getCollectionSizeByKeyword(keyword);
    let pages = Math.ceil(count / pageSize);
   
    // _renderMain(until(populateTemplate(onSearch, keyword, page, pages, pageSize, onChange), loaderTemplate()));
    let data = await _dataService.getRecordsByKeywordPagination(keyword, page, pageSize);
    _renderMain(resultTemplate(data, onSearch, keyword, page, pages, pageSize, onChange));

    async function onSearch() {

        const pageSizeSelectElem = document.querySelector('#page-size-select');
        pageSize = pageSizeSelectElem ? Number(pageSizeSelectElem.value) : _pageRequestDetails.defaultPageSize;

        const query = encodeURIComponent(document.getElementById('search-input').value.trim());

        if (!query) {
            return alert('Enter search criteria')
        } else {
            _redirectHandler('/search?keyword=' + query + '&page=' + page + '&pageSize=' + pageSize)
        }


    }

    async function onChange() {
        count = await _dataService.getCollectionSizeByKeyword(keyword);
        const pageSizeSelectElem = document.querySelector('#page-size-select');
        pageSize = pageSizeSelectElem ? Number(pageSizeSelectElem.value) : _pageRequestDetails.defaultPageSize;
        pages = Math.ceil(count / pageSize);
        page = 1;
      
        // _renderMain(until(populateTemplate(onSearch, keyword, page, pages, pageSize, onChange), loaderTemplate()));
         data = await _dataService.getRecordsByKeywordPagination(keyword, page, pageSize);
        _renderMain(resultTemplate(data, onSearch, keyword, page, pages, pageSize, onChange));
    }

    async function populateTemplate(onSearch, keyword, page, pages, pageSize, onChange) {

        const data = await _dataService.getRecordsByKeywordPagination(keyword, page, pageSize);
        return resultTemplate(data, onSearch, keyword, page, pages, pageSize, onChange)
    }

    function getPage(queryStringArr) {
        let queryStringPageArr = queryStringArr[1];
        let queryStringPage = queryStringPageArr ? queryStringPageArr.split('=')[1] : 1;
        let page = Number(queryStringPage);
        return page;
    }

    function getPageSize(queryStringArr) {
        let queryStringPageSizeArr = queryStringArr[2];
        let queryStringPageSize = queryStringPageSizeArr ? queryStringPageSizeArr.split('=')[1] : _pageRequestDetails.defaultPageSize;
        let pageSize = Number(queryStringPageSize);
        return pageSize;
    }

    function getKeyword(queryStringArr){
        const queryStringKeywordArr = queryStringArr[0];
        let keyword = queryStringKeywordArr.split('=')[1];
        return keyword;
    }
}