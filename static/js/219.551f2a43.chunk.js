"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{6713:function(n,e,t){t.d(e,{Hx:function(){return l},Y5:function(){return p},cl:function(){return o},wr:function(){return s},xc:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),u=t(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="api_key=1aace2915168deda27118d05bacd9bed",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?".concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4219:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u,i,s=t(5861),o=t(9439),p=t(7757),f=t.n(p),l=t(2791),d=t(7689),h=t(6713),v=t(168),x=t(5867),g=x.ZP.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  text-align: center;\n  min-height: 450px;\n  margin: -15px;\n"]))),m=x.ZP.li(a||(a=(0,v.Z)(["\n  width: 200px;\n  margin: 15px;\n"]))),Z=x.ZP.img(c||(c=(0,v.Z)(["\n  height: 300px;\n  overflow: hidden;\n  object-fit: cover;\n"]))),w=x.ZP.h3(u||(u=(0,v.Z)(["\n  font-size: 18px;\n  letter-spacing: 0.2em;\n"]))),b=x.ZP.p(i||(i=(0,v.Z)(["\n  font-size: 15px;\n"]))),k=t(184),y=function(){var n=(0,d.UO)(),e=(0,l.useState)(!1),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,l.useState)(null),u=(0,o.Z)(c,2),i=u[0],p=u[1],v=(0,l.useState)(!1),x=(0,o.Z)(v,2),y=x[0],j=x[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),a(!1),e.next=5,(0,h.xc)(n.movieId);case 5:t=e.sent,p(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),a(!0);case 13:return e.prev=13,j(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[n.movieId]),(0,k.jsxs)(k.Fragment,{children:[y&&(0,k.jsx)("p",{children:"Loading..."}),r&&!i&&(0,k.jsx)("p",{children:"Error loading cast details"}),i&&i.length>0&&(0,k.jsx)(g,{children:i.map((function(n){var e=n.character,t=n.id,r=n.name,a=n.profile_path,c=n.original_name;return(0,k.jsxs)(m,{children:[(0,k.jsx)(Z,{src:a?"https://image.tmdb.org/t/p/w185/".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:c}),(0,k.jsxs)(w,{children:["Actor: ",r]}),(0,k.jsxs)(b,{children:["Role: ",e]})]},t)}))})]})}}}]);
//# sourceMappingURL=219.551f2a43.chunk.js.map