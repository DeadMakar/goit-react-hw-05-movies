"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29],{6713:function(n,e,r){r.d(e,{Hx:function(){return l},Y5:function(){return p},cl:function(){return u},wr:function(){return s},xc:function(){return d}});var t=r(5861),a=r(7757),i=r.n(a),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="api_key=1aace2915168deda27118d05bacd9bed",s=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?".concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?").concat(o,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?").concat(o,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?").concat(o,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9029:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,a,i,c,o,s,u,p,d,l,x,f,h,v,g=r(5861),m=r(9439),Z=r(7757),w=r.n(Z),b=r(2791),j=r(7689),k=r(1087),y=r(6713),P=r(168),U=r(5867),_=U.ZP.div(t||(t=(0,P.Z)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),S=(U.ZP.button(a||(a=(0,P.Z)(["\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n"]))),U.ZP.div(i||(i=(0,P.Z)(["\n  display: flex;\n  flex-direction: row;\n"])))),C=U.ZP.img(c||(c=(0,P.Z)(["\n  height: auto;\n  max-width: 300px;\n  height: auto;\n  margin-right: 20px;\n"]))),R=U.ZP.h2(o||(o=(0,P.Z)(["\n  margin: 10px 0;\n"]))),q=U.ZP.p(s||(s=(0,P.Z)(["\n  margin: 5px 0;\n"]))),A=U.ZP.span(u||(u=(0,P.Z)(["\n  margin: 10px 0;\n"]))),E=U.ZP.span(p||(p=(0,P.Z)(["\n  margin: 10px 0;\n"]))),H=U.ZP.div(d||(d=(0,P.Z)(["\n  margin-top: 20px;\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]))),O=U.ZP.h3(l||(l=(0,P.Z)(["\n  margin-bottom: 10px;\n"]))),Y=U.ZP.ul(x||(x=(0,P.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 10px;\n"]))),z=U.ZP.li(f||(f=(0,P.Z)(["\n  margin-bottom: 10px;\n"]))),B=U.ZP.button(h||(h=(0,P.Z)(["\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-bottom: 5px;\n\n  :hover {\n    color: white;\n    background-color: tomato;\n  }\n"]))),G=(0,U.ZP)(k.rU)(v||(v=(0,P.Z)(["\n  text-decoration: none;\n"]))),I=r(184),L=function(n){var e=n.to;return(0,I.jsx)(G,{to:e,children:(0,I.jsx)(B,{children:" Come Back"})})},M=function(){var n,e,r=(0,j.UO)().movieId,t=(0,j.TH)(),a=(0,b.useState)(null),i=(0,m.Z)(a,2),c=i[0],o=i[1],s=(0,b.useRef)(t);if((0,b.useEffect)((function(){var n=function(){var n=(0,g.Z)(w().mark((function n(){var e;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.Y5)(r);case 3:e=n.sent,o(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie details:",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),c){var u=c.poster_path,p=c.title,d=c.genres,l=c.overview,x=c.vote_average,f=c.release_date;return(0,I.jsxs)(_,{children:[(0,I.jsx)(L,{to:null!==(n=null===(e=s.current.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"}),(0,I.jsxs)(S,{children:[(0,I.jsx)("div",{children:(0,I.jsx)(C,{src:u?"https://image.tmdb.org/t/p/w300".concat(u):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:p})}),(0,I.jsxs)("div",{children:[(0,I.jsxs)(R,{children:[p," ",null===f||void 0===f?void 0:f.substr(0,4)]}),(0,I.jsxs)(q,{children:["User Score: ",Math.floor(10*x),"%"]}),(0,I.jsxs)(A,{children:[(0,I.jsx)("h2",{children:"Overview"}),(0,I.jsx)("p",{children:l})]}),(0,I.jsxs)(E,{children:[(0,I.jsx)("h2",{children:"Genres"}),(0,I.jsx)("ul",{children:d.map((function(n){var e=n.id,r=n.name;return(0,I.jsx)("li",{children:r},e)}))})]})]})]}),(0,I.jsxs)(H,{children:[(0,I.jsx)(O,{children:"Additional information"}),(0,I.jsxs)(Y,{children:[(0,I.jsx)(z,{children:(0,I.jsx)(k.rU,{to:"cast",children:"Cast"})}),(0,I.jsx)(z,{children:(0,I.jsx)(k.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,I.jsx)(j.j3,{})]})}}}}]);
//# sourceMappingURL=29.1707b6b6.chunk.js.map