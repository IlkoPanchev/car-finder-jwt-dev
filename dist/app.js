(()=>{"use strict";var e,r,n,t={7063:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a)()(i());o.push([e.id,".listings {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.listing {\r\n    box-sizing: border-box;\r\n    text-align: left;\r\n    display: inline-block;\r\n    padding: 30px 50px;\r\n    width: 350px;\r\n    margin: 15px;\r\n    margin-bottom: 50px;\r\n    border-radius: 8px;\r\n    border: 2px solid black;\r\n}\r\n\r\n.listing h2 {\r\n    height: 2.5em;\r\n}\r\n\r\n.preview {\r\n    height: 150px;\r\n    width: 250px;\r\n    text-align: center;\r\n}\r\n\r\n.preview>img {\r\n    object-fit: contain;\r\n    height: 150px;\r\n    width: 250px;\r\n}\r\n\r\n.no-cars {\r\n    margin: auto;\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.data-info {\r\n    margin-top: 8px;\r\n}\r\n\r\nh3 {\r\n    font-size: 20px;\r\n}\r\n\r\n.button-carDetails {\r\n    background-color: #40B3FF;\r\n    border: none;\r\n    color: white;\r\n    padding: 10px;\r\n    width: 100px;\r\n    margin: 2px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#page-size-select {\r\n    padding: 10px;\r\n    width: 65px;\r\n    margin: 2px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n}\r\n\r\n.page-size{\r\n    margin-left: 20px;\r\n}\r\n\r\n.loader {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 45%;\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #40B3FF;\r\n    width: 80px;\r\n    height: 80px;\r\n    -webkit-animation: spin 2s linear infinite; /* Safari */\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  /* Safari */\r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n\r\n",""]);const s=o},2079:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a)()(i());o.push([e.id,".listing-props {\r\n    margin-top: 16px;\r\n    list-style: none;\r\n}\r\n\r\n.listing-props>li {\r\n    font-size: 20px;\r\n}\r\n.listing-props>li>span {\r\n    font-weight: 600;\r\n    display: inline-block;\r\n    width: 80px;\r\n}\r\n\r\n.listings-buttons {\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-top: 34px;\r\n}\r\n\r\n.button-list {\r\n    cursor: pointer;\r\n    background-color: #40B3FF;\r\n    border: none;\r\n    color: white;\r\n    margin: auto;\r\n    padding: 11px 30px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.details-info {\r\n    max-width: 700px;\r\n    margin: auto;\r\n}\r\n\r\n.details-info>img {\r\n    display: block;\r\n    margin: auto;\r\n    margin-bottom: 16px;\r\n    max-height: 455px;\r\n}\r\n\r\n.description-para {\r\n    margin-top: 16px;\r\n    font-size: 16px;\r\n}",""]);const s=o},3176:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a)()(i());o.push([e.id,'/* Add padding to containers */\r\n\r\n.container {\r\n    background-color: white;\r\n    padding: 16px;\r\n    text-align: center;\r\n    width: 500px;\r\n    margin: auto;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type="text"], input[type="number"], input[type="password"], input[type="email"], input[type="file"] {\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    width: 100%;\r\n    border: none;\r\n    background: #f1f1f1;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput[type="text"]:focus, input[type="number"]:focus, input[type="password"]:focus, input[type="email"]:focus, input[type="file"]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.registerbtn {\r\n    background-color: #40B3FF;\r\n    color: white;\r\n    padding: 16px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    opacity: 0.9;\r\n    border-radius: 5px;\r\n}\r\n\r\n.registerbtn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n    color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the "sign in" section */\r\n\r\n.signin {\r\n    padding: 16px;\r\n    background-color: #f1f1f1;\r\n    text-align: center;\r\n}',""]);const s=o},3689:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a)()(i());o.push([e.id,"nav {\r\n    background-color: #333;\r\n    overflow: hidden;\r\n}\r\n\r\n#profile, #guest {\r\n    float: right;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\nnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n\r\n/* Change the color of links on hover */\r\n\r\nnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\nnav a.active {\r\n    background-color: #40B3FF;\r\n    color: white;\r\n}",""]);const s=o},1534:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a)()(i());o.push([e.id,"#notifications {\r\n    float: right;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    margin: 1em;\r\n}\r\n\r\n.notification {\r\n    font-size: 1.5em;\r\n    color: #ffffff;\r\n    display: none;\r\n    text-align: right;\r\n}\r\n\r\n.notification>span {\r\n    display: inline-block;\r\n    padding:  0.5em 2em 0.5em 2em;\r\n    border-radius: 10px;\r\n}\r\n\r\n#loadingBox>span {\r\n    background: #7CB3E9;\r\n}\r\n#infoBox>span {\r\n    background: #393;\r\n}\r\n#errorBox>span {\r\n    background: #F50;\r\n}",""]);const s=o},9625:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a)()(i());o.push([e.id,".searchCars input {\r\n  display: block;\r\n  width: 400px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.searchCars {\r\n  width: 100vw;\r\n  position: relative;\r\n\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n",""]);const s=o},1358:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a)()(i());o.push([e.id,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #333333;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 16px;\r\n}\r\n\r\n#container {\r\n    box-sizing: border-box;\r\n    min-height: 100vh;\r\n    position: relative;\r\n    padding-bottom: 64px;\r\n}",""]);const s=o},5898:(e,r,n)=>{n.r(r),n.d(r,{default:()=>m});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a),s=n(1358),c=n(9249),d=n(7063),l=n(3176),p=n(3689),u=n(2079),f=n(9625),h=n(1534),g=o()(i());g.i(s.Z),g.i(c.Z),g.i(d.Z),g.i(l.Z),g.i(p.Z),g.i(u.Z),g.i(f.Z),g.i(h.Z),g.push([e.id,"\r\n\r\n",""]);const m=g},9249:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(8081),i=n.n(t),a=n(3645),o=n.n(a)()(i());o.push([e.id,"#main {\r\n    background-color: white;\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    font-size: 50px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n}\r\n\r\n.button {\r\n    background-color: #40B3FF;\r\n    /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#welcome-container {\r\n    width: 50%;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.hero {\r\n    margin: 40px;\r\n    max-width: 240px;\r\n}\r\n\r\n#button-div {\r\n    padding-top: 10px;\r\n    width: 37%;\r\n    margin: auto;\r\n    display: flex;\r\n}",""]);const s=o},8847:(e,r,n)=>{var t=n(3379),i=n.n(t),a=n(7795),o=n.n(a),s=n(569),c=n.n(s),d=n(3565),l=n.n(d),p=n(9216),u=n.n(p),f=n(4589),h=n.n(f),g=n(5898),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u();var y=i()(g.default,m);if(!g.default.locals||e.hot.invalidate){var v=!g.default.locals,b=v?g:g.default.locals;e.hot.accept(5898,(r=>{g=n(5898),function(e,r,n){if(!e&&r||e&&!r)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==r[t])return!1;for(t in r)if(!(n&&"default"===t||e[t]))return!1;return!0}(b,v?g:g.default.locals,v)?(b=v?g:g.default.locals,y(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){y()})),g.default&&g.default.locals&&g.default.locals},5722:(e,r,n)=>{var t={};n.r(t),n.d(t,{defaultPageSize:()=>u,getPage:()=>f,getPageSize:()=>h,getUserData:()=>d,removeUserData:()=>p,setUserData:()=>l});var i=n(3445),a=n(4481);const o="https://cars-rest-jwt.herokuapp.com/api/users/register",s="https://cars-rest-jwt.herokuapp.com/api/users/login",c="https://cars-rest-jwt.herokuapp.com/api/users/logout";function d(){const e=sessionStorage.getItem("user");return e?JSON.parse(e):void 0}function l(e){sessionStorage.setItem("user",JSON.stringify(e))}function p(){sessionStorage.removeItem("user")}const u=6;function f(e){let r=e[0].split("=")[1];return Number(r)||1}function h(e){let r=e[1],n=r?r.split("=")[1]:u;return Number(n)}async function g(e,r){try{const n=await fetch(e,r);if(0==n.ok){const e=await n.json();throw new Error(e.message)}try{return await n.json()}catch(e){return n}}catch(e){throw alert(e.message),e}}function m(e="get",r,n){let t={method:e,headers:{"Access-Control-Allow-Origin":"http://localhost:8080","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE","Access-Control-Allow-Headers":"Content-Type"}};const i=d();return i&&(t.headers.Authorization="Bearer "+i.accessToken),r&&(t.headers["Content-Type"]="application/json",t.body=n?r:JSON.stringify(r)),n&&delete t.headers["Content-Type"],t}async function y(e){return await g(e,m())}async function v(e,r){return await g(e,m("post",r))}const b={register:async function(e){const r=await v(o,e);return l(r),r},login:async function(e){const r=await v(s,e);return l(r),r},logout:async function(){const e=await v(c);return p(),e}},w="https://cars-rest-jwt.herokuapp.com",x={getRecord:async function(e){return await y(`${w}/api/cars/${e}`)},getRecordsByUserPagination:async function(e,r=1,n){return await y(`${w}/api/cars?ownerId=${e}&page=${r-1}&pageSize=${n}`)},getRecordsByKeywordPagination:async function(e,r=1,n){return await y(`${w}/api/cars?keyword=${e}&page=${r-1}&pageSize=${n}`)},getRecordsPagination:async function(e=1,r){return await y(`${w}/api/cars?page=${e-1}&pageSize=${r}`)},getCollectionSize:async function(){return await y(`${w}/api/cars/count`)},getCollectionSizeByKeyword:async function(e){return await y(`${w}/api/cars/count?keyword=${e}`)},getCollectionSizeByUser:async function(e){return await y(`${w}/api/cars/count?ownerId=${e}`)},createRecord:async function(e,r){return await async function(e,r,n){return await g(e,m("post",r,n))}(`${w}/api/cars`,e,r)},editRecord:async function(e,r,n){return await async function(e,r,n){return await g(e,m("put",r,n))}(`${w}/api/cars/${e}`,r,n)},deleteRecord:async function(e){return await async function(e){return await g(e,m("delete"))}(`${w}/api/cars/${e}`)}};let $,k,E,S;var P=n(2072);let M,q,z,C,D,O,I;const _=e=>i.dy`
              <div class="listing">
                    <div class="preview">
                        <img src=${e.imageUrl}>
                    </div>
                    <h2>${e.brand} ${e.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${e.year}</h3>
                            <h3>Price: ${e.price} &euro;</h3>
                        </div>
                        <div class="data-buttons">
                            <a href='/details/${e.id}' class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>`,j=()=>i.dy`<div class="loader"></div>`;var N=n(7345);let B,R,U,A,F,Z,H,T,Y,L,K,J,G;async function W(e,r,n,t){return((e,r,n,t,a)=>i.dy`
<section id="car-listings">
    <h1>Car Offers</h1>
    <div class="listings">
        <div>
            Page ${r} / ${n}
            ${r>1?i.dy`<a class="button-list" href="/listings?page=${r-1}&pageSize=${t}">&lt; Prev</a></a>`:""}
            ${r<n?i.dy`<a class="button-list" href="/listings?page=${r+1}&pageSize=${t}">Next &gt;</a></a>`:""}
                <span class="page-size"> Show on page</span>
                <select @change=${a} .value=${t} id="page-size-select">
                    <option value="6" selected>6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
        </div>
       
        ${0==e.length?i.dy`<p class="no-cars">No cars in database.</p>`:i.dy`${e.map(_)}`}
    </div>
</section>`)(await R.getRecordsPagination(e,n),e,r,n,t)}const Q=(e,r,n,t,a)=>i.dy`
 <section id="my-listings">
            <h1>My car offers</h1>
            <div class="listings">
            <div>
               ${0!=e.length?i.dy`Page ${r} / ${n}
                ${r>1?i.dy`<a class="button-list" href="/profile?page=${r-1}&pageSize=${t}">&lt; Prev</a></a>`:""}
                ${r<n?i.dy`<a class="button-list" href="/profile?page=${r+1}&pageSize=${t}">Next &gt;</a></a>`:""}`:""} 
                <span class="page-size"> Show on page</span>
                    <select @change=${a} .value=${t} id="page-size-select">
                        <option value="6" selected>6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>   
            </div>
               ${0==e.length?i.dy` <p class="no-cars"> You haven't listed any cars yet.</p>`:i.dy`${e.map(_)}`}
            </div>
        </section>`;let V,X,ee,re;const ne=(e,r,n,t,a,o,s)=>i.dy`
<section id="search-cars">
    <h1>Filter by:</h1>

    <div class="container">
        <input id="search-input" type="text" name="search"  value=${n||""}>
        <button @click=${r} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
            <div>
               ${0!=e.length?i.dy`Page ${t} / ${a}
                ${t>1?i.dy`<a class="button-list" href="/search?year=${n}&page=${t-1}&pageSize=${o}">&lt; Prev</a></a>`:""}
                ${t<a?i.dy`<a class="button-list" href="/search?year=${n}&page=${t+1}&pageSize=${o}">Next &gt;</a></a>`:""}`:""} 
                Show on page
                    <select @change=${s} .value=${o} id="page-size-select">
                        <option value="6" selected>6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>   
            </div>
        ${0==e.length?i.dy` <p class="no-cars"> No results.</p>`:i.dy`${e.map(_)}`}
    </div>
</section>`;let te,ie,ae,oe;n(8847);const se=document.querySelector("main"),ce=document.querySelector("nav"),de=new class{constructor(){}createRenderHandler(e){return function(r){(0,i.sY)(r,e)}}},le=de.createRenderHandler(se),pe=de.createRenderHandler(ce),ue=(new class{constructor(){}createRedirectHandler(){return a.Z.redirect}}).createRedirectHandler();!function(e){M=e}(le),function(e,r,n,t){$=e,k=r,E=n,S=t}(pe,ue,b,t),function(e,r,n){q=e,z=r,C=n}(le,ue,b),function(e,r,n){D=e,O=r,I=n}(le,ue,b),function(e,r,n){B=e,R=r,U=n}(le,x,t),function(e,r,n){A=e,F=r,Z=n}(le,ue,x),function(e,r,n,t){H=e,T=r,Y=n,L=t}(le,ue,x,t),function(e,r,n){K=e,J=r,G=n}(le,ue,x),function(e,r,n,t){V=e,X=r,ee=n,re=t}(le,x,t,t),function(e,r,n,t){te=e,ae=r,ie=n,oe=t}(le,ue,x,t),(0,a.Z)((async function(e,r){const n=S.getUserData();$(((e,r)=>i.dy`
 <a class="active"  href=${e?"/listings":"/home"}>Home</a>
                <a href='/listings'>All Offers</a>
                <a href='/search'>Search</a>
                ${e?i.dy` <div id="profile">
                    <a>Welcome ${e.username}</a>
                    <a href='/profile'>My Offers</a>
                    <a href='/create'>Add Offer</a>
                    <a @click=${async function(){await E.logout(),k("/home")}} href='javascript:void(0)'>Logout</a>
                </div>`:i.dy`<div id="guest">
                    <a href='/login'>Login</a>
                    <a href='/register'>Register</a>
                </div>`}
               `)(n)),r()})),(0,a.Z)("index.html","/"),(0,a.Z)("/","/home"),(0,a.Z)("/home",(async function(){M(i.dy` 
      <section id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Finder</h1>
                <img class="hero" src="${P}" alt="carIntro">
                <h2>To see all the offers click the link below:</h2>
                <div>
                    <a href='/listings' class="button">Offers</a>
                </div>
            </div>
        </section>`)})),(0,a.Z)("/login",(async function(e){const r={invalidFields:{},errorMessages:[]};q(i.dy` 
   <section id="login">
            <div class="container">
                <form @submit=${async function(e){e.preventDefault();const n=new FormData(e.target);r.errorMessages=[];const t=n.get("username"),i=n.get("password");if(""==t&&r.errorMessages.push("Username is required"),""==i&&r.errorMessages.push("Password is required"),0!=r.errorMessages.length)return alert(r.errorMessages.join("\n"));const a={username:t,password:i};await C.login(a),z("/listings")}} id="login-form"px webpack  action="#" method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href='/register'>Sign up</a>.
                    </p>
                </div>
            </div>
        </section>`)})),(0,a.Z)("/register",(async function(e){const r={invalidFields:{},errorMessages:[]};D(i.dy` 
  <section id="register">
            <div class="container">
                <form @submit=${async function(e){e.preventDefault();const n=new FormData(e.target);r.errorMessages=[];const t=n.get("username").trim(),i=n.get("email").trim(),a=n.get("password").trim(),o=n.get("repeatPass").trim();if(""==t&&r.errorMessages.push("Username is required"),(t.length<3||t.length>20)&&r.errorMessages.push("Username must be between 3 and 20 characters long"),""==i&&r.errorMessages.push("Email is required"),i.length>50&&r.errorMessages.push("Email must less than 50 characters long"),""==a&&r.errorMessages.push("Password is required"),a.length<3&&r.errorMessages.push("Password must at least 3 characters long"),""==o&&r.errorMessages.push("Repeat password is required"),0!=r.errorMessages.length)return alert(r.errorMessages.join("\n"));if(a!=o)return alert("Passwords dont match");const s={username:t,password:a,email:i,roles:["ROLE_USER"]};await I.register(s),O("/listings")}} id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Email</p>
                    <input type="email" placeholder="Enter Email" name="email" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href='/login'>Sign in</a>.
                    </p>
                </div>
            </div>
        </section>`)})),(0,a.Z)("/listings",(async function(e){let r=e.querystring.split("&"),n=U.getPage(r),t=U.getPageSize(r);const i=document.querySelector("#page-size-select");i&&(i.value=t);let a=await R.getCollectionSize(),o=Math.ceil(a/t);B((0,N.C)(W(n,o,t,(async function e(){a=await R.getCollectionSize();const r=document.querySelector("#page-size-select");t=r?Number(r.value):U.defaultPageSize,o=Math.ceil(a/t),n=1,B((0,N.C)(W(n,o,t,e),j()))})),j()))})),(0,a.Z)("/create",(async function(e){const r={invalidFields:{},errorMessages:[]};A(i.dy`
  <section id="create-listing">
            <div class="container">
                <form @submit=${async function(e){e.preventDefault();const n=new FormData(e.target);r.errorMessages=[];const t=n.get("brand").trim(),i=n.get("model").trim(),a=n.get("description").trim();let o=n.get("year").trim(),s=n.get("price").trim();if(""==t&&r.errorMessages.push("Brand is required"),""==i&&r.errorMessages.push("Model is required"),""==a&&r.errorMessages.push("Description is required"),""==o&&r.errorMessages.push("Year is required"),(isNaN(o)||Number(o)<1950)&&r.errorMessages.push("Year must be after 1950"),""==s&&r.errorMessages.push("Price is required"),(isNaN(s)||Number(s)<0)&&r.errorMessages.push("Price must be positive number"),0!=r.errorMessages.length)return alert(r.errorMessages.join("\n"));s=Number(s),o=Number(o);const c=document.querySelector("#file");let d;c&&(d=c.files[0]);const l=new FormData;l.append("brand",t),l.append("model",i),l.append("description",a),l.append("year",o),l.append("imageUrl",d),l.append("price",s),await Z.createRecord(l,!0),F("/listings")}} id="create-form">
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
        </section>`)})),(0,a.Z)("/details/:id",(async function(e){const r=e.params.id,n=await Y.getRecord(r),t=L.getUserData();let a;t&&(a=t.id),H(((e,r,n)=>i.dy`
 <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${e.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${e.brand}</li>
                    <li><span>Model:</span>${e.model}</li>
                    <li><span>Year:</span>${e.year}</li>
                    <li><span>Price:</span>${e.price} &euro;</li>
                </ul>

                <p class="description-para">${e.description}</p>

                ${r==e.ownerId?i.dy`
                <div class="listings-buttons">
                    <a href='/edit/${e.id}' class="button-list">Edit</a>
                    <a @click=${n} href='javascript:void(0)' class="button-list">Delete</a>
                </div>`:""}
            </div>
        </section>`)(n,a,(async function(e){confirm("Are you sure you want to delete this offer?")&&(await Y.deleteRecord(n.id),T("/listings"))})))})),(0,a.Z)("/edit/:id",(async function(e){const r=e.params.id,n=await G.getRecord(r),t={invalidFields:{},errorMessages:[]};K(((e,r)=>i.dy`
  <section id="edit-listing">
            <div class="container">

                <form @submit=${r} id="edit-form">
                    <h1>Edit Car Offer</h1>
                    <p>Please fill in this form to edit an offer.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value=${e.brand} required>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value=${e.model} required>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value=${e.description} required>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value=${e.year} required>

                    <p>Car Image</p>
                    <input type="file" id="file" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value=${e.price} required>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Offer">
                </form>
            </div>
        </section>`)(n,(async function(e){e.preventDefault();const r=new FormData(e.target);t.errorMessages=[];const i=r.get("brand").trim(),a=r.get("model").trim(),o=r.get("description").trim();let s=r.get("year").trim(),c=r.get("price").trim();if(""==i&&t.errorMessages.push("Brand is required"),""==a&&t.errorMessages.push("Model is required"),""==o&&t.errorMessages.push("Description is required"),""==s&&t.errorMessages.push("Year is required"),(isNaN(s)||Number(s)<1950)&&t.errorMessages.push("Year must be after 1950"),""==c&&t.errorMessages.push("Price is required"),(isNaN(c)||Number(c)<0)&&t.errorMessages.push("Price must be positive number"),0!=t.errorMessages.length)return alert(t.errorMessages.join("\n"));c=Number(c),s=Number(s);const d=document.querySelector("#file");let l;d&&(l=d.files[0]);const p=new FormData;p.append("brand",i),p.append("model",a),p.append("description",o),p.append("year",s),p.append("imageUrl",l),p.append("price",c),await G.editRecord(n.id,p,!0),J("/listings")})))})),(0,a.Z)("/profile",(async function(e){let r=e.querystring.split("&"),n=re.getPage(r),t=re.getPageSize(r);const i=document.querySelector("#page-size-select");i&&(i.value=t);const a=ee.getUserData();let o=await X.getCollectionSizeByUser(a.id),s=Math.ceil(o/t),c=await X.getRecordsByUserPagination(a.id,n,t);V(Q(c,n,s,t,(async function e(){o=await X.getCollectionSizeByUser(a.id);const r=document.querySelector("#page-size-select");t=r?Number(r.value):re.defaultPageSize,s=Math.ceil(o/t),n=1,c=await X.getRecordsByUserPagination(a.id,n,t),V(Q(c,n,s,t,e))})))})),(0,a.Z)("/search",(async function(e){let r=e.querystring.split("&"),n=function(e){let r=e[1],n=r?r.split("=")[1]:1;return Number(n)}(r),t=function(e){let r=e[2],n=r?r.split("=")[1]:oe.defaultPageSize;return Number(n)}(r);const i=document.querySelector("#page-size-select");i&&(i.value=t);let a=function(e){return e[0].split("=")[1]}(r),o=await ie.getCollectionSizeByKeyword(a),s=Math.ceil(o/t),c=await ie.getRecordsByKeywordPagination(a,n,t);async function d(){const e=document.querySelector("#page-size-select");t=e?Number(e.value):oe.defaultPageSize;const r=encodeURIComponent(document.getElementById("search-input").value.trim());if(!r)return alert("Enter search criteria");ae("/search?keyword="+r+"&page="+n+"&pageSize="+t)}te(ne(c,d,a,n,s,t,(async function e(){o=await ie.getCollectionSizeByKeyword(a);const r=document.querySelector("#page-size-select");t=r?Number(r.value):oe.defaultPageSize,s=Math.ceil(o/t),n=1,c=await ie.getRecordsByKeywordPagination(a,n,t),te(ne(c,d,a,n,s,t,e))})))})),a.Z.start()},2072:(e,r,n)=>{e.exports=n.p+"61d461a97bad167c43b2.webp"}},i={};function a(e){var r=i[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=i[e]={id:e,loaded:!1,exports:{}};try{var o={id:e,module:n,factory:t[e],require:a};a.i.forEach((function(e){e(o)})),n=o.module,o.factory.call(n.exports,n,n.exports,o.require)}catch(e){throw n.error=e,e}return n.loaded=!0,n.exports}a.m=t,a.c=i,a.i=[],e=[],a.O=(r,n,t,i)=>{if(!n){var o=1/0;for(l=0;l<e.length;l++){for(var[n,t,i]=e[l],s=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(l--,1);var d=t();void 0!==d&&(r=d)}}return r}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,t,i]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var n in r)a.o(r,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},a.hu=e=>e+"."+a.h()+".hot-update.js",a.hmrF=()=>"app."+a.h()+".hot-update.json",a.h=()=>"000dfdecc3615a142480",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="car-tube:",a.l=(e,t,i,o)=>{if(r[e])r[e].push(t);else{var s,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var p=d[l];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+i){s=p;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",n+i),s.src=e),r[e]=[t];var u=(n,t)=>{s.onerror=s.onload=null,clearTimeout(f);var i=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(t))),n)return n(t)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e,r,n,t,i={},o=a.c,s=[],c=[],d="idle";function l(e){d=e;for(var r=[],n=0;n<c.length;n++)r[n]=c[n].call(null,e);return Promise.all(r)}function p(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return p(e)}))}function u(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return l("check").then(a.hmrM).then((function(t){return t?l("prepare").then((function(){var i=[];return r=[],n=[],Promise.all(Object.keys(a.hmrC).reduce((function(e,r){return a.hmrC[r](t.c,t.r,t.m,e,n,i),e}),[])).then((function(){return p((function(){return e?h(e):l("ready").then((function(){return i}))}))}))})):l(g()?"ready":"idle").then((function(){return null}))}))}function f(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},g();var r=n.map((function(r){return r(e)}));n=void 0;var i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return l("abort").then((function(){throw i[0]}));var a=l("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var o,s=l("apply"),c=function(e){o||(o=e)},d=[];return r.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var n=0;n<r.length;n++)d.push(r[n])}})),Promise.all([a,s]).then((function(){return o?l("fail").then((function(){throw o})):t?h(e).then((function(e){return d.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return d}))}))}function g(){if(t)return n||(n=[]),Object.keys(a.hmrI).forEach((function(e){t.forEach((function(r){a.hmrI[e](r,n)}))})),t=void 0,!0}a.hmrD=i,a.i.push((function(h){var g,m,y,v,b=h.module,w=function(n,t){var i=o[t];if(!i)return n;var a=function(r){if(i.hot.active){if(o[r]){var a=o[r].parents;-1===a.indexOf(t)&&a.push(t)}else s=[t],e=r;-1===i.children.indexOf(r)&&i.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),s=[];return n(r)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&"e"!==u&&Object.defineProperty(a,u,c(u));return a.e=function(e){return function(e){switch(d){case"ready":return l("prepare"),r.push(e),p((function(){return l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},a}(h.require,h.id);b.hot=(g=h.id,m=b,v={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==g,_requireSelf:function(){s=m.parents.slice(),e=y?void 0:g,a(g)},active:!0,accept:function(e,r,n){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)v._acceptedDependencies[e[t]]=r||function(){},v._acceptedErrorHandlers[e[t]]=n;else v._acceptedDependencies[e]=r||function(){},v._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)v._declinedDependencies[e[r]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=v._disposeHandlers.indexOf(e);r>=0&&v._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":n=[],Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](g,n)})),l("ready");break;case"ready":Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](g,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(g)}},check:u,apply:f,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:i[g]},e=void 0,v),b.parents=s,b.children=[],s=[],h.require=w})),a.hmrC={},a.hmrI={}})(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var r=a.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e,r,n,t,i=a.hmrS_jsonp=a.hmrS_jsonp||{143:0},o={};function s(e){return new Promise(((r,n)=>{o[e]=r;var t=a.p+a.hu(e),i=new Error;a.l(t,(r=>{if(o[e]){o[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+t+": "+a+")",i.name="ChunkLoadError",i.type=t,i.request=a,n(i)}}))}))}function c(o){function s(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),o=i.id,s=i.chain,d=a.c[o];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(d.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var l=0;l<d.parents.length;l++){var p=d.parents[l],u=a.c[p];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([p]),moduleId:o,parentId:p};-1===r.indexOf(p)&&(u.hot._acceptedDependencies[o]?(n[p]||(n[p]=[]),c(n[p],[o])):(delete n[p],r.push(p),t.push({chain:s.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}a.f&&delete a.f.jsonpHmr,e=void 0;var d={},l=[],p={},u=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(a.o(r,f)){var h,g=r[f],m=!1,y=!1,v=!1,b="";switch((h=g?s(f):{type:"disposed",moduleId:f}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":o.onDeclined&&o.onDeclined(h),o.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":o.onDeclined&&o.onDeclined(h),o.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(h),o.ignoreUnaccepted||(m=new Error("Aborted because "+f+" is not accepted"+b));break;case"accepted":o.onAccepted&&o.onAccepted(h),y=!0;break;case"disposed":o.onDisposed&&o.onDisposed(h),v=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(f in p[f]=g,c(l,h.outdatedModules),h.outdatedDependencies)a.o(h.outdatedDependencies,f)&&(d[f]||(d[f]=[]),c(d[f],h.outdatedDependencies[f]));v&&(c(l,[h.moduleId]),p[f]=u)}r=void 0;for(var w,x=[],$=0;$<l.length;$++){var k=l[$],E=a.c[k];E&&(E.hot._selfAccepted||E.hot._main)&&p[k]!==u&&!E.hot._selfInvalidated&&x.push({module:k,require:E.hot._requireSelf,errorHandler:E.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var r,t=l.slice();t.length>0;){var o=t.pop(),s=a.c[o];if(s){var c={},p=s.hot._disposeHandlers;for($=0;$<p.length;$++)p[$].call(null,c);for(a.hmrD[o]=c,s.hot.active=!1,delete a.c[o],delete d[o],$=0;$<s.children.length;$++){var u=a.c[s.children[$]];u&&(e=u.parents.indexOf(o))>=0&&u.parents.splice(e,1)}}}for(var f in d)if(a.o(d,f)&&(s=a.c[f]))for(w=d[f],$=0;$<w.length;$++)r=w[$],(e=s.children.indexOf(r))>=0&&s.children.splice(e,1)},apply:function(e){for(var r in p)a.o(p,r)&&(a.m[r]=p[r]);for(var n=0;n<t.length;n++)t[n](a);for(var i in d)if(a.o(d,i)){var s=a.c[i];if(s){w=d[i];for(var c=[],u=[],f=[],h=0;h<w.length;h++){var g=w[h],m=s.hot._acceptedDependencies[g],y=s.hot._acceptedErrorHandlers[g];if(m){if(-1!==c.indexOf(m))continue;c.push(m),u.push(y),f.push(g)}}for(var v=0;v<c.length;v++)try{c[v].call(null,w)}catch(r){if("function"==typeof u[v])try{u[v](r,{moduleId:i,dependencyId:f[v]})}catch(n){o.onErrored&&o.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:f[v],error:n,originalError:r}),o.ignoreErrored||(e(n),e(r))}else o.onErrored&&o.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[v],error:r}),o.ignoreErrored||e(r)}}}for(var b=0;b<x.length;b++){var $=x[b],k=$.module;try{$.require(k)}catch(r){if("function"==typeof $.errorHandler)try{$.errorHandler(r,{moduleId:k,module:a.c[k]})}catch(n){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:r}),o.ignoreErrored||(e(n),e(r))}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:k,error:r}),o.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdatecar_tube=(e,n,i)=>{for(var s in n)a.o(n,s)&&(r[s]=n[s]);i&&t.push(i),o[e]&&(o[e](),o[e]=void 0)},a.hmrI.jsonp=function(e,i){r||(r={},t=[],n=[],i.push(c)),a.o(r,e)||(r[e]=a.m[e])},a.hmrC.jsonp=function(o,d,l,p,u,f){u.push(c),e={},n=d,r=l.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],o.forEach((function(r){a.o(i,r)&&void 0!==i[r]&&(p.push(s(r)),e[r]=!0)})),a.f&&(a.f.jsonpHmr=function(r,n){e&&!a.o(e,r)&&a.o(i,r)&&void 0!==i[r]&&(n.push(s(r)),e[r]=!0)})},a.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(a.p+a.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},a.O.j=e=>0===i[e];var d=(e,r)=>{var n,t,[o,s,c]=r,d=0;if(o.some((e=>0!==i[e]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(c)var l=c(a)}for(e&&e(r);d<o.length;d++)t=o[d],a.o(i,t)&&i[t]&&i[t][0](),i[o[d]]=0;return a.O(l)},l=self.webpackChunkcar_tube=self.webpackChunkcar_tube||[];l.forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l))})(),a.O(void 0,[415],(()=>a(2203))),a.O(void 0,[415],(()=>a(6952)));var o=a.O(void 0,[415],(()=>a(5722)));o=a.O(o)})();