"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{6713:function(n,t,e){e.d(t,{Hx:function(){return f},Y5:function(){return p},cl:function(){return s},wr:function(){return o},xc:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),u=e(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="api_key=1aace2915168deda27118d05bacd9bed",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2049:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,c,u,i=e(7689),o=e(1087),s=e(168),p=e(5867),d=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n"]))),f=p.ZP.li(a||(a=(0,s.Z)(["\n  list-style: none;\n  padding: 15px;\n  margin: 0;\n"]))),l=p.ZP.div(c||(c=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  text-align: center;\n  width: 200px;\n  height: 355px;\n\n  :hover {\n    scale: 1.1;\n  }\n"]))),v=p.ZP.img(u||(u=(0,s.Z)(["\n  width: 250px;\n"]))),x=e(184),h=function(n){var t=n.movies,e=(0,i.TH)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,a=n.name,c=n.poster_path;return(0,x.jsx)(f,{children:(0,x.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,x.jsxs)(l,{children:[c&&(0,x.jsx)(v,{src:"https://image.tmdb.org/t/p/w200".concat(c),alt:null!==r&&void 0!==r?r:a}),null!==r&&void 0!==r?r:a]})})},t)}))})})}},1206:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),c=e(6713),u=e(9752),i=e(2049),o=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],p=(0,a.useState)(!1),d=(0,r.Z)(p,2),f=d[0],l=d[1];return(0,a.useEffect)((function(){l(!0),(0,c.wr)().then((function(n){var t=n.results;s(t)})).finally((function(){l(!1)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{style:{textAlign:"center",paddingTop:"20px",paddingBottom:"20px"},"aria-label":"Trending today",children:"Trending today"}),(0,o.jsx)(i.Z,{movies:e}),f&&(0,o.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=206.a39aac9c.chunk.js.map