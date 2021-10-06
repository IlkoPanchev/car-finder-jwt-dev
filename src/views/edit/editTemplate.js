import {html} from '../../../node_modules/lit-html/lit-html.js';


export const editTemplate = (item, onSubmit) => html`
  <section id="edit-listing">
            <div class="container">

                <form @submit=${onSubmit} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value=${item.brand} required>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value=${item.model} required>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value=${item.description} required>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value=${item.year} required>

                    <p>Car Image</p>
                    <input type="file" id="file" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value=${item.price} required>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>`;