import {html} from '../../../node_modules/lit-html/lit-html.js';
import {itemTemplate} from '../common/item.js'


export  const resultTemplate = (data, onSearch, keyword, page, pages, pageSize, onChange) => html`
<section id="search-cars">
    <h1>Filter by:</h1>

    <div class="container">
        <input id="search-input" type="text" name="search"  value=${keyword || ''}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
            <div>
               ${data.length != 0 ? html`Page ${page} / ${pages}
                ${page > 1 ? html`<a class="button-list" href="/search?year=${keyword}&page=${page - 1}&pageSize=${pageSize}">&lt; Prev</a></a>` :
                ''}
                ${page < pages ? html`<a class="button-list" href="/search?year=${keyword}&page=${page + 1}&pageSize=${pageSize}">Next &gt;</a></a>`
                    : ''}` 
               : ''} 
                Show on page
                    <select @change=${onChange} .value=${pageSize} id="page-size-select">
                        <option value="6" selected>6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>   
            </div>
        ${data.length == 0 ? html` <p class="no-cars"> No results.</p>`
                : html`${data.map(itemTemplate)}`}
    </div>
</section>`;