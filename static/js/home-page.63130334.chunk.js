(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1,4],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(12),a=n(13),c=n(15),i=n(14),o=n(0),s=n(75),u=n(61),v=n(1),l=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={movies:[]},e.fetchTrendingMovies=function(){Object(u.c)().then((function(t){return e.setState({movies:t})})).catch((function(e){return console.log(e)}))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.fetchTrendingMovies()}},{key:"render",value:function(){var e=this.state.movies;return Object(v.jsx)(s.default,{movies:e})}}]),n}(o.Component)},61:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p}));var r=n(64),a=n.n(r),c=n(65),i=n(66),o=n.n(i),s="384eb8ab4176debc217be91023edb374",u="https://api.themoviedb.org/3",v=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(u,"/trending/all/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(s,"&append_to_response=credits,reviews"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},62:function(e,t,n){e.exports={BookPreview__thumb:"MoviePreview_BookPreview__thumb__3cObk",BookPreview__img:"MoviePreview_BookPreview__img__1behg",BookPreview__title:"MoviePreview_BookPreview__title__1Q19G"}},63:function(e,t,n){e.exports={MoviesList:"MoviesList_MoviesList__3zBnW"}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));n(0);var r=n(11),a=n(3),c=n(62),i=n.n(c),o=n(1),s=function(e){var t=e.title,n=e.name,r=e.src;return Object(o.jsxs)("div",{className:i.a.BookPreview__thumb,children:[Object(o.jsx)("img",{className:i.a.BookPreview__img,src:"https://image.tmdb.org/t/p/w300".concat(r),alt:t}),Object(o.jsx)("h1",{className:i.a.BookPreview__title,children:t||n})]})};s.defaultProps={title:null,name:null,poster_path:null};var u=s,v=n(63),l=n.n(v),p=function(e){var t=e.movies,n=e.location;return Object(o.jsx)("ul",{className:l.a.MoviesList,children:t.map((function(e){var t=e.id,a=e.title,c=e.name,i=e.poster_path;return Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:{pathname:"movies/".concat(t),state:{from:n.pathname}},children:Object(o.jsx)(u,{title:a,name:c,src:i})})},t)}))})};p.defaultProps={id:null,title:null,name:null,poster_path:null};var f=Object(a.f)(p)}}]);
//# sourceMappingURL=home-page.63130334.chunk.js.map