(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{123:function(t,n,a){},265:function(t,n,a){"use strict";var o=a(123);a.n(o).a},281:function(t,n,a){"use strict";a.r(n);a(3);var o=a(5),i=a(278),s={components:{NavigationIcon:o.g,ClockIcon:o.a},data:function(){return{paginationComponent:null}},created:function(){this.paginationComponent=this.getPaginationComponent()},computed:{pages:function(){return this.$pagination.pages}},methods:{getPaginationComponent:function(){return i.a}}},e=(a(265),a(108),a(4)),r=Object(e.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"base-list-layout"}},[a("div",{staticClass:"ui-posts"},t._l(t.pages,(function(n){return a("div",{staticClass:"ui-post"},[a("div",{staticClass:"ui-post-title"},[a("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),a("div",{staticClass:"ui-post-summary"},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n        ")]),t._v(" "),n.frontmatter.author?a("div",{staticClass:"ui-post-author"},[a("NavigationIcon"),t._v(" "),a("span",[t._v(t._s(n.frontmatter.author)+" in "+t._s(n.frontmatter.location))])],1):t._e(),t._v(" "),n.frontmatter.date?a("div",{staticClass:"ui-post-date"},[a("ClockIcon"),t._v(" "),a("span",[t._v(t._s(new Date(n.frontmatter.date.trim()).toDateString()))])],1):t._e()])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?a(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);n.default=r.exports}}]);