(()=>{"use strict";var e,r={63:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(81),i=n.n(t),a=n(645),s=n.n(a)()(i());s.push([e.id,".listings {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.listing {\r\n    box-sizing: border-box;\r\n    text-align: left;\r\n    display: inline-block;\r\n    padding: 30px 50px;\r\n    width: 350px;\r\n    margin: 15px;\r\n    margin-bottom: 50px;\r\n    border-radius: 8px;\r\n    border: 2px solid black;\r\n}\r\n\r\n.listing h2 {\r\n    height: 2.5em;\r\n}\r\n\r\n.preview {\r\n    height: 150px;\r\n    width: 250px;\r\n    text-align: center;\r\n}\r\n\r\n.preview>img {\r\n    object-fit: contain;\r\n    height: 150px;\r\n    width: 250px;\r\n}\r\n\r\n.no-cars {\r\n    margin: auto;\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.data-info {\r\n    margin-top: 8px;\r\n}\r\n\r\nh3 {\r\n    font-size: 20px;\r\n}\r\n\r\n.button-carDetails {\r\n    background-color: #40B3FF;\r\n    border: none;\r\n    color: white;\r\n    padding: 10px;\r\n    width: 100px;\r\n    margin: 2px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#page-size-select {\r\n    padding: 10px;\r\n    width: 65px;\r\n    margin: 2px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n}\r\n\r\n.page-size{\r\n    margin-left: 20px;\r\n}\r\n\r\n.loader {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 45%;\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #40B3FF;\r\n    width: 80px;\r\n    height: 80px;\r\n    -webkit-animation: spin 2s linear infinite; /* Safari */\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  /* Safari */\r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n\r\n",""]);const o=s},79:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(81),i=n.n(t),a=n(645),s=n.n(a)()(i());s.push([e.id,".listing-props {\r\n    margin-top: 16px;\r\n    list-style: none;\r\n}\r\n\r\n.listing-props>li {\r\n    font-size: 20px;\r\n}\r\n.listing-props>li>span {\r\n    font-weight: 600;\r\n    display: inline-block;\r\n    width: 80px;\r\n}\r\n\r\n.listings-buttons {\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-top: 34px;\r\n}\r\n\r\n.button-list {\r\n    cursor: pointer;\r\n    background-color: #40B3FF;\r\n    border: none;\r\n    color: white;\r\n    margin: auto;\r\n    padding: 11px 30px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.details-info {\r\n    max-width: 700px;\r\n    margin: auto;\r\n}\r\n\r\n.details-info>img {\r\n    display: block;\r\n    margin: auto;\r\n    margin-bottom: 16px;\r\n    max-height: 455px;\r\n}\r\n\r\n.description-para {\r\n    margin-top: 16px;\r\n    font-size: 16px;\r\n}",""]);const o=s},176:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(81),i=n.n(t),a=n(645),s=n.n(a)()(i());s.push([e.id,'/* Add padding to containers */\r\n\r\n.container {\r\n    background-color: white;\r\n    padding: 16px;\r\n    text-align: center;\r\n    width: 500px;\r\n    margin: auto;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type="text"], input[type="number"], input[type="password"], input[type="email"], input[type="file"] {\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    width: 100%;\r\n    border: none;\r\n    background: #f1f1f1;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput[type="text"]:focus, input[type="number"]:focus, input[type="password"]:focus, input[type="email"]:focus, input[type="file"]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.registerbtn {\r\n    background-color: #40B3FF;\r\n    color: white;\r\n    padding: 16px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    opacity: 0.9;\r\n    border-radius: 5px;\r\n}\r\n\r\n.registerbtn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n    color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the "sign in" section */\r\n\r\n.signin {\r\n    padding: 16px;\r\n    background-color: #f1f1f1;\r\n    text-align: center;\r\n}',""]);const o=s},689:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(81),i=n.n(t),a=n(645),s=n.n(a)()(i());s.push([e.id,"nav {\r\n    background-color: #333;\r\n    overflow: hidden;\r\n}\r\n\r\n#profile, #guest {\r\n    float: right;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\nnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n\r\n/* Change the color of links on hover */\r\n\r\nnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\nnav a.active {\r\n    background-color: #40B3FF;\r\n    color: white;\r\n}",""]);const o=s},534:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(81),i=n.n(t),a=n(645),s=n.n(a)()(i());s.push([e.id,"#notifications {\r\n    float: right;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    margin: 1em;\r\n}\r\n\r\n.notification {\r\n    font-size: 1.5em;\r\n    color: #ffffff;\r\n    display: none;\r\n    text-align: right;\r\n}\r\n\r\n.notification>span {\r\n    display: inline-block;\r\n    padding:  0.5em 2em 0.5em 2em;\r\n    border-radius: 10px;\r\n}\r\n\r\n#loadingBox>span {\r\n    background: #7CB3E9;\r\n}\r\n#infoBox>span {\r\n    background: #393;\r\n}\r\n#errorBox>span {\r\n    background: #F50;\r\n}",""]);const o=s},625:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(81),i=n.n(t),a=n(645),s=n.n(a)()(i());s.push([e.id,".searchCars input {\r\n  display: block;\r\n  width: 400px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.searchCars {\r\n  width: 100vw;\r\n  position: relative;\r\n\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n",""]);const o=s},358:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(81),i=n.n(t),a=n(645),s=n.n(a)()(i());s.push([e.id,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #333333;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 16px;\r\n}\r\n\r\n#container {\r\n    box-sizing: border-box;\r\n    min-height: 100vh;\r\n    position: relative;\r\n    padding-bottom: 64px;\r\n}",""]);const o=s},898:(e,r,n)=>{n.d(r,{Z:()=>m});var t=n(81),i=n.n(t),a=n(645),s=n.n(a),o=n(358),c=n(249),l=n(63),p=n(176),d=n(689),u=n(79),g=n(625),h=n(534),f=s()(i());f.i(o.Z),f.i(c.Z),f.i(l.Z),f.i(p.Z),f.i(d.Z),f.i(u.Z),f.i(g.Z),f.i(h.Z),f.push([e.id,"\r\n\r\n",""]);const m=f},249:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(81),i=n.n(t),a=n(645),s=n.n(a)()(i());s.push([e.id,"#main {\r\n    background-color: white;\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    font-size: 50px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n}\r\n\r\n.button {\r\n    background-color: #40B3FF;\r\n    /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#welcome-container {\r\n    width: 50%;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.hero {\r\n    margin: 40px;\r\n    max-width: 240px;\r\n}\r\n\r\n#button-div {\r\n    padding-top: 10px;\r\n    width: 37%;\r\n    margin: auto;\r\n    display: flex;\r\n}",""]);const o=s},614:(e,r,n)=>{var t={};n.r(t),n.d(t,{defaultPageSize:()=>u,getPage:()=>g,getPageSize:()=>h,getUserData:()=>l,removeUserData:()=>d,setUserData:()=>p});var i=n(445),a=n(481);const s="https://cars-rest-jwt.herokuapp.com/api/users/register",o="https://cars-rest-jwt.herokuapp.com/api/users/login",c="https://cars-rest-jwt.herokuapp.com/api/users/logout";function l(){const e=sessionStorage.getItem("user");return e?JSON.parse(e):void 0}function p(e){sessionStorage.setItem("user",JSON.stringify(e))}function d(){sessionStorage.removeItem("user")}const u=6;function g(e){let r=e[0].split("=")[1];return Number(r)||1}function h(e){let r=e[1],n=r?r.split("=")[1]:u;return Number(n)}async function f(e,r){try{const n=await fetch(e,r);if(0==n.ok){const e=await n.json();throw new Error(e.message)}try{return await n.json()}catch(e){return n}}catch(e){throw alert(e.message),e}}function m(e="get",r,n){let t={method:e,headers:{"Access-Control-Allow-Origin":"http://localhost:8080","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE","Access-Control-Allow-Headers":"Content-Type"}};const i=l();return i&&(t.headers.Authorization="Bearer "+i.accessToken),r&&(t.headers["Content-Type"]="application/json",t.body=n?r:JSON.stringify(r)),n&&delete t.headers["Content-Type"],t}async function y(e){return await f(e,m())}async function b(e,r){return await f(e,m("post",r))}const v={register:async function(e){const r=await b(s,e);return p(r),r},login:async function(e){const r=await b(o,e);return p(r),r},logout:async function(){const e=await b(c);return d(),e}},w="https://cars-rest-jwt.herokuapp.com",x={getRecord:async function(e){return await y(`${w}/api/cars/${e}`)},getRecordsByUserPagination:async function(e,r=1,n){return await y(`${w}/api/cars?ownerId=${e}&page=${r-1}&pageSize=${n}`)},getRecordsByKeywordPagination:async function(e,r=1,n){return await y(`${w}/api/cars?keyword=${e}&page=${r-1}&pageSize=${n}`)},getRecordsPagination:async function(e=1,r){return await y(`${w}/api/cars?page=${e-1}&pageSize=${r}`)},getCollectionSize:async function(){return await y(`${w}/api/cars/count`)},getCollectionSizeByKeyword:async function(e){return await y(`${w}/api/cars/count?keyword=${e}`)},getCollectionSizeByUser:async function(e){return await y(`${w}/api/cars/count?ownerId=${e}`)},createRecord:async function(e,r){return await async function(e,r,n){return await f(e,m("post",r,n))}(`${w}/api/cars`,e,r)},editRecord:async function(e,r,n){return await async function(e,r,n){return await f(e,m("put",r,n))}(`${w}/api/cars/${e}`,r,n)},deleteRecord:async function(e){return await async function(e){return await f(e,m("delete"))}(`${w}/api/cars/${e}`)}};let $,S,P,M;var k=n(72);let z,C,q,E,Z,N,B;const R=e=>i.dy`
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
                </div>`,D=()=>i.dy`<div class="loader"></div>`;var O=n(345);let U,F,j,T,A,I,Y,L,H,_,K,J,G;async function W(e,r,n,t){return((e,r,n,t,a)=>i.dy`
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
       
        ${0==e.length?i.dy`<p class="no-cars">No cars in database.</p>`:i.dy`${e.map(R)}`}
    </div>
</section>`)(await F.getRecordsPagination(e,n),e,r,n,t)}const Q=(e,r,n,t,a)=>i.dy`
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
               ${0==e.length?i.dy` <p class="no-cars"> You haven't listed any cars yet.</p>`:i.dy`${e.map(R)}`}
            </div>
        </section>`;let V,X,ee,re;const ne=(e,r,n,t,a,s,o)=>i.dy`
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
                ${t>1?i.dy`<a class="button-list" href="/search?year=${n}&page=${t-1}&pageSize=${s}">&lt; Prev</a></a>`:""}
                ${t<a?i.dy`<a class="button-list" href="/search?year=${n}&page=${t+1}&pageSize=${s}">Next &gt;</a></a>`:""}`:""} 
                Show on page
                    <select @change=${o} .value=${s} id="page-size-select">
                        <option value="6" selected>6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>   
            </div>
        ${0==e.length?i.dy` <p class="no-cars"> No results.</p>`:i.dy`${e.map(R)}`}
    </div>
</section>`;let te,ie,ae,se;var oe=n(379),ce=n.n(oe),le=n(795),pe=n.n(le),de=n(569),ue=n.n(de),ge=n(565),he=n.n(ge),fe=n(216),me=n.n(fe),ye=n(589),be=n.n(ye),ve=n(898),we={};we.styleTagTransform=be(),we.setAttributes=he(),we.insert=ue().bind(null,"head"),we.domAPI=pe(),we.insertStyleElement=me(),ce()(ve.Z,we),ve.Z&&ve.Z.locals&&ve.Z.locals;const xe=document.querySelector("main"),$e=document.querySelector("nav"),Se=new class{constructor(){}createRenderHandler(e){return function(r){(0,i.sY)(r,e)}}},Pe=Se.createRenderHandler(xe),Me=Se.createRenderHandler($e),ke=(new class{constructor(){}createRedirectHandler(){return a.Z.redirect}}).createRedirectHandler();!function(e){z=e}(Pe),function(e,r,n,t){$=e,S=r,P=n,M=t}(Me,ke,v,t),function(e,r,n){C=e,q=r,E=n}(Pe,ke,v),function(e,r,n){Z=e,N=r,B=n}(Pe,ke,v),function(e,r,n){U=e,F=r,j=n}(Pe,x,t),function(e,r,n){T=e,A=r,I=n}(Pe,ke,x),function(e,r,n,t){Y=e,L=r,H=n,_=t}(Pe,ke,x,t),function(e,r,n){K=e,J=r,G=n}(Pe,ke,x),function(e,r,n,t){V=e,X=r,ee=n,re=t}(Pe,x,t,t),function(e,r,n,t){te=e,ae=r,ie=n,se=t}(Pe,ke,x,t),(0,a.Z)((async function(e,r){const n=M.getUserData();$(((e,r)=>i.dy`
 <a class="active"  href=${e?"/listings":"/home"}>Home</a>
                <a href='/listings'>All Offers</a>
                <a href='/search'>Search</a>
                ${e?i.dy` <div id="profile">
                    <a>Welcome ${e.username}</a>
                    <a href='/profile'>My Offers</a>
                    <a href='/create'>Add Offer</a>
                    <a @click=${async function(){await P.logout(),S("/home")}} href='javascript:void(0)'>Logout</a>
                </div>`:i.dy`<div id="guest">
                    <a href='/login'>Login</a>
                    <a href='/register'>Register</a>
                </div>`}
               `)(n)),r()})),(0,a.Z)("index.html","/"),(0,a.Z)("/","/home"),(0,a.Z)("/home",(async function(){z(i.dy` 
      <section id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Finder</h1>
                <img class="hero" src="${k}" alt="carIntro">
                <h2>To see all the offers click the link below:</h2>
                <div>
                    <a href='/listings' class="button">Offers</a>
                </div>
            </div>
        </section>`)})),(0,a.Z)("/login",(async function(e){const r={invalidFields:{},errorMessages:[]};C(i.dy` 
   <section id="login">
            <div class="container">
                <form @submit=${async function(e){e.preventDefault();const n=new FormData(e.target);r.errorMessages=[];const t=n.get("username"),i=n.get("password");if(""==t&&r.errorMessages.push("Username is required"),""==i&&r.errorMessages.push("Password is required"),0!=r.errorMessages.length)return alert(r.errorMessages.join("\n"));const a={username:t,password:i};await E.login(a),q("/listings")}} id="login-form" action="#" method="post">
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
        </section>`)})),(0,a.Z)("/register",(async function(e){const r={invalidFields:{},errorMessages:[]};Z(i.dy` 
  <section id="register">
            <div class="container">
                <form @submit=${async function(e){e.preventDefault();const n=new FormData(e.target);r.errorMessages=[];const t=n.get("username").trim(),i=n.get("email").trim(),a=n.get("password").trim(),s=n.get("repeatPass").trim();if(""==t&&r.errorMessages.push("Username is required"),(t.length<3||t.length>20)&&r.errorMessages.push("Username must be between 3 and 20 characters long"),""==i&&r.errorMessages.push("Email is required"),i.length>50&&r.errorMessages.push("Email must less than 50 characters long"),""==a&&r.errorMessages.push("Password is required"),a.length<3&&r.errorMessages.push("Password must at least 3 characters long"),""==s&&r.errorMessages.push("Repeat password is required"),0!=r.errorMessages.length)return alert(r.errorMessages.join("\n"));if(a!=s)return alert("Passwords dont match");const o={username:t,password:a,email:i,roles:["ROLE_USER"]};await B.register(o),N("/listings")}} id="register-form">
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
        </section>`)})),(0,a.Z)("/listings",(async function(e){let r=e.querystring.split("&"),n=j.getPage(r),t=j.getPageSize(r);const i=document.querySelector("#page-size-select");i&&(i.value=t);let a=await F.getCollectionSize(),s=Math.ceil(a/t);U((0,O.C)(W(n,s,t,(async function e(){a=await F.getCollectionSize();const r=document.querySelector("#page-size-select");t=r?Number(r.value):j.defaultPageSize,s=Math.ceil(a/t),n=1,U((0,O.C)(W(n,s,t,e),D()))})),D()))})),(0,a.Z)("/create",(async function(e){const r={invalidFields:{},errorMessages:[]};T(i.dy`
  <section id="create-listing">
            <div class="container">
                <form @submit=${async function(e){e.preventDefault();const n=new FormData(e.target);r.errorMessages=[];const t=n.get("brand").trim(),i=n.get("model").trim(),a=n.get("description").trim();let s=n.get("year").trim(),o=n.get("price").trim();if(""==t&&r.errorMessages.push("Brand is required"),""==i&&r.errorMessages.push("Model is required"),""==a&&r.errorMessages.push("Description is required"),""==s&&r.errorMessages.push("Year is required"),(isNaN(s)||Number(s)<1950)&&r.errorMessages.push("Year must be positive number"),""==o&&r.errorMessages.push("Price is required"),(isNaN(o)||Number(o)<0)&&r.errorMessages.push("Price must be positive number"),0!=r.errorMessages.length)return alert(r.errorMessages.join("\n"));o=Number(o),s=Number(s);const c=document.querySelector("#file");let l;c&&(l=c.files[0]);const p=new FormData;p.append("brand",t),p.append("model",i),p.append("description",a),p.append("year",s),p.append("imageUrl",l),p.append("price",o),await I.createRecord(p,!0),A("/listings")}} id="create-form">
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
        </section>`)})),(0,a.Z)("/details/:id",(async function(e){const r=e.params.id,n=await H.getRecord(r),t=_.getUserData();let a;t&&(a=t.id),Y(((e,r,n)=>i.dy`
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
        </section>`)(n,a,(async function(e){confirm("Are you sure you want to delete this item?")&&(await H.deleteRecord(n.id),L("/listings"))})))})),(0,a.Z)("/edit/:id",(async function(e){const r=e.params.id,n=await G.getRecord(r),t={invalidFields:{},errorMessages:[]};K(((e,r)=>i.dy`
  <section id="edit-listing">
            <div class="container">

                <form @submit=${r} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
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
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>`)(n,(async function(e){e.preventDefault();const r=new FormData(e.target);t.errorMessages=[];const i=r.get("brand").trim(),a=r.get("model").trim(),s=r.get("description").trim();let o=r.get("year").trim(),c=r.get("price").trim();if(""==i&&t.errorMessages.push("Brand is required"),""==a&&t.errorMessages.push("Model is required"),""==s&&t.errorMessages.push("Description is required"),""==o&&t.errorMessages.push("Year is required"),(isNaN(o)||Number(o)<1950)&&t.errorMessages.push("Year must be positive number"),""==c&&t.errorMessages.push("Price is required"),(isNaN(c)||Number(c)<0)&&t.errorMessages.push("Price must be positive number"),0!=t.errorMessages.length)return alert(t.errorMessages.join("\n"));c=Number(c),o=Number(o);const l=document.querySelector("#file");let p;l&&(p=l.files[0]);const d=new FormData;d.append("brand",i),d.append("model",a),d.append("description",s),d.append("year",o),d.append("imageUrl",p),d.append("price",c),await G.editRecord(n.id,d,!0),J("/listings")})))})),(0,a.Z)("/profile",(async function(e){let r=e.querystring.split("&"),n=re.getPage(r),t=re.getPageSize(r);const i=document.querySelector("#page-size-select");i&&(i.value=t);const a=ee.getUserData();let s=await X.getCollectionSizeByUser(a.id),o=Math.ceil(s/t),c=await X.getRecordsByUserPagination(a.id,n,t);V(Q(c,n,o,t,(async function e(){s=await X.getCollectionSizeByUser(a.id);const r=document.querySelector("#page-size-select");t=r?Number(r.value):re.defaultPageSize,o=Math.ceil(s/t),n=1,c=await X.getRecordsByUserPagination(a.id,n,t),V(Q(c,n,o,t,e))})))})),(0,a.Z)("/search",(async function(e){let r=e.querystring.split("&"),n=function(e){let r=e[1],n=r?r.split("=")[1]:1;return Number(n)}(r),t=function(e){let r=e[2],n=r?r.split("=")[1]:se.defaultPageSize;return Number(n)}(r);const i=document.querySelector("#page-size-select");i&&(i.value=t);let a=function(e){return e[0].split("=")[1]}(r),s=await ie.getCollectionSizeByKeyword(a),o=Math.ceil(s/t),c=await ie.getRecordsByKeywordPagination(a,n,t);async function l(){const e=document.querySelector("#page-size-select");t=e?Number(e.value):se.defaultPageSize;const r=encodeURIComponent(document.getElementById("search-input").value.trim());if(!r)return alert("Enter search criteria");ae("/search?keyword="+r+"&page="+n+"&pageSize="+t)}te(ne(c,l,a,n,o,t,(async function e(){s=await ie.getCollectionSizeByKeyword(a);const r=document.querySelector("#page-size-select");t=r?Number(r.value):se.defaultPageSize,o=Math.ceil(s/t),n=1,c=await ie.getRecordsByKeywordPagination(a,n,t),te(ne(c,l,a,n,o,t,e))})))})),a.Z.start()},72:(e,r,n)=>{e.exports=n.p+"61d461a97bad167c43b2.webp"}},n={};function t(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={id:e,exports:{}};return r[e](a,a.exports,t),a.exports}t.m=r,e=[],t.O=(r,n,i,a)=>{if(!n){var s=1/0;for(p=0;p<e.length;p++){for(var[n,i,a]=e[p],o=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(o=!1,a<s&&(s=a));if(o){e.splice(p--,1);var l=i();void 0!==l&&(r=l)}}return r}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,i,a]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={143:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var i,a,[s,o,c]=n,l=0;if(s.some((r=>0!==e[r]))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(c)var p=c(t)}for(r&&r(n);l<s.length;l++)a=s[l],t.o(e,a)&&e[a]&&e[a][0](),e[s[l]]=0;return t.O(p)},n=self.webpackChunkcar_tube=self.webpackChunkcar_tube||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var i=t.O(void 0,[36],(()=>t(614)));i=t.O(i)})();