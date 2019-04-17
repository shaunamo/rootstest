/*!
 * Packery PACKAGED | Metafizzy | http://packery.metafizzy.co
 */

(function(t){"use strict";function e(t){return RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){var i=n(t,e)?r:o;i(t,e)}var n,o,r;"classList"in document.documentElement?(n=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(n=function(t,i){return e(i).test(t.className)},o=function(t,e){n(t,e)||(t.className=t.className+" "+e)},r=function(t,i){t.className=t.className.replace(e(i)," ")}),t.classie={hasClass:n,addClass:o,removeClass:r,toggleClass:i,has:n,add:o,remove:r,toggle:i}})(window),function(t){"use strict";function e(){}function i(t,e){if(o)return e.indexOf(t);for(var i=e.length;i--;)if(e[i]===t)return i;return-1}var n=e.prototype,o=Array.prototype.indexOf?!0:!1;n._getEvents=function(){return this._events||(this._events={})},n.getListeners=function(t){var e=this._getEvents();return e[t]||(e[t]=[])},n.addListener=function(t,e){var n=this.getListeners(t);return-1===i(e,n)&&n.push(e),this},n.on=n.addListener,n.removeListener=function(t,e){var n=this.getListeners(t),o=i(e,n);return-1!==o&&(n.splice(o,1),0===n.length&&this.removeEvent(t)),this},n.off=n.removeListener,n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"==typeof e)for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));else for(n=i.length;n--;)r.call(this,e,i[n]);return this},n.removeEvent=function(t){return t?delete this._getEvents()[t]:delete this._events,this},n.emitEvent=function(t,e){for(var i,n=this.getListeners(t),o=n.length;o--;)i=e?n[o].apply(null,e):n[o](),i===!0&&this.removeListener(t,n[o]);return this},n.trigger=n.emitEvent,n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},"function"==typeof define&&define.amd?define(function(){return e}):t.EventEmitter=e}(this),function(t){"use strict";var e=document.documentElement,i=function(){};e.addEventListener?i=function(t,e,i){t.addEventListener(e,i,!1)}:e.attachEvent&&(i=function(e,i,n){e[i+n]=n.handleEvent?function(){var e=t.event;e.target=e.target||e.srcElement,n.handleEvent.call(n,e)}:function(){var i=t.event;i.target=i.target||i.srcElement,n.call(e,i)},e.attachEvent("on"+i,e[i+n])});var n=function(){};e.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:e.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]),delete t[e+i]});var o={bind:i,unbind:n};"function"==typeof define&&define.amd?define(o):t.eventie=o}(this),function(t){"use strict";function e(t){e.isReady?t():e.on("ready",t)}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||(e.isReady=!0,e.emit("ready",t))}var n=t.EventEmitter,o=t.eventie,r=t.document;e.isReady=!1;for(var s in n.prototype)e[s]=n.prototype[s];o.bind(r,"DOMContentLoaded",i),o.bind(r,"readystatechange",i),o.bind(t,"load",i),t.docReady=e}(this),function(t){"use strict";function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define(function(){return e}):t.getStyleProperty=e}(window),function(t){"use strict";function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var n=s[e];t[n]=0}return t}function n(t){function n(t){if("object"==typeof t&&t.nodeType){var n=r(t);if("none"===n.display)return i();var h={};h.width=t.offsetWidth,h.height=t.offsetHeight;for(var p=h.isBorderBox=!(!a||!n[a]||"border-box"!==n[a]),c=0,u=s.length;u>c;c++){var l=s[c],d=n[l],f=parseFloat(d);h[l]=isNaN(f)?0:f}var m=h.paddingLeft+h.paddingRight,y=h.paddingTop+h.paddingBottom,g=h.marginLeft+h.marginRight,v=h.marginTop+h.marginBottom,x=h.borderLeftWidth+h.borderRightWidth,E=h.borderTopWidth+h.borderBottomWidth,w=p&&o,S=e(n.width);S!==!1&&(h.width=S+(w?0:m+x));var T=e(n.height);return T!==!1&&(h.height=T+(w?0:y+E)),h.innerWidth=h.width-(m+x),h.innerHeight=h.height-(y+E),h.outerWidth=h.width+g,h.outerHeight=h.height+v,h}}var o,a=t("boxSizing");return function(){if(a){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[a]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=r(t);o=200===e(n.width),i.removeChild(t)}}(),n}var o=document.defaultView,r=o&&o.getComputedStyle?function(t){return o.getComputedStyle(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property"],n):t.getSize=n(t.getStyleProperty)}(window),function(t,e){"use strict";function i(){}function n(t){t.prototype.option||(t.prototype.option=function(t){e.isPlainObject(t)&&(this.options=e.extend(!0,this.options,t))})}function o(t,i){e.fn[t]=function(n){if("string"==typeof n){for(var o=r.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],c=e.data(p,t);if(c)if(e.isFunction(c[n])&&"_"!==n.charAt(0)){var u=c[n].apply(c,o);if(void 0!==u)return u}else s("no such method '"+n+"' for "+t+" instance");else s("cannot call methods on "+t+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=e.data(this,t);o?(o.option(n),o._init()):(o=new i(this,n),e.data(this,t,o))})}}if(e){var r=Array.prototype.slice,s="undefined"==typeof console?i:function(t){console.error(t)};e.bridget=function(t,e){n(e),o(t,e)}}}(window,window.jQuery),function(t,e){"use strict";function i(t,e){return t[a](e)}function n(t){var e=document.createDocumentFragment();e.appendChild(t)}function o(t,e){t.parentNode||n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return t.parentNode||n(t),i(t,e)}var s,a=function(){for(var t=["matchesSelector","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],i=0,n=t.length;n>i;i++){var o=t[i];if(e[o])return o}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define(function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){"use strict";function e(t){for(var i in e.defaults)this[i]=e.defaults[i];for(i in t)this[i]=t[i]}var i=t.Packery=function(){};i.Rect=e,e.defaults={x:0,y:0,width:0,height:0},e.prototype.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},e.prototype.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,n=t.x+t.width,o=t.y+t.height;return n>this.x&&e>t.x&&o>this.y&&i>t.y},e.prototype.getMaximalFreeRects=function(t){if(!this.overlaps(t))return!1;var i,n=[],o=this.x+this.width,r=this.y+this.height,s=t.x+t.width,a=t.y+t.height;return this.y<t.y&&(i=new e({x:this.x,y:this.y,width:this.width,height:t.y-this.y}),n.push(i)),o>s&&(i=new e({x:s,y:this.y,width:o-s,height:this.height}),n.push(i)),r>a&&(i=new e({x:this.x,y:a,width:this.width,height:r-a}),n.push(i)),this.x<t.x&&(i=new e({x:this.x,y:this.y,width:t.x-this.x,height:this.height}),n.push(i)),n},e.prototype.canFit=function(t){return this.width>=t.width&&this.height>=t.height}}(window),function(t){"use strict";function e(t,e){this.width=t||0,this.height=e||0,this.reset()}var i=t.Packery,n=i.Rect;e.prototype.reset=function(){this.spaces=[],this.newSpaces=[];var t=new n({x:0,y:0,width:this.width,height:this.height});this.spaces.push(t)},e.prototype.pack=function(t){for(var e=0,i=this.spaces.length;i>e;e++){var n=this.spaces[e];if(n.canFit(t)){this.placeInSpace(t,n);break}}},e.prototype.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},e.prototype.placed=function(t){for(var i=[],n=0,o=this.spaces.length;o>n;n++){var r=this.spaces[n],s=r.getMaximalFreeRects(t);s?i.push.apply(i,s):i.push(r)}this.spaces=i,e.mergeRects(this.spaces),this.spaces.sort(e.spaceSorterTopLeft)},e.mergeRects=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];if(n){var o=t.slice(0);o.splice(e,1);for(var r=0,s=0,a=o.length;a>s;s++){var h=o[s],p=e>s?0:1;n.contains(h)&&(t.splice(s+p-r,1),r++)}}}return t},e.spaceSorterTopLeft=function(t,e){return t.y-e.y||t.x-e.x},e.spaceSorterLeftTop=function(t,e){return t.x-e.x||t.y-e.y},i.Packer=e}(window),function(t){"use strict";function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,e){this.element=t,this.packery=e,this.position={x:0,y:0},this.rect=new o,this.placeRect=new o,this.element.style.position="absolute"}var n=t.Packery,o=n.Rect,r=t.getSize,s=t.getStyleProperty,a=t.EventEmitter,h=document.defaultView,p=h&&h.getComputedStyle?function(t){return h.getComputedStyle(t,null)}:function(t){return t.currentStyle},c=s("transition"),u=s("transform"),l=c&&u,d=!!s("perspective"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[c],m={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform",OTransform:"-o-transform",transform:"transform"}[u];e(i.prototype,a.prototype),i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.getSize=function(){this.size=r(this.element)},i.prototype.css=function(t){var e=this.element.style;for(var i in t)e[i]=t[i]},i.prototype.getPosition=function(){var t=p(this.element),e=parseInt(t.left,10),i=parseInt(t.top,10);e=isNaN(e)?0:e,i=isNaN(i)?0:i;var n=this.packery.elementSize;e-=n.paddingLeft,i-=n.paddingTop,this.position.x=e,this.position.y=i};var y=d?function(t,e){return"translate3d( "+t+"px, "+e+"px, 0)"}:function(t,e){return"translate( "+t+"px, "+e+"px)"};i.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,h=e-n,p={};p[m]=y(a,h),this.transition(p,this.layoutPosition)},i.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},i.prototype.moveTo=l?i.prototype._transitionTo:i.prototype.goTo,i.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},i.prototype.layoutPosition=function(){var t=this.packery.elementSize;this.css({left:this.position.x+t.paddingLeft+"px",top:this.position.y+t.paddingTop+"px"}),this.emitEvent("layout",[this])},i.prototype._nonTransition=function(t,e){this.css(t),e&&e.call(this)},i.prototype._transition=function(t,e){this.transitionStyle=t;var i=[];for(var n in t)i.push(n);var o={};o[c+"Property"]=i.join(","),o[c+"Duration"]=this.packery.options.transitionDuration,this.element.addEventListener(f,this,!1),e&&this.on("transitionEnd",function(t){return e.call(t),!0}),this.css(o),this.css(t),this.isTransitioning=!0},i.prototype.transition=i.prototype[c?"_transition":"_nonTransition"],i.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},i.prototype.onotransitionend=function(t){this.ontransitionend(t)},i.prototype.ontransitionend=function(t){if(t.target===this.element){this.onTransitionEnd&&(this.onTransitionEnd(),delete this.onTransitionEnd),this.removeTransitionStyles();var e={};for(var i in this.transitionStyle)e[i]="";this.css(e),this.element.removeEventListener(f,this,!1),delete this.transitionStyle,this.isTransitioning=!1,this.emitEvent("transitionEnd",[this])}},i.prototype.removeTransitionStyles=function(){var t={};t[c+"Property"]="",t[c+"Duration"]="",this.css(t)},i.prototype.remove=function(){var t={opacity:0};t[m]="scale(0.001)",this.transition(t,this.removeElem)},i.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},i.prototype.reveal=c?function(){var t={opacity:0};t[m]="scale(0.001)",this.css(t);var e=this.element.offsetHeight,i={opacity:1};i[m]="scale(1)",this.transition(i),e=null}:function(){},i.prototype.destroy=function(){this.css({position:"",left:"",top:""})},i.prototype.dragStart=function(){this.getPosition(),this.removeTransitionStyles(),this.isTransitioning&&u&&(this.element.style[u]="none"),this.getSize(),this.isPlacing=!0,this.needsPositioning=!1,this.positionPlaceRect(this.position.x,this.position.y),this.isTransitioning=!1,this.didDrag=!1},i.prototype.dragMove=function(t,e){this.didDrag=!0;var i=this.packery.elementSize;t-=i.paddingLeft,e-=i.paddingTop,this.positionPlaceRect(t,e)},i.prototype.dragStop=function(){this.getPosition();var t=this.position.x!==this.placeRect.x,e=this.position.y!==this.placeRect.y;this.needsPositioning=t||e,this.didDrag=!1},i.prototype.positionPlaceRect=function(t,e,i){this.placeRect.x=this.getPlaceRectCoord(t,!0),this.placeRect.y=this.getPlaceRectCoord(e,!1,i)},i.prototype.getPlaceRectCoord=function(t,e,i){var n=e?"Width":"Height",o=this.size["outer"+n],r=this.packery[e?"columnWidth":"rowHeight"],s=this.packery.elementSize["inner"+n];e||(s=Math.max(s,this.packery.maxY),this.packery.rowHeight||(s-=this.packery.gutter));var a;if(r){r+=this.packery.gutter,s+=e?this.packery.gutter:0,t=Math.round(t/r);var h=Math[e?"floor":"ceil"](s/r);h-=Math.ceil(o/r),a=h}else a=s-o;return t=i?t:Math.min(t,a),t*=r||1,Math.max(0,t)},i.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x,this.rect.y=this.placeRect.y},n.Item=i}(window),function(t){"use strict";function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){var e=[];if("number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e}function n(t,i){if(!t||!g(t))return m&&m.error("bad Packery element: "+t),void 0;this.element=t,this.options=e({},this.options),e(this.options,i);var n=++x;this.element.packeryGUID=n,E[n]=this,this._create(),this.options.isInitLayout&&this.layout()}var o=t.Packery,r=o.Rect,s=o.Packer,a=o.Item,h=t.classie,p=t.docReady,c=t.EventEmitter,u=t.eventie,l=t.getSize,d=t.matchesSelector,f=t.document,m=t.console,y=t.jQuery,g="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},v=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1},x=0,E={};e(n.prototype,c.prototype),n.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isResizeBound:!0,transitionDuration:"0.4s"},n.prototype._create=function(){this.packer=new s,this.reloadItems(),this.stampedElements=[],this.stamp(this.options.stamped);var t=this.options.containerStyle;e(this.element.style,t),this.options.isResizeBound&&this.bindResize();var i=this;this.handleDraggabilly={dragStart:function(t){i.itemDragStart(t.element)},dragMove:function(t){i.itemDragMove(t.element,t.position.x,t.position.y)},dragEnd:function(t){i.itemDragEnd(t.element)}},this.handleUIDraggable={start:function(t){i.itemDragStart(t.currentTarget)},drag:function(t,e){i.itemDragMove(t.currentTarget,e.position.left,e.position.top)},stop:function(t){i.itemDragEnd(t.currentTarget)}}},n.prototype.reloadItems=function(){this.items=this._getItems(this.element.children)},n.prototype._getItems=function(t){for(var e=this._filterFindItemElements(t),i=[],n=0,o=e.length;o>n;n++){var r=e[n],s=new a(r,this);i.push(s)}return i},n.prototype._filterFindItemElements=function(t){t=i(t);var e=this.options.itemSelector;if(!e)return t;for(var n=[],o=0,r=t.length;r>o;o++){var s=t[o];d(s,e)&&n.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)n.push(a[h])}return n},n.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},n.prototype.layout=function(){this._prelayout();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},n.prototype._init=n.prototype.layout,n.prototype._prelayout=function(){this.elementSize=l(this.element),this._getMeasurements(),this.packer.width=this.elementSize.innerWidth+this.gutter,this.packer.height=Number.POSITIVE_INFINITY,this.packer.reset(),this.maxY=0,this.placeStampedElements()},n.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},n.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):g(n)&&(i=n),this[t]=i?l(i)[e]:n):this[t]=0},n.prototype.layoutItems=function(t,e){var i=this._getLayoutItems(t);this._itemsOn(i,"layout",function(){this.emitEvent("layoutComplete",[this,i])});for(var n=0,o=i.length;o>n;n++){var r=i[n];this._packItem(r),this._layoutItem(r,e)}var s=this.elementSize,a=this.maxY-this.gutter;s.isBorderBox&&(a+=s.paddingBottom+s.paddingTop+s.borderTopWidth+s.borderBottomWidth),this.element.style.height=a+"px"},n.prototype._getLayoutItems=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},n.prototype._packItem=function(t){this._setRectSize(t.element,t.rect),this.packer.pack(t.rect),this._setMaxY(t.rect)},n.prototype._setMaxY=function(t){this.maxY=Math.max(t.y+t.height,this.maxY)},n.prototype._setRectSize=function(t,e){var i=l(t),n=i.outerWidth,o=i.outerHeight,r=this.columnWidth+this.gutter,s=this.rowHeight+this.gutter;n=this.columnWidth?Math.ceil(n/r)*r:n+this.gutter,o=this.rowHeight?Math.ceil(o/s)*s:o+this.gutter,e.width=Math.min(n,this.packer.width),e.height=o},n.prototype._layoutItem=function(t,e){var i=t.rect;e?t.goTo(i.x,i.y):t.moveTo(i.x,i.y)},n.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},n.prototype.stamp=function(t){if(t){"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=i(t),this.stampedElements.push.apply(this.stampedElements,t);for(var e=0,n=t.length;n>e;e++){var o=t[e];this.ignore(o)}}},n.prototype.unstamp=function(t){if(t){t=i(t);for(var e=0,n=t.length;n>e;e++){var o=t[e],r=v(this.stampedElements,o);-1!==r&&this.stampedElements.splice(r,1),this.unignore(o)}}},n.prototype.placeStampedElements=function(){if(this.stampedElements&&this.stampedElements.length){this._getBounds();for(var t=0,e=this.stampedElements.length;e>t;t++){var i=this.stampedElements[t];this.placeStamp(i)}}},n.prototype._getBounds=function(){var t=this.element.getBoundingClientRect();this._boundingLeft=t.left+this.elementSize.paddingLeft,this._boundingTop=t.top+this.elementSize.paddingTop},n.prototype.placeStamp=function(t){var e,i=this.getItem(t);e=i&&i.isPlacing?i.placeRect:this._getElementOffsetRect(t),this._setRectSize(t,e),this.packer.placed(e),this._setMaxY(e)},n.prototype._getElementOffsetRect=function(t){var e=t.getBoundingClientRect(),i=new r({x:e.left-this._boundingLeft,y:e.top-this._boundingTop});return i.x-=this.elementSize.borderLeftWidth,i.y-=this.elementSize.borderTopWidth,i},n.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.prototype.bindResize=function(){this.isResizeBound||(u.bind(t,"resize",this),this.isResizeBound=!0)},n.prototype.unbindResize=function(){u.unbind(t,"resize",this),this.isResizeBound=!1},n.prototype.onresize=function(){function t(){e.resize()}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},n.prototype.resize=function(){var t=l(this.element);t.innerWidth!==this.elementSize.innerWidth&&(this.layout(),delete this.resizeTimeout)},n.prototype.addItems=function(t){var e=this._getItems(t);if(e.length)return this.items.push.apply(this.items,e),e},n.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},n.prototype.prepended=function(t){var e=this._getItems(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._prelayout(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},n.prototype.reveal=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.reveal()}},n.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},n.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},n.prototype.remove=function(t){t=i(t);var e=this.getItems(t);this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var n=0,o=e.length;o>n;n++){var r=e[n];r.remove();var s=v(this.items,r);this.items.splice(s,1)}},n.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},n.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},n.prototype.sortItemsByPosition=function(){this.items.sort(function(t,e){return t.position.y-e.position.y||t.position.x-e.position.x})},n.prototype.fit=function(t,e,i){function n(){s++,2===s&&r.emitEvent("fitComplete",[r,o])}var o=this.getItem(t);if(o){this._getMeasurements(),this.stamp(o.element),o.getSize(),o.isPlacing=!0,e=void 0===e?o.rect.x:e,i=void 0===i?o.rect.y:i,o.positionPlaceRect(e,i,!0);var r=this,s=0;o.on("layout",function(){return n(),!0}),this.on("layoutComplete",function(){return n(),!0}),o.moveTo(o.placeRect.x,o.placeRect.y),this.layout(),this.unstamp(o.element),this.sortItemsByPosition(),o.isPlacing=!1,o.copyPlaceRectPosition()}},n.prototype.itemDragStart=function(t){this.stamp(t);var e=this.getItem(t);e&&e.dragStart()},n.prototype.itemDragMove=function(t,e,i){function n(){r.layout(),delete r.dragTimeout}var o=this.getItem(t);o&&o.dragMove(e,i);var r=this;this.clearDragTimeout(),this.dragTimeout=setTimeout(n,40)},n.prototype.clearDragTimeout=function(){this.dragTimeout&&clearTimeout(this.dragTimeout)},n.prototype.itemDragEnd=function(t){function e(){return s++,s!==r?!0:(n&&(h.remove(n.element,"is-positioning-post-drag"),n.isPlacing=!1,n.copyPlaceRectPosition()),a.unstamp(t),a.sortItemsByPosition(),n&&o&&a.emitEvent("dragItemPositioned",[a,n]),!0)}var i,n=this.getItem(t);if(n&&(i=n.didDrag,n.dragStop()),!n||!i&&!n.needsPositioning)return this.unstamp(t),void 0;h.add(n.element,"is-positioning-post-drag");var o=n.needsPositioning,r=o?2:1,s=0,a=this;o?(n.on("layout",e),n.moveTo(n.placeRect.x,n.placeRect.y)):n&&n.copyPlaceRectPosition(),this.clearDragTimeout(),this.on("layoutComplete",e),this.layout()},n.prototype.bindDraggabillyEvents=function(t){t.on("dragStart",this.handleDraggabilly.dragStart),t.on("dragMove",this.handleDraggabilly.dragMove),t.on("dragEnd",this.handleDraggabilly.dragEnd)},n.prototype.bindUIDraggableEvents=function(t){t.on("dragstart",this.handleUIDraggable.start).on("drag",this.handleUIDraggable.drag).on("dragstop",this.handleUIDraggable.stop)},n.prototype.destroy=function(){this.element.style.position="",this.element.style.height="",delete this.element.packeryGUID;for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.destroy()}this.unbindResize()},n.data=function(t){var e=t.packeryGUID;return e&&E[e]},p(function(){for(var t=f.querySelectorAll(".js-packery"),e=0,i=t.length;i>e;e++){var o,r=t[e],s=r.getAttribute("data-packery-options");try{o=s&&JSON.parse(s)}catch(a){m&&m.error("Error parsing data-packery-options on "+r.nodeName.toLowerCase()+(r.id?"#"+r.id:"")+": "+a);continue}var h=new n(r,o);y&&y.data(r,"packery",h)}}),y&&y.bridget&&y.bridget("packery",n),n.Rect=r,n.Packer=s,n.Item=a,t.Packery=n}(window);
