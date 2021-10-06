import {html} from '../../../node_modules/lit-html/lit-html.js';


export  const detailsTemplate = (item, userId, onDelete) => html`
 <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${item.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${item.brand}</li>
                    <li><span>Model:</span>${item.model}</li>
                    <li><span>Year:</span>${item.year}</li>
                    <li><span>Price:</span>${item.price} &euro;</li>
                </ul>

                <p class="description-para">${item.description}</p>

                ${userId == item.ownerId ? html`
                <div class="listings-buttons">
                    <a href='/edit/${item.id}' class="button-list">Edit</a>
                    <a @click=${onDelete} href='javascript:void(0)' class="button-list">Delete</a>
                </div>` : ''}
            </div>
        </section>`;