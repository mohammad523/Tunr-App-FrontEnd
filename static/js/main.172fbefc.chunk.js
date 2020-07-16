(this["webpackJsonptunr-app-frontend"]=this["webpackJsonptunr-app-frontend"]||[]).push([[0],{19:function(e,t,a){e.exports=a(49)},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),i=(a(24),a(6)),c=a.n(i),s=a(17),u=a(2),m=a(5),g=a.n(m);a(43),a(44);var v=function(){return r.a.createElement("div",{className:"headerDiv"},r.a.createElement("h1",{className:"title"},"Tunr"),r.a.createElement("h2",{className:"tagLine"},"The better app for your playlists."))},f=(a(45),function(e){var t=e.song,a=e.toggleFavorite,n=e.deleteSong;t||(t={_id:!1,title:"unavailable",artist:"unavailable",time:0,isFavorite:!1});var o=""+t.time%60,l=Math.floor(t.time/60)+":"+(0===o.length?"00":1===o.length?"0"+o:o);return r.a.createElement("div",{className:"song-container"},r.a.createElement("div",{className:"song-item song-title"},t.title),r.a.createElement("div",{className:"song-item song-artist"},t.artist),r.a.createElement("div",{className:"song-item song-time"},l),r.a.createElement("button",{className:"song-button song-favorite ".concat(t.isFavorite?"favorite":""),onClick:function(){return a(t._id)}},"\u2764"),r.a.createElement("button",{className:"song-button song-remove",onClick:function(){return n(t._id)}},"X"))}),d=(a(46),function(e){var t=e.songs,a=e.toggleFavorite,n=e.deleteSong;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Playlist"),r.a.createElement("div",{className:"playlist-container"},t.map((function(e){return r.a.createElement(f,{song:e,toggleFavorite:a,deleteSong:n})}))))}),p=(a(47),function(e){var t=e.song,a=e.toggleFavorite;t||(t={_id:!1,title:"unavailable",artist:"unavailable",time:0,isFavorite:!1});var n=""+t.time%60,o=Math.floor(t.time/60)+":"+(0===n.length?"00":1===n.length?"0"+n:n);return r.a.createElement("div",{className:"song-container"},r.a.createElement("div",{className:"song-item song-title"},t.title),r.a.createElement("div",{className:"song-item song-artist"},t.artist),r.a.createElement("div",{className:"song-item song-time"},o),r.a.createElement("button",{className:"song-button song-favorite ".concat(t.isFavorite?"favorite":""),onClick:function(){return a(t._id)}},"\u2764"))}),E=(a(48),function(e){var t=e.songs,a=e.toggleFavorite,n=e.deleteSong;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Favorite Songs"),r.a.createElement("div",{className:"favorites-container"},t.map((function(e){return r.a.createElement(p,{song:e,toggleFavorite:a,deleteSong:n})}))))}),b=a(18);var h=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),c=(i[0],i[1],Object(n.useState)("")),s=Object(u.a)(c,2),m=s[0],v=s[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),p=d[0],E=d[1],h=Object(n.useState)([]),N=Object(u.a)(h,2),O=N[0],S=N[1],j=Object(n.useState)([]),F=Object(u.a)(j,2),k=(F[0],F[1]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Add A New Song"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={isFavorite:!1,title:a,artist:m,time:p};S([].concat(Object(b.a)(O),[t])),console.log(t),console.log("data",O),g()({url:"https://tunr4.herokuapp.com/api/songs/",method:"POST",data:t}).then((function(e){k({createdSong:e.data})})).catch(console.error)}},r.a.createElement("p",null,"Title"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){o(e.target.value)},id:"title"}),r.a.createElement("br",null),r.a.createElement("p",null,"Artist"),r.a.createElement("input",{type:"text",value:m,onChange:function(e){v(e.target.value)},id:"artist"}),r.a.createElement("br",null),r.a.createElement("p",null,"Time"),r.a.createElement("input",{type:"text",value:p,onChange:function(e){E(e.target.value)},id:"time"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"})))};var N=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()("https://tunr4.herokuapp.com/api/songs/");case 3:t=e.sent,o(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(d,{songs:a}),r.a.createElement(E,{songs:a.filter((function(e){return e.isFavorite}))}),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.172fbefc.chunk.js.map