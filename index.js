!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(4);var i=React.createClass({displayName:"DummyContent",render:function(){return React.DOM.div({className:"link-content"},React.DOM.img({className:"option-image",src:"https://placeimg.com/400/300/tech/grayscale"}),React.DOM.h2(null,this.props.title),React.DOM.p(null,this.props.description))}}),o=i({title:"Some title",description:"A nice description"}),r={title:"First",options:[{title:"Second",content:o,options:[{title:"Thirth",content:o,options:[]},{title:"Forth",content:o,options:[]},{title:"Fifth",content:o,options:[]},{title:"Sixth",content:o,options:[]}]},{title:"Second",content:o,options:[{title:"Thirth",content:o,options:[]},{title:"Forth",content:o,options:[]},{title:"Fifth",content:o,options:[]},{title:"Sixth",content:o,options:[]}]},{title:"Second",content:o,options:[{title:"Thirth",content:o,options:[]},{title:"Forth",content:o,options:[]},{title:"Fifth",content:o,options:[]},{title:"Sixth",content:o,options:[]}]},{title:"Second",content:o,options:[{title:"Thirth",content:o,options:[]},{title:"Forth",content:o,options:[]},{title:"Fifth",content:o,options:[]},{title:"Sixth",content:o,options:[]}]},{title:"Other",content:o,options:[{title:"Thirth",content:o,options:[]},{title:"Forth",content:o,options:[]},{title:"Fifth",content:o,options:[]},{title:"Sixth",content:o,options:[]}]}]},s=function(t){console.log(t)},a=React.createClass({displayName:"Example",render:function(){var t=React.DOM.div({className:"final-step"},React.DOM.h1(null,"Send the results"),React.DOM.button({className:"send"},"Send"));return Choices({backText:"voltar",finalPage:t,onChange:s,structure:r})}});React.renderComponent(a(null),document.getElementById("container"))},function(t,e,n){e=t.exports=n(2)(),e.push([t.id,"@import url(http://fonts.googleapis.com/css?family=Gentium+Basic);",""]),e.push([t.id,"@import url(http://fonts.googleapis.com/css?family=Open+Sans);",""]),e.push([t.id,"body{background-color:#333;color:#dedede;font-family:'Gentium Basic',serif;margin:8px}h1,h2{font-family:'Open Sans',sans-serif;text-align:center;text-transform:uppercase}.navigation-history{padding:0 5%}button.button-back{background-color:#09A1B2;border:none;border-radius:5px;color:#DEDEDE;display:inline-block;font-size:16px;height:32px;margin:10px;position:relative;top:-4px}ul.navigation-list{display:inline-block;font-size:32px;padding:10px;margin:5px 0 10px;text-transform:uppercase}li.navigation-item{display:inline;width:50%}li.navigation-item.actual{text-decoration:underline}li.navigation-item:after{content:' > '}li.navigation-item:last-child:after{content:''}ul.options-list{list-style:none;margin:0 5%;padding:0}li.option-item{width:25%;display:inline-block}a.option-link{color:#555;text-align:center;text-decoration:none}a.option-link:visited{color:#555}.option-image{width:100%}.link-content{transition:all .4s ease-in-out;margin:10px;background-color:#FF9140;padding:10px}.link-content:hover{box-shadow:5px 5px 3px rgba(0,0,0,.4);background:#FFA059}.final-step{border:1px solid #DEDEDE;border-radius:5px;margin:0 30%;text-align:center}button.send{background-color:#09A1B2;border:none;border-radius:5px;color:#DEDEDE;display:inline-block;font-size:16px;height:32px;margin:10px}",""])},function(t){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];t.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return t.join("")},t}},function(t){function e(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=l[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(o(i.parts[s],e))}else{for(var a=[],s=0;s<i.parts.length;s++)a.push(o(i.parts[s],e));l[i.id]={id:i.id,refs:1,parts:a}}}}function n(t){for(var e=[],n={},i=0;i<t.length;i++){var o=t[i],r=o[0],s=o[1],a=o[2],l=o[3],c={css:s,media:a,sourceMap:l};n[r]?n[r].parts.push(c):e.push(n[r]={id:r,parts:[c]})}return e}function i(){var t=document.createElement("style"),e=d();return t.type="text/css",e.appendChild(t),t}function o(t,e){var n,o,r;if(e.singleton){var l=f++;n=u||(u=i()),o=s.bind(null,n,l,!1),r=s.bind(null,n,l,!0)}else n=i(),o=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function r(t,e,n){var i=["/** >>"+e+" **/","/** "+e+"<< **/"],o=t.lastIndexOf(i[0]),r=n?i[0]+n+i[1]:"";if(t.lastIndexOf(i[0])>=0){var s=t.lastIndexOf(i[1])+i[1].length;return t.slice(0,o)+r+t.slice(s)}return t+r}function s(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=r(t.styleSheet.cssText,e,o);else{var s=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(o&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(o))+" */",n='@import url("data:stylesheet/css;base64,'+btoa(n)+'")'}catch(r){}if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=c(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),d=c(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,f=0;t.exports=function(t,i){i=i||{},"undefined"==typeof i.singleton&&(i.singleton=p());var o=n(t);return e(o,i),function(t){for(var r=[],s=0;s<o.length;s++){var a=o[s],c=l[a.id];c.refs--,r.push(c)}if(t){var p=n(t);e(p,i)}for(var s=0;s<r.length;s++){var c=r[s];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete l[c.id]}}}}},function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{})}])});