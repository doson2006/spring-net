 function cssLoad(css){var s=document.createElement('style');document.getElementsByTagName('head')[0].appendChild(s);if(!!window.ActiveXObject){document.styleSheets[document.styleSheets.length-1].cssText=css;}else{stylenode=document.createTextNode(css);s.appendChild(stylenode);}}function azHtmlLoad(div,content){var azDiv=document.getElementById(div);azDiv.innerHTML=content;}function azScriptSRCLoad(div,script){var newScript=document.createElement('script');newScript.type='text/javascript';newScript.src=script;var azDiv=document.getElementById(div);azDiv.appendChild(newScript);}function azScriptInlineLoad(div,script,interval){var newScript=document.createElement('script');newScript.type='text/javascript';if(/msie/.test(navigator.userAgent.toLowerCase())){newScript.text=script;}else{newScript.innerHTML=script;}var azDiv=document.getElementById(div);azDiv.appendChild(newScript);}function azLoad(div,code){var azDiv=document.getElementById(div);if(azDiv){code();}else {setTimeout(function(){azLoad(div,code)},100);}}var zItems=[];function zshow(div){if(zItems[div]){document.write(zItems[div]);}}function ados_frameLoaded(x, y) {};function ados_loadFIframe(a,b,c,d,e){adzerkDiv=document.getElementById(a);ifrm=document.createElement("iframe");ifrm.frameBorder=0;ifrm.scrolling="no";ifrm.noresize="noresize";ifrm.marginheight=0;ifrm.marginwidth=0;if(d!=0){ifrm.height=d}if(e!=0){ifrm.width=e}ifrm.onload=function(){ados_frameLoaded(a,c)};adzerkDiv.innerHtml="";adzerkDiv.appendChild(ifrm);ifrm.contentWindow.contents='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><body style="margin:0px;"><script type="text/javascript">var divName = "'+a+'";var inDapIF = true;<\/script>'+unescape(b)+"</body></html>";ifrm.src='javascript:window["contents"]'}var adzerk1func = function() { ados_loadFIframe('adzerk1', '%3Cscript%20type%3D%22text/javascript%22%20src%3D%22http%3A//static.adzerk.net/ados.js%22%3E%3C/script%3E%0A%3Cscript%20type%3D%22text/javascript%22%3E%0A%3C%21--%20load%20placement%20for%20account%3A%20New%20Relic%2C%20campaign%3A%20StackOverflow%2C%20flight%3A%20Q2%20Ads%2C%20creative%3A%20DOTNET%20728%2C%20site%3A%20StackOverflow%2C%20size%3A%20Leaderboard%20-%20728px%20by%2090px%20--%3E%0Aados_loadInline%28451%2C%2013178%2C%204%29.setFlightCreativeId%2818206%29.setClickUrl%28%27-optional-click-macro-%27%29%3B%0Aados_load%28%29%3B%0A%3C/script%3E', 11966, 90, 728); }; setTimeout(function() { azLoad('adzerk1', adzerk1func) }, 100);var adzerk2code = '<div id=\"careersadsdoublehigh\" style=\"display:none;\"></div>';var adzerk2func = function() { azHtmlLoad('adzerk2', adzerk2code); }; setTimeout(function() { azLoad('adzerk2', adzerk2func) }, 100);