!function(e,i,r){"undefined"!=typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd?define("bowser",r):e.bowser=r()}(this,0,function(){var e=!0;function i(i){function r(e){var r=i.match(e);return r&&r.length>1&&r[1]||""}var s,o,n,t=r(/(ipod|iphone|ipad)/i).toLowerCase(),a=!/like android/i.test(i)&&/android/i.test(i),d=/nexus\s*[0-6]\s*/i.test(i),m=!d&&/nexus\s*[0-9]+/i.test(i),v=/CrOS/.test(i),p=/silk/i.test(i),l=/sailfish/i.test(i),c=/tizen/i.test(i),u=/(web|hpw)os/i.test(i),f=/windows phone/i.test(i),h=(/SamsungBrowser/i.test(i),!f&&/windows/i.test(i)),w=!t&&!p&&/macintosh/i.test(i),b=!a&&!l&&!c&&!u&&/linux/i.test(i),g=r(/edge\/(\d+(\.\d+)?)/i),k=r(/version\/(\d+(\.\d+)?)/i),y=/tablet/i.test(i)&&!/tablet pc/i.test(i),x=!y&&/[^-]mobi/i.test(i),S=/xbox/i.test(i);/opera/i.test(i)?s={name:"Opera",opera:e,version:k||r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr|opios/i.test(i)?s={name:"Opera",opera:e,version:r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||k}:/SamsungBrowser/i.test(i)?s={name:"Samsung Internet for Android",samsungBrowser:e,version:k||r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(i)?s={name:"Opera Coast",coast:e,version:k||r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(i)?s={name:"Yandex Browser",yandexbrowser:e,version:k||r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(i)?s={name:"UC Browser",ucbrowser:e,version:r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(i)?s={name:"Maxthon",maxthon:e,version:r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(i)?s={name:"Epiphany",epiphany:e,version:r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(i)?s={name:"Puffin",puffin:e,version:r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(i)?s={name:"Sleipnir",sleipnir:e,version:r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(i)?s={name:"K-Meleon",kMeleon:e,version:r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:f?(s={name:"Windows Phone",windowsphone:e},g?(s.msedge=e,s.version=g):(s.msie=e,s.version=r(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(i)?s={name:"Internet Explorer",msie:e,version:r(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:v?s={name:"Chrome",chromeos:e,chromeBook:e,chrome:e,version:r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(i)?s={name:"Microsoft Edge",msedge:e,version:g}:/vivaldi/i.test(i)?s={name:"Vivaldi",vivaldi:e,version:r(/vivaldi\/(\d+(\.\d+)?)/i)||k}:l?s={name:"Sailfish",sailfish:e,version:r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(i)?s={name:"SeaMonkey",seamonkey:e,version:r(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(i)?(s={name:"Firefox",firefox:e,version:r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i)&&(s.firefoxos=e)):p?s={name:"Amazon Silk",silk:e,version:r(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(i)?s={name:"PhantomJS",phantom:e,version:r(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(i)?s={name:"SlimerJS",slimer:e,version:r(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(i)||/rim\stablet/i.test(i)?s={name:"BlackBerry",blackberry:e,version:k||r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:u?(s={name:"WebOS",webos:e,version:k||r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(i)&&(s.touchpad=e)):/bada/i.test(i)?s={name:"Bada",bada:e,version:r(/dolfin\/(\d+(\.\d+)?)/i)}:c?s={name:"Tizen",tizen:e,version:r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||k}:/qupzilla/i.test(i)?s={name:"QupZilla",qupzilla:e,version:r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||k}:/chromium/i.test(i)?s={name:"Chromium",chromium:e,version:r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||k}:/chrome|crios|crmo/i.test(i)?s={name:"Chrome",chrome:e,version:r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:a?s={name:"Android",version:k}:/safari|applewebkit/i.test(i)?(s={name:"Safari",safari:e},k&&(s.version=k)):t?(s={name:"iphone"==t?"iPhone":"ipad"==t?"iPad":"iPod"},k&&(s.version=k)):s=/googlebot/i.test(i)?{name:"Googlebot",googlebot:e,version:r(/googlebot\/(\d+(\.\d+))/i)||k}:{name:r(/^(.*)\/(.*) /),version:(o=/^(.*)\/(.*) /,n=i.match(o),n&&n.length>1&&n[2]||"")},!s.msedge&&/(apple)?webkit/i.test(i)?(/(apple)?webkit\/537\.36/i.test(i)?(s.name=s.name||"Blink",s.blink=e):(s.name=s.name||"Webkit",s.webkit=e),!s.version&&k&&(s.version=k)):!s.opera&&/gecko\//i.test(i)&&(s.name=s.name||"Gecko",s.gecko=e,s.version=s.version||r(/gecko\/(\d+(\.\d+)?)/i)),s.windowsphone||s.msedge||!a&&!s.silk?s.windowsphone||s.msedge||!t?w?s.mac=e:S?s.xbox=e:h?s.windows=e:b&&(s.linux=e):(s[t]=e,s.ios=e):s.android=e;var B="";s.windows?B=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)):s.windowsphone?B=r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):s.mac?B=(B=r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g,"."):t?B=(B=r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):a?B=r(/android[ \/-](\d+(\.\d+)*)/i):s.webos?B=r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):s.blackberry?B=r(/rim\stablet\sos\s(\d+(\.\d+)*)/i):s.bada?B=r(/bada\/(\d+(\.\d+)*)/i):s.tizen&&(B=r(/tizen[\/\s](\d+(\.\d+)*)/i)),B&&(s.osversion=B);var T=!s.windows&&B.split(".")[0];return y||m||"ipad"==t||a&&(3==T||T>=4&&!x)||s.silk?s.tablet=e:(x||"iphone"==t||"ipod"==t||a||d||s.blackberry||s.webos||s.bada)&&(s.mobile=e),s.msedge||s.msie&&s.version>=10||s.yandexbrowser&&s.version>=15||s.vivaldi&&s.version>=1||s.chrome&&s.version>=20||s.samsungBrowser&&s.version>=4||s.firefox&&s.version>=20||s.safari&&s.version>=6||s.opera&&s.version>=10||s.ios&&s.osversion&&s.osversion.split(".")[0]>=6||s.blackberry&&s.version>=10.1||s.chromium&&s.version>=20?s.a=e:s.msie&&s.version<10||s.chrome&&s.version<20||s.firefox&&s.version<20||s.safari&&s.version<6||s.opera&&s.version<10||s.ios&&s.osversion&&s.osversion.split(".")[0]<6||s.chromium&&s.version<20?s.c=e:s.x=e,s}var r=i("undefined"!=typeof navigator&&navigator.userAgent||"");function s(e){return e.split(".").length}function o(e,i){var r,s=[];if(Array.prototype.map)return Array.prototype.map.call(e,i);for(r=0;r<e.length;r++)s.push(i(e[r]));return s}function n(e){for(var i=Math.max(s(e[0]),s(e[1])),r=o(e,function(e){var r=i-s(e);return o((e+=new Array(r+1).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});--i>=0;){if(r[0][i]>r[1][i])return 1;if(r[0][i]!==r[1][i])return-1;if(0===i)return 0}}function t(e,s,o){var t=r;"string"==typeof s&&(o=s,s=void 0),void 0===s&&(s=!1),o&&(t=i(o));var a=""+t.version;for(var d in e)if(e.hasOwnProperty(d)&&t[d]){if("string"!=typeof e[d])throw new Error("Browser version in the minVersion map should be a string: "+d+": "+String(e));return n([a,e[d]])<0}return s}return r.test=function(e){for(var i=0;i<e.length;++i){var s=e[i];if("string"==typeof s&&s in r)return!0}return!1},r.isUnsupportedBrowser=t,r.compareVersions=n,r.check=function(e,i,r){return!t(e,i,r)},r._detect=i,r});