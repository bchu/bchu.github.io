function getNav(){var a=$("ul.main-navigation, ul[role=main-navigation]").before('<fieldset class="mobile-nav">'),b=$("fieldset.mobile-nav").append("<select>");b.find("select").append('<option value="">Navigate&hellip;</option>');var c=function(){b.find("select").append('<option value="'+this.href+'">&raquo; '+$(this).text()+"</option>")};a.find("a").each(c),$("ul.subscription a").each(c),b.find("select").bind("change",function(a){a.target.value&&(window.location.href=a.target.value)})}function addSidebarToggler(){$("body").hasClass("sidebar-footer")||($("#content").append('<span class="toggle-sidebar"></span>'),$(".toggle-sidebar").bind("click",function(a){a.preventDefault(),$("body").hasClass("collapse-sidebar")?$("body").removeClass("collapse-sidebar"):$("body").addClass("collapse-sidebar")}));var a=$("aside.sidebar > section");a.length>1&&a.each(function(b,c){a.length>=3&&b%3===0&&$(c).addClass("first");var d=(b+1)%2?"odd":"even";$(c).addClass(d)}),a.length>=3&&$("aside.sidebar").addClass("thirds")}function testFeatures(){var a=["maskImage"];$(a).map(function(a,b){$("html").addClass(Modernizr.testAllProps(b)?b:"no-"+b)}),$("html").addClass("placeholder"in document.createElement("input")?"placeholder":"no-placeholder")}function addCodeLineNumbers(){"Microsoft Internet Explorer"!==navigator.appName&&$("div.gist-highlight").each(function(a){for(var b='<table><tbody><tr><td class="gutter">',c='<pre class="line-numbers">',d='</pre></td><td class="code">',e="</td></tr></tbody></table>",f=$(".line",a).length,g=1;f>=g;g++)c+='<span class="line-number">'+g+"</span>\n";var h=b+c+d+"<pre>"+$("pre",a).html()+"</pre>"+e;$(a).html(h)})}function flashVideoFallback(){var a="/assets/jwplayer/player.swf",b="/assets/jwplayer/glow/glow.xml";$("video").each(function(c,d){d=$(d),(!Modernizr.video.h264&&swfobject.getFlashPlayerVersion()||-1!==window.location.hash.indexOf("flash-test"))&&(d.children("source[src$=mp4]").first().map(c,function(c){var e=$(c).attr("src"),f="video_"+Math.round(1+1e5*Math.random()),g=d.attr("width"),h=parseInt(d.attr("height"),10)+30;d.after('<div class="flash-video"><div><div id='+f+">"),swfobject.embedSWF(a,f,g,h+30,"9.0.0",{file:e,image:d.attr("poster"),skin:b},{movie:e,wmode:"opaque",allowfullscreen:"true"})}),d.remove())})}function wrapFlashVideos(){$("object").each(function(a,b){$(b).find("param[name=movie]").length&&$(b).wrap('<div class="flash-video">')}),$("iframe[src*=vimeo],iframe[src*=youtube]").wrap('<div class="flash-video">')}function renderDeliciousLinks(a){for(var b="<ul>",c=0,d=a.length;d>c;c++)b+='<li><a href="'+a[c].u+'" title="Tags: '+(""==a[c].t?"":a[c].t.join(", "))+'">'+a[c].d+"</a></li>";b+="</ul>",$("#delicious").html(b)}$("document").ready(function(){testFeatures(),wrapFlashVideos(),flashVideoFallback(),addCodeLineNumbers(),getNav(),addSidebarToggler()}),function(a){function b(){g.content="width=device-width,minimum-scale="+f[0]+",maximum-scale="+f[1],a.removeEventListener(d,b,!0)}var c="addEventListener",d="gesturestart",e="querySelectorAll",f=[1,1],g=e in a?a[e]("meta[name=viewport]"):[];(g=g[g.length-1])&&c in a&&(b(),f=[.25,1.6],a[c](d,b,!0))}(document);var swfobject=function(){function a(a,c,d){var h,j=b(d);if(k.wk&&k.wk<312)return h;if(j)if(typeof a.id==e&&(a.id=d),k.ie&&k.win){var l,m="";for(l in a)a[l]!=Object.prototype[l]&&("data"==l.toLowerCase()?c.movie=a[l]:"styleclass"==l.toLowerCase()?m+=' class="'+a[l]+'"':"classid"!=l.toLowerCase()&&(m+=" "+l+'="'+a[l]+'"'));l="";for(var n in c)c[n]!=Object.prototype[n]&&(l+='<param name="'+n+'" value="'+c[n]+'" />');j.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+m+">"+l+"</object>",h=b(a.id)}else{n=i.createElement(f),n.setAttribute("type",g);for(var o in a)a[o]!=Object.prototype[o]&&("styleclass"==o.toLowerCase()?n.setAttribute("class",a[o]):"classid"!=o.toLowerCase()&&n.setAttribute(o,a[o]));for(m in c)c[m]!=Object.prototype[m]&&"movie"!=m.toLowerCase()&&(a=n,l=m,o=c[m],d=i.createElement("param"),d.setAttribute("name",l),d.setAttribute("value",o),a.appendChild(d));j.parentNode.replaceChild(n,j),h=n}return h}function b(a){var b=null;try{b=i.getElementById(a)}catch(c){}return b}function c(a){var b=k.pv,a=a.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function d(a){return null!=/[\\\"<>\.;]/.exec(a)&&typeof encodeURIComponent!=e?encodeURIComponent(a):a}var e="undefined",f="object",g="application/x-shockwave-flash",h=window,i=document,j=navigator,k=function(){var a=typeof i.getElementById!=e&&typeof i.getElementsByTagName!=e&&typeof i.createElement!=e,b=j.userAgent.toLowerCase(),c=j.platform.toLowerCase(),d=/win/.test(c?c:b),c=/mac/.test(c?c:b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,k=!1,l=[0,0,0],m=null;if(typeof j.plugins!=e&&typeof j.plugins["Shockwave Flash"]==f)!(m=j.plugins["Shockwave Flash"].description)||typeof j.mimeTypes!=e&&j.mimeTypes[g]&&!j.mimeTypes[g].enabledPlugin||(k=!1,m=m.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=parseInt(m.replace(/^(.*)\..*$/,"$1"),10),l[1]=parseInt(m.replace(/^.*\.(.*)\s.*$/,"$1"),10),l[2]=/[a-zA-Z]/.test(m)?parseInt(m.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof h.ActiveXObject!=e)try{var n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");n&&(m=n.GetVariable("$version"))&&(k=!0,m=m.split(" ")[1].split(","),l=[parseInt(m[0],10),parseInt(m[1],10),parseInt(m[2],10)])}catch(o){}return{w3:a,pv:l,wk:b,ie:k,win:d,mac:c}}();return{embedSWF:function(b,d,g,h,i,j,l,m,n){var o={success:!1,id:d};if(k.w3&&!(k.wk&&k.wk<312)&&b&&d&&g&&h&&i){g+="",h+="";var p={};if(m&&typeof m===f)for(var q in m)p[q]=m[q];if(p.data=b,p.width=g,p.height=h,b={},l&&typeof l===f)for(var r in l)b[r]=l[r];if(j&&typeof j===f)for(var s in j)typeof b.flashvars!=e?b.flashvars+="&"+s+"="+j[s]:b.flashvars=s+"="+j[s];c(i)&&(d=a(p,b,d),o.success=!0,o.ref=d)}n&&n(o)},ua:k,getFlashPlayerVersion:function(){return{major:k.pv[0],minor:k.pv[1],release:k.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(b,c,d){return k.w3?a(b,c,d):void 0},getQueryParamValue:function(a){var b=i.location.search||i.location.hash;if(b){if(/\?/.test(b)&&(b=b.split("?")[1]),null==a)return d(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return d(b[c].substring(b[c].indexOf("=")+1))}return""}}}();jQuery(document).ready(function(a){var b=0,c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAMAAAAx3e/WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQjIyNkJERkM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQjIyNkJFMEM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMjI2QkREQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRCMjI2QkRFQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dka2KgAAAEVQTFRFxMTEyMjI0tLSvb29vr6+zc3Ny8vLxcXFz8/P6enp3t7ex8fH0dHR1NTUw8PDwMDAzs7OvLy8wcHBu7u7v7+/zMzM////budQFwAAABd0Uk5T/////////////////////////////wDmQOZeAAAAcklEQVR42tSQSQ7DMAwD6chOukWs5eX/Ty2coo0T9wOdEzEgdRBuzNmnDofgja52JDyz5TCqUp0O6kfrb4bzSXkRiTviEZZ6JKLMJ5VQ2v8iGbtbfEwXmjFMG0VwdQo10hQNxYqtLMv9O6xvpZ/QeAkwAKjwHiJLaJc3AAAAAElFTkSuQmCC",d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAqCAMAAACEJ4viAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQjIyNkJEQkM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQjIyNkJEQ0M0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMjI2QkQ5QzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRCMjI2QkRBQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+h1kA9gAAAK5QTFRF+fn5sbGx8fHx09PTmpqa2dnZ/f3919fX9PT00NDQ1dXVpKSk+vr6+/v7vb298vLyycnJ8/PztLS0zc3N6enp/v7+q6ur2NjY9/f3srKy/Pz8p6en7u7uoaGhnJyc4eHhtbW1pqam6Ojo9fX17e3toqKirKys1NTUzs7Ox8fHwcHBwMDA5eXlnZ2dpaWl0dHR9vb25ubm4uLi3d3dqqqqwsLCv7+/oKCgmZmZ////8yEsbwAAAMBJREFUeNrE0tcOgjAUBuDSliUoMhTEvfdef9//xUQjgaLX0Ium/ZLT/+SkRPxZpGykvuf5VMJogy5jY9yjDHcWFhqlcRuHc4o6B1QK0BDg+hcZgNDh3NWTwzItH/bRrhvT+g3zSxZkNGCZpoWGIbU0a3Y6zV5VA6keyeDxiw62P0gUqEW0FbDim4nVikFJbU2zZXybUEaxhCqOQqyh5/G0wpWICUwthyqwD4InOMuXJ7/gs7WkoPdVg1vykF8CDACEFanKO3aSYwAAAABJRU5ErkJggg==";a(".github-widget").each(function(){0==b&&a("head").append('<style type="text/css">.github-box{font-family:helvetica,arial,sans-serif;font-size:13px;line-height:18px;background:#fafafa;border:1px solid #ddd;color:#666;border-radius:3px}.github-box a{color:#4183c4;border:0;text-decoration:none}.github-box a:hover{text-decoration:underline}.github-box .github-box-title{position:relative;border-bottom:1px solid #ddd;border-radius:3px 3px 0 0;background:#fcfcfc;background:-moz-linear-gradient(#fcfcfc,#ebebeb);background:-webkit-linear-gradient(#fcfcfc,#ebebeb);}.github-box .github-box-title h3 {line-height:40px;font-family:helvetica,arial,sans-serif;font-weight:normal;font-size:16px;color:gray;margin:0;padding:0 0 0 30px;background:url('+c+") 7px center no-repeat}.github-box .github-box-title h3 .repo{font-weight:bold}.github-box .github-box-title .github-stats{position:absolute;top:8px;right:10px;background:white;border:1px solid #ddd;border-radius:3px;font-size:11px;font-weight:bold;line-height:21px;height:21px}.github-box .github-box-title .github-stats a{display:inline-block;height:21px;color:#666;padding:0 5px 0 18px;background: url("+d+") no-repeat}.github-box .github-box-title .github-stats .watchers{border-right:1px solid #ddd}.github-box .github-box-title .github-stats .forks{background-position:-4px -21px;padding-left:15px}.github-box .github-box-content{padding:10px;font-weight:300}.github-box .github-box-content p{margin:0}.github-box .github-box-content .link{font-weight:bold}.github-box .github-box-download{position:relative;border-top:1px solid #ddd;background:white;border-radius:0 0 3px 3px;padding:10px;height:24px}.github-box .github-box-download .updated{margin:0;font-size:11px;color:#666;line-height:24px;font-weight:300}.github-box .github-box-download .updated strong{font-weight:bold;color:#000}.github-box .github-box-download .download{position:absolute;display:block;top:10px;right:10px;height:24px;line-height:24px;font-size:12px;color:#666;font-weight:bold;text-shadow:0 1px 0 rgba(255,255,255,0.9);padding:0 10px;border:1px solid #ddd;border-bottom-color:#bbb;border-radius:3px;background:#f5f5f5;background:-moz-linear-gradient(#f5f5f5,#e5e5e5);background:-webkit-linear-gradient(#f5f5f5,#e5e5e5);}.github-box .github-box-download .download:hover{color:#527894;border-color:#cfe3ed;border-bottom-color:#9fc7db;background:#f1f7fa;background:-moz-linear-gradient(#f1f7fa,#dbeaf1);background:-webkit-linear-gradient(#f1f7fa,#dbeaf1);}.github-box .github-box-download .travis { position:absolute;top:13px;right:135px;}.github-box *,.github-box *:before,.github-box *:after {-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}</style>"),b++;var e,f=a(this),g=f.data("repo"),h=f.data("travis"),i=g.split("/")[0],j=g.split("/")[1],k="http://github.com/"+i,l="http://github.com/"+i+"/"+j;travisImgUrl="https://travis-ci.org/"+i+"/"+j+".png?branch=master",travisUrl="https://travis-ci.org/"+i+"/"+j+"/builds",e=a('<div class="github-box repo"><div class="github-box-title"><h3><a class="owner" href="'+k+'">'+i+'</a>/<a class="repo" href="'+l+'">'+j+'</a></h3><div class="github-stats"><a class="watchers" href="'+l+'/watchers">?</a><a class="forks" href="'+l+'/network/members">?</a></div></div><div class="github-box-content"><p class="description"><span></span> &mdash; <a href="'+l+'#readme">Read More</a></p><p class="link"></p></div><div class="github-box-download"><p class="updated"></p>'+(h?'<a href="'+travisUrl+'"><img class="travis" src="'+travisImgUrl+'" alt="Build status" /></a>':"")+'<a class="download" href="'+l+'/zipball/master">Download as zip</a></div></div>'),e.appendTo(f),function(b){var c,d=function(c){var g,h=c.data,i="unknown";return h.message&&/Rate Limit/i.test(h.message)?void(f&&d({data:JSON.parse(f)})):(h.pushed_at&&(g=new Date(h.pushed_at),i=g.getMonth()+1+"-"+g.getDate()+"-"+g.getFullYear()),e.find(".watchers").text(h.watchers),e.find(".forks").text(h.forks),e.find(".description span").text(h.description),e.find(".link").append(a("<a />").attr("href",h.homepage).text(h.homepage)),e.find(".updated").html("Latest commit to the <strong>master</strong> branch on "+i),void("undefined"!=typeof localStorage&&(h._cachedAt=(new Date).getTime(),localStorage.setItem(b,JSON.stringify(h)))))},f=localStorage.getItem(b);if("undefined"!=typeof localStorage&&f){var g=f._cachedAt,h=(new Date).getTime()-g;c=h/1e3/60}c&&20>c?d({data:JSON.parse(f)}):a.ajax({url:b,dataType:"jsonp",success:d})}("https://api.github.com/repos/"+g),a(this).removeClass("github-widget")})});