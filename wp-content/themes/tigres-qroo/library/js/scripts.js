/*------------------------------------
 * Theme: Template by studio.bio
 * File: Main theme scripts file
 * Author: Joshua Michaels
 * URI: https://studio.bio/template
 *------------------------------------
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/

/*---------------------------------------
* Detect User Agent Script
* http://cssuseragent.org
*----------------------------------------
* This is by far the best detection script I've found.
* Using javascript means that this will work with caching. W00t.
*
* Adds user agent classes to the html element on your page including OS
* and browser version.
*
* This script has support for about every device imaginable so if you
* want to create specific styles for a symbian browser, go to town. It
* has gotten me out of a few sticky situations.

* Used in combination with Browserstack: https://browserstack.com/
* will keep your clients happy.
*
* If you don't need/want this, just remove it.
*
*/
var cssua=function(n,l,p){var q=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,r=/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,s=/\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,t=/\bsilk-accelerated=true\b/,u=/\bfluidapp\b/,v=/(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,w=/(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
x=/(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,k={parse:function(b,d){var a={};d&&(a.standalone=d);b=(""+b).toLowerCase();if(!b)return a;for(var c,e,g=b.split(/[()]/),f=0,k=g.length;f<k;f++)if(f%2){var m=g[f].split(";");c=0;for(e=m.length;c<e;c++)if(q.exec(m[c])){var h=RegExp.$1.split(" ").join("_"),l=RegExp.$2;if(!a[h]||parseFloat(a[h])<parseFloat(l))a[h]=l}}else if(m=g[f].match(r))for(c=0,e=m.length;c<e;c++)h=m[c].split(/[\/\s]+/),h.length&&"mozilla"!==h[0]&&(a[h[0].split(" ").join("_")]=h.slice(1).join("-"));
w.exec(b)?(a.mobile=RegExp.$1,s.exec(b)&&(delete a[a.mobile],a.blackberry=a.version||RegExp.$3||RegExp.$2||RegExp.$1,RegExp.$1?a.mobile="blackberry":"0.0.1"===a.version&&(a.blackberry="7.1.0.0"))):x.exec(b)?(a.game=RegExp.$1,c=a.game.split(" ").join("_"),a.version&&!a[c]&&(a[c]=a.version)):v.exec(b)&&(a.desktop=RegExp.$1);a.intel_mac_os_x?(a.mac_os_x=a.intel_mac_os_x.split("_").join("."),delete a.intel_mac_os_x):a.cpu_iphone_os?(a.ios=a.cpu_iphone_os.split("_").join("."),delete a.cpu_iphone_os):a.cpu_os?
(a.ios=a.cpu_os.split("_").join("."),delete a.cpu_os):"iphone"!==a.mobile||a.ios||(a.ios="1");a.opera&&a.version?(a.opera=a.version,delete a.blackberry):t.exec(b)?a.silk_accelerated=!0:u.exec(b)&&(a.fluidapp=a.version);a.edge&&(delete a.applewebkit,delete a.safari,delete a.chrome,delete a.android);if(a.applewebkit)a.webkit=a.applewebkit,delete a.applewebkit,a.opr&&(a.opera=a.opr,delete a.opr,delete a.chrome),a.safari&&(a.chrome||a.crios||a.fxios||a.opera||a.silk||a.fluidapp||a.phantomjs||a.mobile&&
!a.ios?(delete a.safari,a.vivaldi&&delete a.chrome):a.safari=a.version&&!a.rim_tablet_os?a.version:{419:"2.0.4",417:"2.0.3",416:"2.0.2",412:"2.0",312:"1.3",125:"1.2",85:"1.0"}[parseInt(a.safari,10)]||a.safari);else if(a.msie||a.trident)if(a.opera||(a.ie=a.msie||a.rv),delete a.msie,delete a.android,a.windows_phone_os)a.windows_phone=a.windows_phone_os,delete a.windows_phone_os;else{if("wpdesktop"===a.mobile||"xblwp7"===a.mobile||"zunewp7"===a.mobile)a.mobile="windows desktop",a.windows_phone=9>+a.ie?
"7.0":10>+a.ie?"7.5":"8.0",delete a.windows_nt}else if(a.gecko||a.firefox)a.gecko=a.rv;a.rv&&delete a.rv;a.version&&delete a.version;return a},format:function(b){var d="",a;for(a in b)if(a&&b.hasOwnProperty(a)){var c=a,e=b[a],c=c.split(".").join("-"),g=" ua-"+c;if("string"===typeof e){for(var e=e.split(" ").join("_").split(".").join("-"),f=e.indexOf("-");0<f;)g+=" ua-"+c+"-"+e.substring(0,f),f=e.indexOf("-",f+1);g+=" ua-"+c+"-"+e}d+=g}return d},encode:function(b){var d="",a;for(a in b)a&&b.hasOwnProperty(a)&&
(d&&(d+="\x26"),d+=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b[a]));return d}};k.userAgent=k.ua=k.parse(l,p);l=k.format(k.ua)+" js";n.className=n.className?n.className.replace(/\bno-js\b/g,"")+l:l.substr(1);return k}(document.documentElement,navigator.userAgent,navigator.standalone);


/*---------------------------------------
* ScrollToFixed
* https://github.com/bigspotteddog/ScrollToFixed
*----------------------------------------
* ScrollToFixed jQuery for sticky headers (enabled by default for widths 768 and above).
* If you don't want this, remove it and remove the scrollToFixed function below.
*/

(function(a){a.isScrollToFixed=function(b){return !!a(b).data("ScrollToFixed")};a.ScrollToFixed=function(d,i){var m=this;m.$el=a(d);m.el=d;m.$el.data("ScrollToFixed",m);var c=false;var H=m.$el;var I;var F;var k;var e;var z;var E=0;var r=0;var j=-1;var f=-1;var u=null;var A;var g;function v(){H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");f=-1;E=H.offset().top;r=H.offset().left;if(m.options.offsets){r+=(H.offset().left-H.position().left)}if(j==-1){j=r}I=H.css("position");c=true;if(m.options.bottom!=-1){H.trigger("preFixed.ScrollToFixed");x();H.trigger("fixed.ScrollToFixed")}}function o(){var J=m.options.limit;if(!J){return 0}if(typeof(J)==="function"){return J.apply(H)}return J}function q(){return I==="fixed"}function y(){return I==="absolute"}function h(){return !(q()||y())}function x(){if(!q()){var J=H[0].getBoundingClientRect();u.css({display:H.css("display"),width:J.width,height:J.height,"float":H.css("float")});cssOptions={"z-index":m.options.zIndex,position:"fixed",top:m.options.bottom==-1?t():"",bottom:m.options.bottom==-1?"":m.options.bottom,"margin-left":"0px"};if(!m.options.dontSetWidth){cssOptions.width=H.css("width")}H.css(cssOptions);H.addClass(m.options.baseClassName);if(m.options.className){H.addClass(m.options.className)}I="fixed"}}function b(){var K=o();var J=r;if(m.options.removeOffsets){J="";K=K-E}cssOptions={position:"absolute",top:K,left:J,"margin-left":"0px",bottom:""};if(!m.options.dontSetWidth){cssOptions.width=H.css("width")}H.css(cssOptions);I="absolute"}function l(){if(!h()){f=-1;u.css("display","none");H.css({"z-index":z,width:"",position:F,left:"",top:e,"margin-left":""});H.removeClass("scroll-to-fixed-fixed");if(m.options.className){H.removeClass(m.options.className)}I=null}}function w(J){if(J!=f){H.css("left",r-J);f=J}}function t(){var J=m.options.marginTop;if(!J){return 0}if(typeof(J)==="function"){return J.apply(H)}return J}function B(){if(!a.isScrollToFixed(H)||H.is(":hidden")){return}var M=c;var L=h();if(!c){v()}else{if(h()){E=H.offset().top;r=H.offset().left}}var J=a(window).scrollLeft();var N=a(window).scrollTop();var K=o();if(m.options.minWidth&&a(window).width()<m.options.minWidth){if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}else{if(m.options.maxWidth&&a(window).width()>m.options.maxWidth){if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}else{if(m.options.bottom==-1){if(K>0&&N>=K-t()){if(!L&&(!y()||!M)){p();H.trigger("preAbsolute.ScrollToFixed");b();H.trigger("unfixed.ScrollToFixed")}}else{if(N>=E-t()){if(!q()||!M){p();H.trigger("preFixed.ScrollToFixed");x();f=-1;H.trigger("fixed.ScrollToFixed")}w(J)}else{if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}}}else{if(K>0){if(N+a(window).height()-H.outerHeight(true)>=K-(t()||-n())){if(q()){p();H.trigger("preUnfixed.ScrollToFixed");if(F==="absolute"){b()}else{l()}H.trigger("unfixed.ScrollToFixed")}}else{if(!q()){p();H.trigger("preFixed.ScrollToFixed");x()}w(J);H.trigger("fixed.ScrollToFixed")}}else{w(J)}}}}}function n(){if(!m.options.bottom){return 0}return m.options.bottom}function p(){var J=H.css("position");if(J=="absolute"){H.trigger("postAbsolute.ScrollToFixed")}else{if(J=="fixed"){H.trigger("postFixed.ScrollToFixed")}else{H.trigger("postUnfixed.ScrollToFixed")}}}var D=function(J){if(H.is(":visible")){c=false;B()}};var G=function(J){(!!window.requestAnimationFrame)?requestAnimationFrame(B):B()};var C=function(){var K=document.body;if(document.createElement&&K&&K.appendChild&&K.removeChild){var M=document.createElement("div");if(!M.getBoundingClientRect){return null}M.innerHTML="x";M.style.cssText="position:fixed;top:100px;";K.appendChild(M);var N=K.style.height,O=K.scrollTop;K.style.height="3000px";K.scrollTop=500;var J=M.getBoundingClientRect().top;K.style.height=N;var L=(J===100);K.removeChild(M);K.scrollTop=O;return L}return null};var s=function(J){J=J||window.event;if(J.preventDefault){J.preventDefault()}J.returnValue=false};m.init=function(){m.options=a.extend({},a.ScrollToFixed.defaultOptions,i);z=H.css("z-index");m.$el.css("z-index",m.options.zIndex);u=a("<div />");I=H.css("position");F=H.css("position");k=H.css("float");e=H.css("top");if(h()){m.$el.after(u)}a(window).bind("resize.ScrollToFixed",D);a(window).bind("scroll.ScrollToFixed",G);if("ontouchmove" in window){a(window).bind("touchmove.ScrollToFixed",B)}if(m.options.preFixed){H.bind("preFixed.ScrollToFixed",m.options.preFixed)}if(m.options.postFixed){H.bind("postFixed.ScrollToFixed",m.options.postFixed)}if(m.options.preUnfixed){H.bind("preUnfixed.ScrollToFixed",m.options.preUnfixed)}if(m.options.postUnfixed){H.bind("postUnfixed.ScrollToFixed",m.options.postUnfixed)}if(m.options.preAbsolute){H.bind("preAbsolute.ScrollToFixed",m.options.preAbsolute)}if(m.options.postAbsolute){H.bind("postAbsolute.ScrollToFixed",m.options.postAbsolute)}if(m.options.fixed){H.bind("fixed.ScrollToFixed",m.options.fixed)}if(m.options.unfixed){H.bind("unfixed.ScrollToFixed",m.options.unfixed)}if(m.options.spacerClass){u.addClass(m.options.spacerClass)}H.bind("resize.ScrollToFixed",function(){u.height(H.height())});H.bind("scroll.ScrollToFixed",function(){H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");B()});H.bind("detach.ScrollToFixed",function(J){s(J);H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");a(window).unbind("resize.ScrollToFixed",D);a(window).unbind("scroll.ScrollToFixed",G);H.unbind(".ScrollToFixed");u.remove();m.$el.removeData("ScrollToFixed")});D()};m.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:"scroll-to-fixed-fixed"};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);


/*!
 * unslider-min.js .
 */

 !function(t){"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):"function"==typeof define&&define.amd?define([],t(window.jQuery)):t(window.jQuery)}(function(t){if(!t)return console.warn("Unslider needs jQuery");t.Unslider=function(n,e){var i=this;return i._="unslider",i.defaults={autoplay:!1,delay:3e3,speed:750,easing:"swing",keys:{prev:37,next:39},nav:!0,arrows:{prev:'<a class="'+i._+'-arrow prev">Prev</a>',next:'<a class="'+i._+'-arrow next">Next</a>'},animation:"horizontal",selectors:{container:"ul:first",slides:"li"},animateHeight:!1,activeClass:i._+"-active",swipe:!0,swipeThreshold:.2},i.$context=n,i.options={},i.$parent=null,i.$container=null,i.$slides=null,i.$nav=null,i.$arrows=[],i.total=0,i.current=0,i.prefix=i._+"-",i.eventSuffix="."+i.prefix+~~(2e3*Math.random()),i.interval=[],i.init=function(n){return i.options=t.extend({},i.defaults,n),i.$container=i.$context.find(i.options.selectors.container).addClass(i.prefix+"wrap"),i.$slides=i.$container.children(i.options.selectors.slides),i.setup(),t.each(["nav","arrows","keys","infinite"],function(n,e){i.options[e]&&i["init"+t._ucfirst(e)]()}),jQuery.event.special.swipe&&i.options.swipe&&i.initSwipe(),i.options.autoplay&&i.start(),i.calculateSlides(),i.$context.trigger(i._+".ready"),i.animate(i.options.index||i.current,"init")},i.setup=function(){i.$context.addClass(i.prefix+i.options.animation).wrap('<div class="'+i._+'" />'),i.$parent=i.$context.parent("."+i._),"static"===i.$context.css("position")&&i.$context.css("position","relative"),i.$context.css("overflow","hidden")},i.calculateSlides=function(){if(i.$slides=i.$container.children(i.options.selectors.slides),i.total=i.$slides.length,"fade"!==i.options.animation){var t="width";"vertical"===i.options.animation&&(t="height"),i.$container.css(t,100*i.total+"%").addClass(i.prefix+"carousel"),i.$slides.css(t,100/i.total+"%")}},i.start=function(){return i.interval.push(setTimeout(function(){i.next()},i.options.delay)),i},i.stop=function(){for(var t;t=i.interval.pop();)clearTimeout(t);return i},i.initNav=function(){var n=t('<nav class="'+i.prefix+'nav"><ol /></nav>');i.$slides.each(function(e){var o=this.getAttribute("data-nav")||e+1;t.isFunction(i.options.nav)&&(o=i.options.nav.call(i.$slides.eq(e),e,o)),n.children("ol").append('<li data-slide="'+e+'">'+o+"</li>")}),i.$nav=n.insertAfter(i.$context),i.$nav.find("li").on("click"+i.eventSuffix,function(){var n=t(this).addClass(i.options.activeClass);n.siblings().removeClass(i.options.activeClass),i.animate(n.attr("data-slide"))})},i.initArrows=function(){!0===i.options.arrows&&(i.options.arrows=i.defaults.arrows),t.each(i.options.arrows,function(n,e){i.$arrows.push(t(e).insertAfter(i.$context).on("click"+i.eventSuffix,i[n]))})},i.initKeys=function(){!0===i.options.keys&&(i.options.keys=i.defaults.keys),t(document).on("keyup"+i.eventSuffix,function(n){t.each(i.options.keys,function(e,o){n.which===o&&t.isFunction(i[e])&&i[e].call(i)})})},i.initSwipe=function(){var t=i.$slides.width();"fade"!==i.options.animation&&i.$container.on({movestart:function(t){if(t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)return!!t.preventDefault();i.$container.css("position","relative")},move:function(n){i.$container.css("left",-100*i.current+100*n.distX/t+"%")},moveend:function(n){Math.abs(n.distX)/t>i.options.swipeThreshold?i[n.distX<0?"next":"prev"]():i.$container.animate({left:-100*i.current+"%"},i.options.speed/2)}})},i.initInfinite=function(){var n=["first","last"];t.each(n,function(t,e){i.$slides.push.apply(i.$slides,i.$slides.filter(':not(".'+i._+'-clone")')[e]().clone().addClass(i._+"-clone")["insert"+(0===t?"After":"Before")](i.$slides[n[~~!t]]()))})},i.destroyArrows=function(){t.each(i.$arrows,function(t,n){n.remove()})},i.destroySwipe=function(){i.$container.off("movestart move moveend")},i.destroyKeys=function(){t(document).off("keyup"+i.eventSuffix)},i.setIndex=function(t){return t<0&&(t=i.total-1),i.current=Math.min(Math.max(0,t),i.total-1),i.options.nav&&i.$nav.find('[data-slide="'+i.current+'"]')._active(i.options.activeClass),i.$slides.eq(i.current)._active(i.options.activeClass),i},i.animate=function(n,e){if("first"===n&&(n=0),"last"===n&&(n=i.total),isNaN(n))return i;i.options.autoplay&&i.stop().start(),i.setIndex(n),i.$context.trigger(i._+".change",[n,i.$slides.eq(n)]);var o="animate"+t._ucfirst(i.options.animation);return t.isFunction(i[o])&&i[o](i.current,e),i},i.next=function(){var t=i.current+1;return t>=i.total&&(t=i.options.noloop&&!i.options.infinite?i.total-1:0),i.animate(t,"next")},i.prev=function(){var t=i.current-1;return t<0&&(t=i.options.noloop&&!i.options.infinite?0:i.total-1),i.animate(t,"prev")},i.animateHorizontal=function(t){var n="left";return"rtl"===i.$context.attr("dir")&&(n="right"),i.options.infinite&&i.$container.css("margin-"+n,"-100%"),i.slide(n,t)},i.animateVertical=function(t){return i.options.animateHeight=!0,i.options.infinite&&i.$container.css("margin-top",-i.$slides.outerHeight()),i.slide("top",t)},i.slide=function(t,n){if(i.animateHeight(n),i.options.infinite){var e;n===i.total-1&&(e=i.total-3,n=-1),n===i.total-2&&(e=0,n=i.total-2),"number"==typeof e&&(i.setIndex(e),i.$context.on(i._+".moved",function(){i.current===e&&i.$container.css(t,-100*e+"%").off(i._+".moved")}))}var o={};return o[t]=-100*n+"%",i._move(i.$container,o)},i.animateFade=function(t){i.animateHeight(t);var n=i.$slides.eq(t).addClass(i.options.activeClass);i._move(n.siblings().removeClass(i.options.activeClass),{opacity:0}),i._move(n,{opacity:1},!1)},i.animateHeight=function(t){i.options.animateHeight&&i._move(i.$context,{height:i.$slides.eq(t).outerHeight()},!1)},i._move=function(t,n,e,o){return!1!==e&&(e=function(){i.$context.trigger(i._+".moved")}),t._move(n,o||i.options.speed,i.options.easing,e)},i.init(e)},t.fn._active=function(t){return this.addClass(t).siblings().removeClass(t)},t._ucfirst=function(t){return(t+"").toLowerCase().replace(/^./,function(t){return t.toUpperCase()})},t.fn._move=function(){return this.stop(!0,!0),t.fn[t.fn.velocity?"velocity":"animate"].apply(this,arguments)},t.fn.unslider=function(n){return this.each(function(e,i){var o=t(i);if(!(t(i).data("unslider")instanceof t.Unslider)){if("string"==typeof n&&o.data("unslider")){n=n.split(":");var s=o.data("unslider")[n[0]];if(t.isFunction(s))return s.apply(o,n[1]?n[1].split(","):null)}return o.data("unslider",new t.Unslider(o,n))}})}});


/*!------------------------------------------------------
 * jQuery nearest v1.0.3
 * http://github.com/jjenzz/jQuery.nearest
 * ------------------------------------------------------
 * Copyright (c) 2012 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Have you ever tried to find the nearest element down in
 * the DOM that wasn't a child? Then jQuery nearest is for you.
 *
 * Like this: jQuery(this).nearest('.overlay');
 */
(function(a,b){a.fn.nearest=function(c){var d,g,f,e,h,i=b.querySelectorAll;function j(k){g=g?g.add(k):a(k)}this.each(function(){d=this;a.each(c.split(","),function(){e=a.trim(this);if(!e.indexOf("#")){j((i?b.querySelectorAll(e):a(e)))}else{h=d.parentNode;while(h){f=i?h.querySelectorAll(e):a(h).find(e);if(f.length){j(f);break}h=h.parentNode}}})});return g||a()}}(jQuery,document));


/*---------------------------------------
* Smooth scrolling to anchor links (minified)
* https://css-tricks.com/snippets/jquery/smooth-scrolling/
*----------------------------------------
*
*/
jQuery(document).ready(function(t){t('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=t(this.hash);a=a.length?a:t("[name="+this.hash.slice(1)+"]"),a.length&&(e.preventDefault(),t("html, body").animate({scrollTop:a.offset().top},1e3,function(){var e=t(a);return e.focus(),e.is(":focus")?!1:(e.attr("tabindex","-1"),void e.focus())}))}})});


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function


/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

  /*
   * Let's fire off the gravatar function
   * You can remove this if you don't need it
  */
  loadGravatars();

viewport = updateViewportDimensions();

	if (viewport.width >= 768) {

	  // Sticky header (comment or delete to remove)
	  $('header.header').scrollToFixed();

	}

	if ($('.my-slider')){
		$('.my-slider').unslider({
      autoplay: true,
      arrows: false,
      nav: false,
      infinite: true
    });
	}

}); /* end of as page load scripts */
