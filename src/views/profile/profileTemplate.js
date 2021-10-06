import {html} from '../../../node_modules/lit-html/lit-html.js';
import {itemTemplate} from '../common/item.js';

export  const profileTemplate = (data, page, pages, pageSize, onChange) => html`
 <section id="my-listings">
            <h1>My car offers</h1>
            <div class="listings">
            <div>
               ${data.length != 0 ? html`Page ${page} / ${pages}
                ${page > 1 ? html`<a class="button-list" href="/profile?page=${page - 1}&pageSize=${pageSize}">&lt; Prev</a></a>` :
                ''}
                ${page < pages ? html`<a class="button-list" href="/profile?page=${page + 1}&pageSize=${pageSize}">Next &gt;</a></a>`
                    : ''}` 
               : ''} 
                <span class="page-size"> Show on page</span>
                    <select @change=${onChange} .value=${pageSize} id="page-size-select">
                        <option value="6" selected>6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>   
            </div>
               ${data.length == 0 ? html` <p class="no-cars"> You haven't listed any cars yet.</p>`
               : html`${data.map(itemTemplate)}`}
            </div>
        </section>`;