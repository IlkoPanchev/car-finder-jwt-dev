import {html} from '../../../node_modules/lit-html/lit-html.js';

export const createTemplate = (onSubmit) => html`
  <section id="create-listing">
            <div class="container">
                <form @submit=${onSubmit} id="create-form">
                    <h1>Create Car Offer</h1>
                    <p>Please fill in this form to create an offer.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" required>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" required>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" required>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" required>

                    <p>Car Image</p>
                    <input id="file" type="file" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" required>

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Offer">
                </form>
            </div>
        </section>`;