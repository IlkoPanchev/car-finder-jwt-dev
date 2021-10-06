import { html } from '../../../node_modules/lit-html/lit-html.js';
import { itemTemplate } from '../common/item.js';


export const listingsTemplate = (data, page, pages, pageSize, onChange) => html`
<section id="car-listings">
    <h1>Car Offers</h1>
    <div class="listings">
        <div>
            Page ${page} / ${pages}
            ${page > 1 ? html`<a class="button-list" href="/listings?page=${page - 1}&pageSize=${pageSize}">&lt; Prev</a></a>` :
            ''}
            ${page < pages ? html`<a class="button-list" href="/listings?page=${page + 1}&pageSize=${pageSize}">Next &gt;</a></a>`
                : ''}
                <span class="page-size"> Show on page</span>
                <select @change=${onChange} .value=${pageSize} id="page-size-select">
                    <option value="6" selected>6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
        </div>
       
        ${data.length == 0 ? html`<p class="no-cars">No cars in database.</p>`
        : html`${data.map(itemTemplate)}`}
    </div>
</section>`;

