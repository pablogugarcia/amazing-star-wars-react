(this["webpackJsonpamazing-star-wars-app"]=this["webpackJsonpamazing-star-wars-app"]||[]).push([[0],{158:function(e,t,a){e.exports={container:"MainLayout_container__2V38b",title:"MainLayout_title__1gIHn"}},205:function(e,t,a){e.exports=a.p+"static/media/home.87954d9a.svg"},206:function(e,t,a){e.exports=a.p+"static/media/loading.cd795592.gif"},238:function(e,t,a){e.exports=a(547)},243:function(e,t,a){},244:function(e,t,a){},454:function(e,t,a){},455:function(e,t,a){},456:function(e,t,a){},547:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=(a(243),a(46)),o=a(23),u=(a(244),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"home-title"},"STAR WARS"))}),s=a(98),m=a.n(s),f=a(205),d=a.n(f);function p(e){switch(e){case"end":return{justifyContent:"flex-end"};case"center":return{justifyContent:"center"};case"start":return{justifyContent:"flex-start"};default:return{justifyContent:"flex-end"}}}var E=function(e){var t=e.items,a=e.position;return r.a.createElement("nav",{className:m.a.container},r.a.createElement(i.b,{to:"/",className:m.a.homeIcon},r.a.createElement("img",{src:d.a,alt:"home"})," ","HOME"),r.a.createElement("ul",{className:m.a.menu,style:p(a)},t.map((function(e){return r.a.createElement("li",{key:e,className:m.a.items},r.a.createElement(i.b,{to:e},e))}))))},h=a(156),v=a.n(h),b=function(){return r.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1}},r.a.createElement(v.a,{width:"100vw",height:"100vh",params:{particles:{number:{value:250,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.02},move:{direction:h.MoveDirection.right,speed:.15},size:{value:1.5},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"bubble"}},modes:{push:{particles_nb:1},bubble:{size:10}}},retina_detect:!0}}))},g=a(32),y=a(58),x=(a(454),a(565)),O=a(562),_=a(561),j=(a(455),function(e){var t=e.text,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){(new _.a).to(a.current,t.split("").length/2,{top:"-170%"})}),[]),r.a.createElement("div",{style:{padding:5,border:"1px solid grey",borderRadius:"10px"}},r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"crawl"},r.a.createElement("div",{className:"content",ref:a},r.a.createElement("p",null,t)))))}),N=(a(456),a(206)),w=a.n(N),S=function(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",{src:w.a,alt:"LOADING",className:"loading"}),r.a.createElement("span",{className:"loading-label"},"Loading..."))},I={films:[],characters:[],totalCharacters:0},P={state:I,dispatch:function(){}},L=r.a.createContext(P),k=L.Provider,C=function(e,t){switch(t.type){case"SET_ALL_FILMS":return Object(g.a)(Object(g.a)({},e),{},{films:t.payload});case"SET_ALL_PEOPLE":return Object(g.a)(Object(g.a)({},e),{},{characters:t.payload});case"SET_ALL_PEOPLE_PAGINATION":return Object(g.a)(Object(g.a)({},e),{},{characters:t.payload.results,totalCharacters:t.payload.count});default:return e}},T=function(e){var t=e.children,a=Object(n.useReducer)(C,I),l=Object(y.a)(a,2),c=l[0],i=l[1];return r.a.createElement(k,{value:{state:c,dispatch:i}},t)},A=a(564),F={headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},R={method:"GET"},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R;return new Promise((function(a,n){fetch(e,Object(g.a)(Object(g.a)({},F),t)).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(){return n(A.a.error("Upps something went wrong"))}))}))},z="https://swapi.dev/api",G={films:"".concat(z,"/films/"),people:"".concat(z,"/people/"),peopleWithPagination:function(e){return"".concat(z,"/people/?page=").concat(e)}},H=function(e){M(G.films).then((function(t){e({type:"SET_ALL_FILMS",payload:t.results})}))},J=function(e,t){M(G.peopleWithPagination(t)).then((function(t){e({type:"SET_ALL_PEOPLE_PAGINATION",payload:t})}))},B=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(L),o=c.dispatch,u=c.state;Object(n.useEffect)((function(){var e=setTimeout((function(){0===u.films.length&&H(o)}),3e3);return function(){return clearTimeout(e)}}),[]),Object(n.useEffect)((function(){l(u.films)}),[u.films]);return 0===u.films.length?r.a.createElement(S,null):r.a.createElement("div",{className:"film-screen-container"},a.map((function(e){return r.a.createElement(x.a,{key:e.title,className:"film-card",style:{gridColumnStart:e.isSelected?"span 3":"unset"},onClick:(t=e.title,function(){l((function(e){return e.map((function(e){if(e.title===t){var a=Object(g.a)({},e);return a.isSelected=!e.isSelected,a}return e}))}))})},r.a.createElement(O.a,{className:"film-card-content"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("span",{className:"film-label"},"Movie name: "),e.title),r.a.createElement("p",null,r.a.createElement("span",{className:"film-label"},"Episode number : "),e.episode_id),r.a.createElement("p",null,r.a.createElement("span",{className:"film-label"},"Director: "),e.director),r.a.createElement("p",null,r.a.createElement(i.b,{to:"/People"},"People"))),e.isSelected&&r.a.createElement(j,{text:e.opening_crawl})));var t})))},D=a(563),W=D.a.Column,U=function(e){var t=e.data,a=e.columns,l=e.pagination,c=e.onPaginationChange,i=Object(n.useState)(l),o=Object(y.a)(i,2),u=o[0],s=o[1];return r.a.createElement(D.a,{dataSource:t,pagination:u,onChange:function(e){s(e),c(e.current||1)}},null===a||void 0===a?void 0:a.map((function(e){return e.render?r.a.createElement(W,{title:e.title,dataIndex:e.dataIndex,key:e.key,render:e.render,filters:e.filters,onFilter:e.onFilter}):r.a.createElement(W,{title:e.title,dataIndex:e.dataIndex,key:e.key,onFilter:e.onFilter,filters:e.filters})})))};U.defaultProps={columns:[]};var V=U;var Y=function(e){return 0===e.length},q=[{title:"Name",dataIndex:"name",key:"name"},{title:"Eye color",dataIndex:"eye_color",key:"eye_color",filters:[{text:"blue",value:"blue"},{text:"yellow",value:"yellow"},{text:"red",value:"red"},{text:"brown",value:"brown"},{text:"blue-gray",value:"blue-gray"}],onFilter:function(e,t){return 0===t.eye_color.indexOf(e)}},{title:"Gender",dataIndex:"gender",key:"gender",filters:[{text:"male",value:"male"},{text:"female",value:"female"},{text:"n/a",value:"n/a"}],onFilter:function(e,t){return 0===t.gender.indexOf(e)}},{title:"List of films",dataIndex:"films",key:"films",render:function(e){return r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Films"},e," "))})))},filters:[{text:"A New Hope",value:"A New Hope"},{text:"The Empire Strikes Back",value:"The Empire Strikes Back"},{text:"Return of the Jedi",value:"Return of the Jedi"},{text:"The Phantom Menace",value:"The Phantom Menace"},{text:"Attack of the Clones",value:"Attack of the Clones"},{text:"Revenge of the Sith",value:"Revenge of the Sith"}],onFilter:function(e,t){return t.films.some((function(t){return 0===t.indexOf(e)}))}}],K=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(L),i=c.dispatch,o=c.state;Object(n.useEffect)((function(){0===o.films.length&&H(i),J(i,1)}),[]),Object(n.useEffect)((function(){Y(o.characters)||Y(o.films)||l(function(e,t){var a=e.reduce((function(e,t){return e[t.url]=t.title,e}),{});return t.map((function(e){var t=e.films.map((function(e){return a[e]}));return Object(g.a)(Object(g.a)({},e),{},{films:t})}))}(o.films,o.characters))}),[o.characters,o.films]);var u,s=Object(n.useRef)(1);return 0===o.characters.length?r.a.createElement(S,null):r.a.createElement(V,{data:a,columns:q,pagination:(u=o.totalCharacters,{current:1,total:u,showSizeChanger:!1}),onPaginationChange:function(e){e&&s.current!==e&&(s.current=e,J(i,e))}})},Q=a(158),X=a.n(Q),Z=function(e){var t=e.children,a=e.title;return r.a.createElement("div",{className:X.a.container},r.a.createElement("h2",{className:X.a.title},a),t)},$={border:"1px solid #e2e2e2",margin:"5rem 5rem 1rem 5rem",width:"10%"},ee=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around "}},r.a.createElement("div",{style:$}),r.a.createElement("div",{style:$}))},te=function(){return r.a.createElement("div",null,r.a.createElement(E,{items:["Films","People"]}),r.a.createElement(ee,null),r.a.createElement(b,null),r.a.createElement(o.a,{path:"/Films"},r.a.createElement(Z,{title:"FILMS"},r.a.createElement(B,null))),r.a.createElement(o.a,{path:"/People"},r.a.createElement(Z,{title:"PEOPLE"},r.a.createElement(K,null))),r.a.createElement(o.a,{path:"/",exact:!0},r.a.createElement(u,null)))};c.a.render(r.a.createElement(i.a,{basename:"/"},r.a.createElement(T,null,r.a.createElement(te,null))),document.getElementById("root"))},98:function(e,t,a){e.exports={container:"Navbar_container__3rMGR",menu:"Navbar_menu__115YR",items:"Navbar_items__1rHmj",homeIcon:"Navbar_homeIcon__4IgOx"}}},[[238,1,2]]]);
//# sourceMappingURL=main.1af1dcc5.chunk.js.map