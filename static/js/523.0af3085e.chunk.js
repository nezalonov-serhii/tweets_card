"use strict";(self.webpackChunktweets_card=self.webpackChunktweets_card||[]).push([[523],{982:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var r=t(2791),o=t(9434),i=t(168),a=t(9439),s=t(1413),l=t(4925),c=["count","wrapper","className","containerClassName","containerTestId","circle","style"],d=r.createContext({}),p=!0;var f,u,x,h=t(6444),g=h.ZP.ul(f||(f=(0,i.Z)(["\n   display: flex;\n   justify-content: space-between;\n   flex-wrap: wrap;\n\n   width: 100%;\n\n   list-style: none;\n"]))),b=h.ZP.li(u||(u=(0,i.Z)(["\n   flex-basis: 380px;\n   height: 460px;\n"]))),w=(0,h.ZP)((function(n){for(var e,t,o,i=n.count,f=void 0===i?1:i,u=n.wrapper,x=n.className,h=n.containerClassName,g=n.containerTestId,b=n.circle,w=void 0!==b&&b,m=n.style,Z=(0,l.Z)(n,c),v=r.useContext(d),y=(0,s.Z)({},Z),j=0,k=Object.entries(Z);j<k.length;j++){var P=(0,a.Z)(k[j],2),C=P[0];"undefined"===typeof P[1]&&delete y[C]}var A=(0,s.Z)((0,s.Z)((0,s.Z)({},v),y),{},{circle:w}),F=(0,s.Z)((0,s.Z)({},m),function(n){var e=n.baseColor,t=n.highlightColor,r=n.width,o=n.height,i=n.borderRadius,a=n.circle,s=n.direction,l=n.duration,c=n.enableAnimation,d=void 0===c?p:c,f={};return"rtl"===s&&(f["--animation-direction"]="reverse"),"number"===typeof l&&(f["--animation-duration"]="".concat(l,"s")),d||(f["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(f.width=r),"string"!==typeof o&&"number"!==typeof o||(f.height=o),"string"!==typeof i&&"number"!==typeof i||(f.borderRadius=i),a&&(f.borderRadius="50%"),"undefined"!==typeof e&&(f["--base-color"]=e),"undefined"!==typeof t&&(f["--highlight-color"]=t),f}(A)),z="react-loading-skeleton";x&&(z+=" ".concat(x));for(var E=null!==(e=A.inline)&&void 0!==e&&e,N=[],I=Math.ceil(f),q=0;q<I;q++){var M=F;if(I>f&&q===I-1){var R=null!==(t=M.width)&&void 0!==t?t:"100%",S=f%1,T="number"===typeof R?R*S:"calc(".concat(R," * ").concat(S,")");M=(0,s.Z)((0,s.Z)({},M),{},{width:T})}var U=r.createElement("span",{className:z,style:M,key:q},"\u200c");E?N.push(U):N.push(r.createElement(r.Fragment,{key:q},U,r.createElement("br",null)))}return r.createElement("span",{className:h,"data-testid":g,"aria-live":"polite","aria-busy":null!==(o=A.enableAnimation)&&void 0!==o?o:p},u?N.map((function(n,e){return r.createElement(u,{key:e},n)})):N)}))(x||(x=(0,i.Z)(["\n   width: 380px;\n   height: 100%;\n   border-radius: 20px;\n"]))),m=t(184),Z=function(n){for(var e=n.quantity,t=[],r=0;r<e;r++)t.push((0,m.jsx)(w,{}));return(0,m.jsx)(g,{children:t.map((function(n,e){return(0,m.jsx)(b,{children:n},e)}))})},v=t(966),y=t(4165),j=t(5861),k=t(9085),P=t(6489),C=function(n){return n.tweets.usersTweets},A=function(n){return n.tweets.totalPage},F=function(n){return n.tweets.isLoading},z=function(n){return n.tweets.filter},E=function(n){return n.tweets.currentPage},N=t.p+"static/media/background-card.032662a2a907475127d7.png";var I,q,M,R,S,T,U,Y,L,$,_,B,D,O=t.p+"static/media/sprite.1fc27c9e2f5a73cb5b333ee469f0c7f1.svg",G=h.ZP.article(I||(I=(0,i.Z)(['\n   box-sizing: border-box;\n   position: relative;\n   top: 0;\n   left: 0;\n\n   display: flex;\n   flex-direction: column;\n   justify-content: end;\n   align-items: center;\n\n   padding-bottom: 36px;\n\n   width: 380px;\n   min-height: 460px;\n\n   box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n   border-radius: 20px;\n   background-image: linear-gradient(\n      114.99deg,\n      #471ca9 -0.99%,\n      #5736a3 54.28%,\n      #4b2a99 78.99%\n   );\n\n   &::before {\n      content: "";\n      position: absolute;\n      top: 28px;\n      left: 36px;\n\n      width: 308px;\n      height: 168px;\n\n      background-image: url(',");\n   }\n"])),(function(n){return n.backgroundCard})),H=h.ZP.svg(q||(q=(0,i.Z)(["\n   position: absolute;\n   top: 20px;\n   left: 20px;\n\n   width: 76px;\n   height: 22px;\n"]))),J=h.ZP.div(M||(M=(0,i.Z)(["\n   position: absolute;\n   top: 214px;\n   left: 0;\n\n   transform: translateY(-50%);\n\n   width: 100%;\n   height: 8px;\n\n   background: #ebd8ff;\n   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),K=h.ZP.div(R||(R=(0,i.Z)(["\n   position: absolute;\n   top: 214px;\n   left: 50%;\n\n   display: flex;\n   align-items: center;\n   justify-content: center;\n\n   transform: translate(-50%, -50%);\n\n   width: 80px;\n   height: 80px;\n\n   background: #ebd8ff;\n   box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n      inset 0px -2.19582px 4.39163px #ae7be3,\n      inset 0px 4.39163px 3.29372px #fbf8ff;\n   border-radius: 50%;\n"]))),Q=h.ZP.img(S||(S=(0,i.Z)(["\n   border-radius: 50%;\n   width: calc(100% - 16px);\n"]))),V=h.ZP.p(T||(T=(0,i.Z)(["\n   margin-bottom: 16px;\n\n   font-weight: 500;\n   font-size: 20px;\n   line-height: 1.2;\n   text-transform: uppercase;\n   color: #ebd8ff;\n"]))),W=h.ZP.p(U||(U=(0,i.Z)(["\n   margin-bottom: 26px;\n\n   font-weight: 500;\n   font-size: 20px;\n   line-height: 1.2;\n   text-transform: uppercase;\n   color: #ebd8ff;\n"]))),X=h.ZP.button(Y||(Y=(0,i.Z)(["\n   width: 196px;\n   min-height: 50px;\n   padding: 14px 0;\n\n   background-color: ",";\n\n   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n   border: none;\n   border-radius: 10.3108px;\n\n   font-weight: 600;\n   font-size: 18px;\n   line-height: 1.2;\n   color: #373737;\n   text-transform: uppercase;\n\n   transition: background-color 200ms linear;\n\n   &:hover {\n      background-color: ",";\n   }\n\n   &:disabled {\n      opacity: 60%;\n   }\n"])),(function(n){return n.isFollow?"#5CD3A8":"#ebd8ff"}),(function(n){return n.isFollow?"#f39595":"#33ffb5"})),nn=function(){var n=(0,o.I0)(),e=(0,o.v9)(F),t=(0,o.v9)(C),r=function(){var e=(0,j.Z)((0,y.Z)().mark((function e(t){var r,o;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.follow?(o=(0,s.Z)((0,s.Z)({},t),{follow:!t.follow,followers:t.followers-1}),n((0,P.qs)({id:t.id,editedUser:o})).unwrap().then((function(n){k.Am.info("You are unfollow ".concat(n.name))})).catch((function(n){k.Am.error("Something went wrong, try again later")}))):(r=(0,s.Z)((0,s.Z)({},t),{follow:!t.follow,followers:t.followers+1}),n((0,P.qs)({id:t.id,editedUser:r})).unwrap().then((function(n){k.Am.success("You following ".concat(n.name))})).catch((function(n){k.Am.error("Something went wrong, try again later")})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return t.map((function(n){return(0,m.jsxs)(G,{backgroundCard:N,children:[(0,m.jsx)(H,{children:(0,m.jsx)("use",{href:O+"#icon-logo",children:" "})}),(0,m.jsx)(J,{}),(0,m.jsx)(K,{children:(0,m.jsx)(Q,{src:n.avatar,alt:"avatar"})}),(0,m.jsxs)(V,{children:[n.tweets," tweets"]}),(0,m.jsxs)(W,{children:[(t=n.followers,t.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1,"))," followers "]}),(0,m.jsxs)(X,{isFollow:n.follow,onClick:function(){return r(n)},disabled:e,children:[!e&&n.follow&&(0,m.jsx)(m.Fragment,{children:"following"}),!e&&!n.follow&&(0,m.jsx)(m.Fragment,{children:"follow"}),e&&(0,m.jsx)(v.Z,{})]})]},n.id);var t}))},en=t(2309),tn=t(1087),rn=h.ZP.section(L||(L=(0,i.Z)(["\n   padding: 20px 0;\n"]))),on=h.ZP.div($||($=(0,i.Z)(["\n   margin: 0 auto;\n   width: 480px;\n\n   @media screen and (min-width: 780px) {\n      width: 780px;\n   }\n\n   @media screen and (min-width: 1280px) {\n      width: 1280px;\n   }\n"]))),an=h.ZP.div(_||(_=(0,i.Z)(["\n   display: flex;\n   flex-wrap: wrap;\n\n   gap: calc((780px - 380px * 2) / 0.5);\n\n   @media screen and (max-width: 779px) {\n      justify-content: center;\n   }\n\n   @media screen and (min-width: 780px) {\n      gap: calc((780px - (380px * 2)));\n   }\n\n   @media screen and (min-width: 1280px) {\n      gap: calc((1280px - (380px * 3)) / 2);\n   }\n"]))),sn=(0,h.ZP)(tn.rU)(B||(B=(0,i.Z)(["\n   display: inline-block;\n   padding: 8px 20px;\n   margin-bottom: 20px;\n\n   border-radius: 10px;\n\n   color: #ebd8ff;\n   background-color: #4b2a99;\n\n   transition: color 250ms linear, background-color 250ms linear;\n\n   &:hover {\n      background-color: rgb(92, 211, 168);\n      color: #373737;\n   }\n"]))),ln=h.ZP.button(D||(D=(0,i.Z)(["\n   display: block;\n   min-width: 140px;\n   padding: 15px 20px;\n   margin: 0 auto;\n\n   margin-top: 40px;\n\n   background-color: #ebd8ff;\n\n   border: none;\n   border-radius: 10px;\n\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 1.2;\n   color: #373737;\n   text-transform: uppercase;\n\n   transition: background-color 200ms linear;\n\n   &:hover {\n      background-color: #33ffb5;\n      box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n   }\n\n   &:disabled {\n      opacity: 60%;\n   }\n"]))),cn=function(){var n=(0,o.I0)(),e=(0,o.v9)(C),t=(0,o.v9)(F),r=(0,o.v9)(A),i=(0,o.v9)(E);return(0,m.jsx)(rn,{children:(0,m.jsxs)(on,{children:[(0,m.jsx)(sn,{to:"/",children:"Back"}),(0,m.jsxs)(an,{children:[0!==e.length&&(0,m.jsx)(nn,{}),t&&0===e.length&&(0,m.jsx)(Z,{quantity:3})]}),r!==i&&0!==e.length&&(0,m.jsxs)(ln,{onClick:function(){n((0,en.bh)())},disabled:t,children:[!t&&(0,m.jsx)(m.Fragment,{children:"Load More"}),t&&(0,m.jsx)(v.Z,{})]})]})})},dn=function(){var n=(0,o.I0)(),e=(0,o.v9)(z),t=(0,o.v9)(E);return(0,r.useEffect)((function(){n((0,P.ze)(e)),n((0,P.M4)({currentPage:t,filter:e}))}),[n,e,t]),(0,m.jsx)(cn,{})}}}]);
//# sourceMappingURL=523.0af3085e.chunk.js.map