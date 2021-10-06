import {html} from '../../../node_modules/lit-html/lit-html.js'

export const navigationTemplate = (user, logout) => html`
 <a class="active"  href=${user ? '/listings' : '/home'}>Home</a>
                <a href='/listings'>All Offers</a>
                <a href='/search'>Search</a>
                ${user ? html` <div id="profile">
                    <a>Welcome ${user.username}</a>
                    <a href='/profile'>My Offers</a>
                    <a href='/create'>Add Offer</a>
                    <a @click=${logout} href='javascript:void(0)'>Logout</a>
                </div>`
                : html`<div id="guest">
                    <a href='/login'>Login</a>
                    <a href='/register'>Register</a>
                </div>`}
               `