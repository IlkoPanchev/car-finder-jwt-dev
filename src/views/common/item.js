import { html } from '../../../node_modules/lit-html/lit-html.js'


export const itemTemplate = (item) => html`
              <div class="listing">
                    <div class="preview">
                        <img src=${item.imageUrl}>
                    </div>
                    <h2>${item.brand} ${item.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${item.year}</h3>
                            <h3>Price: ${item.price} &euro;</h3>
                        </div>
                        <div class="data-buttons">
                            <a href='/details/${item.id}' class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>`;