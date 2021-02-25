(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{46:function(e,r,a){"use strict";a.r(r);var c=a(1),t=a(20),s=a.n(t),n=a(4),i=a(2),l=a(0),o=function(e){var r=e.history;return Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Login Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){r.replace("/")},children:"Login"})]})},h=a(8),j=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],d=function(e){var r=e.id,a=e.superhero,c=e.alter_ego,t=e.first_appearance,s=e.characters;return Object(l.jsx)("div",{className:"card ms-3 bg-dark text-white border-info m-2",style:{maxWidth:340},children:Object(l.jsxs)("div",{className:"row no-gutters",children:[Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"card-img",alt:a})}),Object(l.jsx)("div",{className:"col-md-8",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:a}),Object(l.jsx)("p",{className:"card-text",children:c}),c!==s&&Object(l.jsx)("p",{className:"card-text",children:s}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsx)("small",{className:"text-muted",children:t})}),Object(l.jsx)(n.b,{to:"./hero/".concat(r),children:"M\xe1s..."})]})})]})})},m=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto '));return j.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(l.jsx)("div",{className:" row card-columns animate__animated animate__fadeIn",children:a.map((function(e){return Object(l.jsx)(d,Object(h.a)({},e),e.id)}))})},b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"DC Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)(m,{publisher:"DC Comics"})]})},u=function(e){var r=e.history,a=Object(i.h)().heroeId,t=Object(c.useMemo)((function(){return e=a,j.find((function(r){return r.id===e}));var e}),[a]);if(!t)return Object(l.jsx)(i.a,{to:"/"});var s=t.superhero,n=t.publisher,o=t.alter_ego,h=t.first_appearance,d=t.characters;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Hero Screen"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("img",{src:"../assets/heroes/".concat(a,".jpg"),alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})})}),Object(l.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(l.jsx)("h3",{children:s}),Object(l.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"Alter ego: "}),o]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"Publisher: "}),n]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"First Appearace: "}),h]})]}),Object(l.jsx)("h5",{children:"Characters "}),Object(l.jsxs)("p",{children:[d," "]}),Object(l.jsx)("button",{className:"btn btn-outline-info",onClick:function(){var e;e="DC Comics"===n?"dc":"marvel",r.length<=2?r.push("/".concat(e)):r.goBack()},children:"Return"})]})]})]})},p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Marvel Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)(m,{publisher:"Marvel Comics"})]})},v=a(12),O=a(11),x=a(22),f=a.n(x),C=function(e){var r=e.history,a=Object(i.g)(),t=f.a.parse(a.search).q,s=void 0===t?"":t,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(v.a)(r,2),t=a[0],s=a[1];return[t,function(e){var r=e.target;s(Object(h.a)(Object(h.a)({},t),{},Object(O.a)({},r.name,r.value)))},function(){s(e)}]}({hero:s}),o=Object(v.a)(n,2),m=o[0],b=o[1],u=m.hero,p=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLowerCase(),j.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})))}(u)}),[u]);return Object(c.useEffect)((function(){r.push("?q=".concat(u))}),[u]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Search Screen"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-4",children:[Object(l.jsx)("h4",{children:"Search Form"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("?q=".concat(u))},children:[Object(l.jsx)("input",{type:"text",name:"hero",className:"form-control",onChange:b,value:u,placeholder:"Find your Hero",autoComplete:"off"}),Object(l.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search..."})]})]}),Object(l.jsxs)("div",{className:"row col-md-8",children:[Object(l.jsx)("h4",{children:"Results"}),Object(l.jsx)("hr",{}),""===s&&Object(l.jsx)("div",{className:"alert alert-info",children:"Search a Hero :)"}),""!==s&&0===p.length&&Object(l.jsxs)("div",{className:"alert alert-danger",children:[s," is not a Hero or is not found :c"]}),p.map((function(e){return Object(l.jsx)(d,Object(h.a)({},e),e.id)}))]})]})]})},g=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(l.jsx)(n.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(l.jsx)("div",{className:"navbar-collapse",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(l.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(l.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Logout"})})})]})},_=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{}),Object(l.jsx)("div",{className:"container mt-2",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/dc",component:b}),Object(l.jsx)(i.b,{exact:!0,path:"/marvel",component:p}),Object(l.jsx)(i.b,{exact:!0,path:"/hero/:heroeId",component:u}),Object(l.jsx)(i.b,{exact:!0,path:"/search",component:C}),Object(l.jsx)(i.a,{to:"/marvel"})]})})]})},N=function(){return Object(l.jsx)(n.a,{children:Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/login",component:o}),Object(l.jsx)(i.b,{path:"/",component:_})]})})})},y=function(){return Object(l.jsx)(N,{})};s.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.da4b3221.chunk.js.map