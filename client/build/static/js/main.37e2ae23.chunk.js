(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},76:function(e,t,a){e.exports=a(91)},81:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(61),o=a.n(c),l=(a(81),a(3)),i=a(10),s=a(8),u=a(70),m=a(73),d=a(103),p=a(101),E=a(69),f=a(6),b=a(41),g=a(64),h=a(71),O=a(26),v=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(l.a)(Object(l.a)({},e),{},{products:Object(O.a)(t.products)});case"UPDATE_CATEGORIES":return Object(l.a)(Object(l.a)({},e),{},{categories:Object(O.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(l.a)(Object(l.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(O.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:[].concat(Object(O.a)(e.cart),Object(O.a)(t.products))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(l.a)(Object(l.a)({},e),{},{cartOpen:a.length>0,cart:a});case"UPDATE_CART_QUANTITY":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var y=["value"],j=Object(n.createContext)(),w=j.Provider,_=function(e){e.value;var t,a=Object(h.a)(e,y),c=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(v,t)),o=Object(f.a)(c,2),l=o[0],i=o[1];return console.log(l),r.a.createElement(w,Object.assign({value:[l,i]},a))},k=function(){return Object(n.useContext)(j)};function T(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var s=l.getAll();s.onsuccess=function(){n(s.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var N,C,x,A,R,S=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,o=e.quantity,s=k(),u=Object(f.a)(s,2),m=u[0],d=u[1],p=m.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,o," ",function(e,t){return 1===t?e:e+"s"}("item",o)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",{onClick:function(){var t=p.find((function(e){return e._id===n}));t?(d({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),T("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(d({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})}),T("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},D=a(22),P=a(102),U=Object(P.a)(N||(N=Object(D.a)(["\n\tquery getCheckout($products: [ID]!) {\n\t\tcheckout(products: $products) {\n\t\t\tsession\n\t\t}\n\t}\n"]))),I=Object(P.a)(C||(C=Object(D.a)(["\n\tquery getProducts($category: ID) {\n\t\tproducts(category: $category) {\n\t\t\t_id\n\t\t\tname\n\t\t\tdescription\n\t\t\tprice\n\t\t\tquantity\n\t\t\timage\n\t\t\tcategory {\n\t\t\t\t_id\n\t\t\t}\n\t\t}\n\t}\n"]))),$=(Object(P.a)(x||(x=Object(D.a)(["\n\t{\n\t\tproducts {\n\t\t\t_id\n\t\t\tname\n\t\t\tdescription\n\t\t\tprice\n\t\t\tquantity\n\t\t\tcategory {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]))),Object(P.a)(A||(A=Object(D.a)(["\n\t{\n\t\tcategories {\n\t\t\t_id\n\t\t\tname\n\t\t}\n\t}\n"])))),F=Object(P.a)(R||(R=Object(D.a)(["\n\t{\n\t\tuser {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\torders {\n\t\t\t\t_id\n\t\t\t\tpurchaseDate\n\t\t\t\tproducts {\n\t\t\t\t\t_id\n\t\t\t\t\tname\n\t\t\t\t\tdescription\n\t\t\t\t\tprice\n\t\t\t\t\tquantity\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),Q=a(44),L=a.n(Q);var M=function(e){Object(b.a)(e);var t=k(),a=Object(f.a)(t,2),c=a[0],o=a[1],l=c.currentCategory,i=Object(g.a)(I),s=i.loading,u=i.data;return Object(n.useEffect)((function(){u?(o({type:"UPDATE_PRODUCTS",products:u.products}),u.products.forEach((function(e){T("products","put",e)}))):s||T("products","get").then((function(e){o({type:"UPDATE_PRODUCTS",products:e})}))}),[u,o]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),c.products.length?r.a.createElement("div",{className:"flex-row"},(l?c.products.filter((function(e){return e.category._id===l})):c.products).map((function(e){return r.a.createElement(S,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),s?r.a.createElement("img",{src:L.a,alt:"loading"}):null)};var q=function(e){Object(b.a)(e);var t=k(),a=Object(f.a)(t,2),c=a[0],o=a[1],l=c.categories,i=Object(g.a)($),s=i.loading,u=i.data;return Object(n.useEffect)((function(){u?(o({type:"UPDATE_CATEGORIES",categories:u.categories}),u.categories.forEach((function(e){T("categories","put",e)}))):s||T("categories","get").then((function(e){o({type:"UPDATE_CATEGORIES",categories:e})}))}),[u,s,o]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),l.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,o({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},G=a(16),W=a.n(G),Y=a(25),B=function(e){var t=e.item,a=k(),n=Object(f.a)(a,2)[1];return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(n({type:"REMOVE_FROM_CART",_id:t._id}),T("cart","delete",Object(l.a)({},t))):(n({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),T("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(a)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:"REMOVE_FROM_CART",_id:e._id}),T("cart","delete",Object(l.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},H=a(66),V=a(67),J=a(53),z=a.n(J),K=new(function(){function e(){Object(H.a)(this,e)}return Object(V.a)(e,[{key:"getProfile",value:function(){return z()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return z()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),X=a(68),Z=a(99),ee=(a(90),Object(X.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),te=function(){var e=Object(Z.a)(U),t=Object(f.a)(e,2),a=t[0],c=t[1].data,o=k(),l=Object(f.a)(o,2),i=l[0],s=l[1];function u(){s({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){function e(){return(e=Object(Y.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("cart","get");case 2:t=e.sent,s({type:"ADD_MULTIPLE_TO_CART",products:Object(O.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.cart.length||function(){e.apply(this,arguments)}()}),[i.cart.length,s]),Object(n.useEffect)((function(){c&&ee.then((function(e){e.redirectToCheckout({sessionId:c.checkout.session})}))}),[c]),i.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:u},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),i.cart.length?r.a.createElement("div",null,i.cart.map((function(e){return r.a.createElement(B,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var e=0;return i.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),K.loggedIn()?r.a.createElement("button",{onClick:function(){var e=[];i.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),a({variables:{products:e}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:u},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},ae=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(q,null),r.a.createElement(M,null),r.a.createElement(te,null))};var ne=function(){var e=k(),t=Object(f.a)(e,2),a=t[0],c=t[1],o=Object(s.f)().id,u=Object(g.a)(I),m=Object(f.a)(u,2),d=m[0],p=m[1],E=Object(g.a)(I),b=E.loading,h=E.data,O=a.products,v=a.cart;return Object(n.useEffect)((function(){O.length?p(O.find((function(e){return e._id===o}))):h?(c({type:"UPDATE_PRODUCTS",products:h.products}),h.products.forEach((function(e){T("products","put",e)}))):b||T("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[O,h,b,c,o]),r.a.createElement(r.a.Fragment,null,d?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,d.name),r.a.createElement("p",null,d.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",d.price," ",r.a.createElement("button",null,"Add to Cart"),r.a.createElement("button",{disabled:!v.find((function(e){return e._id===d._id})),onClick:function(){c({type:"REMOVE_FROM_CART",_id:d._id}),T("cart","delete",Object(l.a)({},d))}}," ","Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(d.image),alt:d.name})):null,b?r.a.createElement("img",{src:L.a,alt:"loading"}):null,r.a.createElement(te,null))};var re,ce,oe,le=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},ie=function(){return r.a.createElement("div",null,r.a.createElement(le,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},se=a(31),ue=a(100),me=Object(P.a)(re||(re=Object(D.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),de=Object(P.a)(ce||(ce=Object(D.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),pe=Object(P.a)(oe||(oe=Object(D.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var Ee=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(f.a)(t,2),c=a[0],o=a[1],s=Object(ue.a)(me),u=Object(f.a)(s,2),m=u[0],d=u[1].error,p=function(){var e=Object(Y.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,K.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(se.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var fe=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(f.a)(t,2),c=a[0],o=a[1],s=Object(ue.a)(pe),u=Object(f.a)(s,1)[0],m=function(){var e=Object(Y.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,K.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(se.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var be=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,K.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return K.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var ge=function(){var e=Object(ue.a)(de),t=Object(f.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(Y.a)(W.a.mark((function e(){var a,n,r,c,o,l;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){T("cart","delete",e)}));case 11:if(!n.length){e.next=18;break}return e.next=14,t({variables:{products:n}});case 14:o=e.sent,l=o.data,l.addOrder.products.forEach((function(e){T("cart","delete",e)}));case 18:setTimeout((function(){window.location.assign("/")}),3e3);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(le,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the homepage")))};var he=function(){var e,t=Object(g.a)(F).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},Oe=Object(u.a)({uri:"/graphql"}),ve=Object(E.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(l.a)(Object(l.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),ye=new m.a({link:ve.concat(Oe),cache:new d.a});var je=function(){return r.a.createElement(p.a,{client:ye},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(_,null,r.a.createElement(be,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:ae}),r.a.createElement(s.a,{exact:!0,path:"/login",component:Ee}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:fe}),r.a.createElement(s.a,{exact:!0,path:"/orderHistory",component:he}),r.a.createElement(s.a,{exact:!0,path:"/products/:id",component:ne}),r.a.createElement(s.a,{exact:!0,path:"/success",component:ge}),r.a.createElement(s.a,{component:ie}))))))},we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");we?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_e(t,e)}))}}()}},[[76,1,2]]]);
//# sourceMappingURL=main.37e2ae23.chunk.js.map