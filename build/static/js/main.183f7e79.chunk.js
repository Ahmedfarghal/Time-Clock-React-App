(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),c=n.n(o),r=(n(14),n(1)),l=n(2),u=n(4),s=n(3),m=n(5),d=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={time:(new Date).toLocaleString()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleString()})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{className:"p-main"},"WHAT IS THE TIME NOW"),i.a.createElement("div",{className:"div-main"}," ",this.state.time))}}]),t}(a.Component);n(15);document.body.setAttribute("style","background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);");var v=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.183f7e79.chunk.js.map