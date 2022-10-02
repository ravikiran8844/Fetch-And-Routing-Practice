(this["webpackJsonpfetch-and-routing-practice"]=this["webpackJsonpfetch-and-routing-practice"]||[]).push([[0],{30:function(t,e,c){},37:function(t,e,c){},38:function(t,e,c){},57:function(t,e,c){},58:function(t,e,c){},59:function(t,e,c){},60:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){},63:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),s=c(24),i=c.n(s),r=c(8),o=c(3),l=(c(30),c(0)),j=function(){return Object(l.jsxs)("nav",{className:"header-container",children:[Object(l.jsxs)("div",{className:"logo-and-title-container",children:[Object(l.jsx)("img",{alt:"wave",className:"logo",src:"https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"}),Object(l.jsx)("h1",{className:"title",children:"Wave"})]}),Object(l.jsxs)("ul",{className:"nav-items-list",children:[Object(l.jsx)("li",{className:"link-item",children:Object(l.jsx)(r.b,{className:"route-link",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"link-item",children:Object(l.jsx)(r.b,{className:"route-link",to:"/about",children:"About"})}),Object(l.jsx)("li",{className:"link-item",children:Object(l.jsx)(r.b,{className:"route-link",to:"/contact",children:"Contact"})})]})]})},b=(c(37),function(){return Object(l.jsxs)("div",{className:"about-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/about-blog-img.png",alt:"about",className:"about-img"}),Object(l.jsx)("h1",{className:"about-heading",children:"About"}),Object(l.jsx)("p",{className:"about-paragraph",children:"I love to create! I am a front-end web developer"})]})}),d=(c(38),function(){return Object(l.jsxs)("div",{className:"user-info-container",children:[Object(l.jsx)("img",{className:"profile-img",src:"https://assets.ccbp.in/frontend/react-js/profile-img.png",alt:"profile"}),Object(l.jsx)("h1",{className:"user-name",children:"Wade Warren"}),Object(l.jsx)("p",{className:"user-designation",children:"Software developer at UK"})]})}),u=c(14),h=c(17),m=c(10),p=c(11),O=c(12),x=c(13),g=c(18),f=c.n(g),v=(c(57),function(t){Object(O.a)(c,t);var e=Object(x.a)(c);function c(){return Object(m.a)(this,c),e.apply(this,arguments)}return Object(p.a)(c,[{key:"render",value:function(){var t=this.props.details,e=t.id,c=t.title,a=t.author,n=t.avatarUrl,s=t.imageUrl,i=t.topic;return Object(l.jsx)(r.b,{to:"/blogs/".concat(e),className:"link",children:Object(l.jsxs)("li",{className:"flexRow listContainer",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"thumbnail",src:s,alt:c})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:i}),Object(l.jsx)("h1",{children:c}),Object(l.jsxs)("div",{className:"flexRow",children:[Object(l.jsx)("img",{className:"avatar",src:n,alt:a}),Object(l.jsx)("p",{children:a})]})]})]})})}}]),c}(a.Component)),N=v,k=function(t){Object(O.a)(c,t);var e=Object(x.a)(c);function c(){var t;Object(m.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={blogsList:[],isLoading:!0},t.getBlogData=Object(h.a)(Object(u.a)().mark((function e(){var c,a,n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://apis.ccbp.in/blogs");case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,n=a.map((function(t){return{author:t.author,avatarUrl:t.avatar_url,id:t.id,imageUrl:t.image_url,title:t.title,topic:t.topic}})),t.setState({blogsList:n,isLoading:!1}),console.log(a);case 9:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(c,[{key:"componentDidMount",value:function(){this.getBlogData()}},{key:"render",value:function(){var t=this.state.blogsList,e=this.state.isLoading;return console.log(e),Object(l.jsx)("div",{children:e?Object(l.jsx)("div",{children:Object(l.jsx)(f.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50})}):Object(l.jsx)("ul",{children:t.map((function(t){return Object(l.jsx)(N,{details:t},t.id)}))})})}}]),c}(a.Component),w=k,y=(c(58),function(){return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)(d,{}),Object(l.jsx)(w,{})]})}),L=(c(59),function(){return Object(l.jsxs)("div",{className:"contact-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/contact-blog-img.png",alt:"contact",className:"contact-img"}),Object(l.jsx)("h1",{className:"contact-heading",children:"Contact"})]})}),D=(c(60),function(){return Object(l.jsxs)("div",{className:"not-found-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png",alt:"not found",className:"not-found-img"}),Object(l.jsx)("h1",{className:"not-found-heading",children:"Not Found"})]})}),U=(c(61),function(t){Object(O.a)(c,t);var e=Object(x.a)(c);function c(){var t;Object(m.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={blogItemData:[],isLoading:!0},t.getBlogItemDetails=Object(h.a)(Object(u.a)().mark((function e(){var c,a,n,s,i,r;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.props.match,a=c.params,n=a.id,e.next=5,fetch("https://apis.ccbp.in/blogs/".concat(n));case 5:return s=e.sent,e.next=8,s.json();case 8:i=e.sent,r={id:i.id,title:i.title,imageUrl:i.image_url,avatarUrl:i.avatar_url,author:i.author,topic:i.topic,content:i.content},t.setState({blogItemData:r,isLoading:!1}),console.log(r);case 12:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(c,[{key:"componentDidMount",value:function(){this.getBlogItemDetails()}},{key:"render",value:function(){var t=this.state,e=t.blogItemData,c=t.isLoading,a=e.title,n=e.imageUrl,s=e.avatarUrl,i=e.author,r=e.content;return Object(l.jsx)("div",{className:"container",children:c?Object(l.jsx)(f.a,{ariaLabel:"loading-indicator",height:100,width:100,strokeWidth:2e3,strokeWidthSecondary:2030,color:"blue",secondaryColor:"Grey"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:a}),Object(l.jsxs)("div",{className:"flexRow",children:[Object(l.jsx)("img",{className:"avatar",src:s,alt:i}),Object(l.jsx)("p",{children:i})]}),Object(l.jsx)("img",{className:"thumbnail",src:n,alt:a}),Object(l.jsx)("p",{children:r})]})})}}]),c}(a.Component)),I=U,C=(c(62),function(){return Object(l.jsx)("div",{className:"app-container",children:Object(l.jsxs)("div",{className:"responsive-container",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"app-body",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(l.jsx)(o.a,{exact:!0,path:"/about",component:b}),Object(l.jsx)(o.a,{exact:!0,path:"/contact",component:L}),Object(l.jsx)(o.a,{exact:!0,path:"/blogs/:id",component:I}),Object(l.jsx)(o.a,{component:D})]})})]})})});i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(C,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.bdb45ee8.chunk.js.map