(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(3),u=n.n(i),s=(n(14),n(4)),c=n(5),r=n(7),l=n(6),d=n(1),h=n(8),f=(n(15),function(e){var t=e.buttonDisplayName,n=e.clickHandler;return a.a.createElement("button",{id:"new-quote",onClick:n},t)}),Q=function(e){return a.a.createElement("div",{id:"text"},'"',e.finalQuote?e.finalQuote.quote+"":null,'"')},m=function(e){return a.a.createElement("div",{id:"author"},"- ",e.finalQuote?e.finalQuote.author:null)},b=function(e){return a.a.createElement("div",{id:"quote-machine"},a.a.createElement("div",{id:"quote-box"},a.a.createElement(Q,{finalQuote:e.finalQuote}),a.a.createElement(m,{finalQuote:e.finalQuote}),a.a.createElement(f,{buttonDisplayName:"Next Quote",clickHandler:e.assignNewQuoteIndex}),a.a.createElement("a",{id:"tweet-quote",href:encodeURI("https://twitter.com/intent/tweet?text=".concat(e.finalQuote.quote+" -"+e.finalQuote.author))},"Tweet")))},w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={quotes:[],selectedQuoteIndex:null},n.chooseQuoteIndex=n.chooseQuoteIndex.bind(Object(d.a)(n)),n.assignNewQuoteIndex=n.assignNewQuoteIndex.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){return e.json()})).then((function(t){return e.setState({quotes:t})})).then(this.assignNewQuoteIndex())}},{key:"chooseQuoteIndex",value:function(){return Math.floor(Math.random()*(this.state.quotes.length+1))}},{key:"assignNewQuoteIndex",value:function(){this.setState({selectedQuoteIndex:this.chooseQuoteIndex()})}},{key:"render",value:function(){return console.log(this.state.quotes),console.log(this.state.selectedQuoteIndex+"looks like it worked?"),a.a.createElement("div",{className:"App",id:"quote-box"},this.finalQuote?a.a.createElement(b,{finalQuote:this.finalQuote,assignNewQuoteIndex:this.assignNewQuoteIndex}):null)}},{key:"finalQuote",get:function(){return this.state.quotes[this.state.selectedQuoteIndex]}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ddc5283b.chunk.js.map