(this["webpackJsonpcard-design"]=this["webpackJsonpcard-design"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),i=(n(13),n(5)),d=n(6),h=n(2),o=n(8),l=n(7),u=(n(14),n(0)),j=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"cards",src:"https://robohash.org/".concat(e.card.id,"?set=set4"),width:"180",height:"180"}),Object(u.jsxs)("div",{children:[" ",e.card.name," "]}),Object(u.jsxs)("div",{children:[" ",e.card.email," "]})]})},b=(n(16),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.cards.map((function(e){return Object(u.jsx)(j,{card:e},e.id)}))})}),f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(18),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={cards:[],searchField:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({cards:t})}))}},{key:"render",value:function(){var e=this.state,t=e.cards,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"h1",children:"Card Design"}),Object(u.jsx)(f,{placeholder:"search cards",handleChange:this.handleChange}),Object(u.jsx)(b,{cards:c})]})}}]),n}(a.a.Component));s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.d731cc50.chunk.js.map