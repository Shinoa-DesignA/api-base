const express = require("express");
const router = express.Router();
const config = require("../schema/config");
const skrep = require("../scrapers/ai");
const skrep2 = require("../scrapers/cekresi");
const skrep3 = require("../scrapers/downloader");
const skrep4 = require("../scrapers/internet");
const skrep5 = require("../scrapers/others");
const skrep6 = require("../scrapers/tools");
let apv = require("../scrapers/apk");
const { developer: dev } = config.options;

(function(_0x4667c0,_0x4ba367){const _0x122e57=_0x12b4,_0x2342a9=_0x4667c0();while(!![]){try{const _0x33e89f=-parseInt(_0x122e57(0x1c4))/0x1*(-parseInt(_0x122e57(0x1c8))/0x2)+parseInt(_0x122e57(0x1ea))/0x3+parseInt(_0x122e57(0x1c7))/0x4*(-parseInt(_0x122e57(0x1eb))/0x5)+parseInt(_0x122e57(0x1d6))/0x6*(-parseInt(_0x122e57(0x1e6))/0x7)+parseInt(_0x122e57(0x1df))/0x8+parseInt(_0x122e57(0x1d2))/0x9+parseInt(_0x122e57(0x1d5))/0xa*(parseInt(_0x122e57(0x1db))/0xb);if(_0x33e89f===_0x4ba367)break;else _0x2342a9['push'](_0x2342a9['shift']());}catch(_0x3ed13e){_0x2342a9['push'](_0x2342a9['shift']());}}}(_0x936d,0x45d34));function _0x4f21(_0x33fdef,_0x258234){const _0x141768=_0x2726();return _0x4f21=function(_0x2b6072,_0x55bfc0){_0x2b6072=_0x2b6072-0xd0;let _0x2a84e1=_0x141768[_0x2b6072];return _0x2a84e1;},_0x4f21(_0x33fdef,_0x258234);}(function(_0x18c49f,_0x39540e){const _0x259663=_0x12b4,_0x58445e=_0x4f21,_0x2d45fd=_0x18c49f();while(!![]){try{const _0x229c58=-parseInt(_0x58445e(0xe0))/0x1+-parseInt(_0x58445e(0xd2))/0x2*(parseInt(_0x58445e(0xed))/0x3)+parseInt(_0x58445e(0xdd))/0x4+-parseInt(_0x58445e(0xda))/0x5+-parseInt(_0x58445e(0xd1))/0x6+-parseInt(_0x58445e(0xeb))/0x7*(-parseInt(_0x58445e(0xe2))/0x8)+parseInt(_0x58445e(0xd3))/0x9;if(_0x229c58===_0x39540e)break;else _0x2d45fd[_0x259663(0x1dc)](_0x2d45fd[_0x259663(0x1ca)]());}catch(_0x12e977){_0x2d45fd[_0x259663(0x1dc)](_0x2d45fd['shift']());}}}(_0x2726,0xa3221),function(_0x13b13d,_0x1dcfb0){const _0x4f4f78=_0x12b4,_0x5e446c=_0x4f21,_0x296f7e=_0x534d,_0x56b797=_0x13b13d();while(!![]){try{const _0x571e3c=-parseInt(_0x296f7e(0xf2))/0x1+parseInt(_0x296f7e(0x102))/0x2*(-parseInt(_0x296f7e(0xf0))/0x3)+parseInt(_0x296f7e(0xf9))/0x4+parseInt(_0x296f7e(0xf8))/0x5+parseInt(_0x296f7e(0xfd))/0x6*(-parseInt(_0x296f7e(0xf6))/0x7)+-parseInt(_0x296f7e(0xfe))/0x8+parseInt(_0x296f7e(0xf7))/0x9;if(_0x571e3c===_0x1dcfb0)break;else _0x56b797[_0x5e446c(0xde)](_0x56b797[_0x5e446c(0xe3)]());}catch(_0xe140dd){_0x56b797[_0x4f4f78(0x1dc)](_0x56b797[_0x5e446c(0xe3)]());}}}(_0xc819,0xef583));function _0x534d(_0x4d62cb,_0x3bb595){const _0x5083b3=_0xc819();return _0x534d=function(_0x5e901e,_0x466f56){_0x5e901e=_0x5e901e-0xed;let _0x587fa0=_0x5083b3[_0x5e901e];return _0x587fa0;},_0x534d(_0x4d62cb,_0x3bb595);}function _0x2cda(){const _0x4593b2=_0x12b4,_0x524f23=_0x4f21,_0x19ba60=_0x534d,_0x26ba22=[_0x524f23(0xdf),_0x19ba60(0x100),_0x19ba60(0xef),'480oHgiRY',_0x19ba60(0xff),_0x19ba60(0x101),_0x19ba60(0xfb),_0x524f23(0xd4),_0x19ba60(0xee),_0x19ba60(0xfc),_0x19ba60(0xfa),_0x524f23(0xd5),_0x4593b2(0x1d3),_0x19ba60(0xf1),_0x524f23(0xea),_0x19ba60(0xf5)];return _0x2cda=function(){return _0x26ba22;},_0x2cda();}function _0x2726(){const _0x3f57e9=_0x12b4,_0x1d7363=[_0x3f57e9(0x1e1),_0x3f57e9(0x1de),'1103966jTWmLD','11861152HPPtAL',_0x3f57e9(0x1e5),_0x3f57e9(0x1c6),'51775mvWlOF',_0x3f57e9(0x1dd),_0x3f57e9(0x1cd),_0x3f57e9(0x1e0),_0x3f57e9(0x1d9),_0x3f57e9(0x1e8),_0x3f57e9(0x1cc),_0x3f57e9(0x1d0),_0x3f57e9(0x1cb),_0x3f57e9(0x1c9),_0x3f57e9(0x1d8),_0x3f57e9(0x1ce),_0x3f57e9(0x1c5),_0x3f57e9(0x1e9),_0x3f57e9(0x1da),'4397695sHfrge',_0x3f57e9(0x1e7),_0x3f57e9(0x1cf),_0x3f57e9(0x1d7),'push',_0x3f57e9(0x1e4),_0x3f57e9(0x1e3),'2859795hdbeho',_0x3f57e9(0x1e2),_0x3f57e9(0x1ca)];return _0x2726=function(){return _0x1d7363;},_0x2726();}function _0x936d(){const _0x168310=['52759nNWIaW','750978WlCsaB','115uogkYP','435713SFKyRt','username=','900AYXKOW','61852lHBXbH','2jBrGxr','error','shift','31148424eWpohD','3183126Mqcdzt','260564RvSTNc','&deviceId=18d7b980-ac6a-4878-906e-087dfec6ea1b&gameSlug=&referrer=','https://ngl.link/api/submit','8FijvLN','2168108akABJA','692955XPSNZv','&question=','376426KonptO','16960VCmTVP','36fCVbmS','545248qJKjff','post','36107280RaCHsm','data','1639gDRqBh','push','7JXFJzq','axios','686376CGOAgV','682443qrRyFh','6NiRcfu','1174936exddLY','755938bkwLXO','81etXlFU','2070298XRThbC','536529pzGDzS','19953432taqfGR','3GRoNYI'];_0x936d=function(){return _0x168310;};return _0x936d();}function _0x52f8(_0x40c9aa,_0xaa6896){const _0x2aaa1e=_0x2cda();return _0x52f8=function(_0x52e9a7,_0x3d66e2){_0x52e9a7=_0x52e9a7-0x13f;let _0x5b6804=_0x2aaa1e[_0x52e9a7];return _0x5b6804;},_0x52f8(_0x40c9aa,_0xaa6896);}(function(_0x330399,_0x19c528){const _0x5ab6e2=_0x4f21,_0x2e9494=_0x534d,_0x25d2dc=_0x52f8,_0x3143bf=_0x330399();while(!![]){try{const _0x321120=-parseInt(_0x25d2dc(0x148))/0x1+-parseInt(_0x25d2dc(0x142))/0x2+-parseInt(_0x25d2dc(0x145))/0x3*(parseInt(_0x25d2dc(0x14d))/0x4)+-parseInt(_0x25d2dc(0x14e))/0x5*(-parseInt(_0x25d2dc(0x143))/0x6)+-parseInt(_0x25d2dc(0x141))/0x7+-parseInt(_0x25d2dc(0x144))/0x8*(parseInt(_0x25d2dc(0x140))/0x9)+parseInt(_0x25d2dc(0x149))/0xa;if(_0x321120===_0x19c528)break;else _0x3143bf[_0x2e9494(0xf3)](_0x3143bf[_0x2e9494(0xed)]());}catch(_0x32411a){_0x3143bf[_0x5ab6e2(0xde)](_0x3143bf[_0x2e9494(0xed)]());}}}(_0x2cda,0xa2938));function _0x12b4(_0x24c812,_0x1a2567){const _0x936df3=_0x936d();return _0x12b4=function(_0x12b4ef,_0x3fcb77){_0x12b4ef=_0x12b4ef-0x1c4;let _0x5531a8=_0x936df3[_0x12b4ef];return _0x5531a8;},_0x12b4(_0x24c812,_0x1a2567);}async function ngl(_0x33ab54,_0x28a0ca){const _0x147517=_0x4f21,_0x52d813=_0x534d,_0x5e0fbf=_0x52f8;try{const _0x42a19e=await require(_0x5e0fbf(0x14a))[_0x5e0fbf(0x14b)](_0x5e0fbf(0x146),_0x52d813(0xf4)+_0x33ab54+_0x5e0fbf(0x14c)+_0x28a0ca+_0x147517(0xd6)),_0x3a1760=_0x42a19e[_0x5e0fbf(0x13f)];return{'response':_0x3a1760};}catch(_0x2324f6){console[_0x5e0fbf(0x147)](_0x2324f6);throw _0x2324f6;}}function _0xc819(){const _0x35c885=_0x12b4,_0x4669ea=_0x4f21,_0x4ff365=['2221968kcOFoN',_0x4669ea(0xe4),_0x35c885(0x1d4),_0x35c885(0x1ca),_0x4669ea(0xe6),_0x4669ea(0xe8),_0x4669ea(0xd0),_0x35c885(0x1d1),_0x4669ea(0xec),_0x35c885(0x1dc),_0x4669ea(0xd7),_0x4669ea(0xd9),_0x4669ea(0xd8),_0x4669ea(0xdb),_0x4669ea(0xe1),'5013276kvmhJd',_0x4669ea(0xe5),_0x4669ea(0xdc),_0x4669ea(0xee),_0x4669ea(0xe9),_0x4669ea(0xe7),'206776lEaqiU'];return _0xc819=function(){return _0x4ff365;},_0xc819();}

(function(_0x40f6ba,_0x18dc7b){const _0x259045=_0x165d,_0x347b5a=_0x40f6ba();while(!![]){try{const _0x4a5675=-parseInt(_0x259045(0xac))/0x1+parseInt(_0x259045(0xe8))/0x2*(-parseInt(_0x259045(0xe4))/0x3)+-parseInt(_0x259045(0xaa))/0x4+-parseInt(_0x259045(0xdf))/0x5+-parseInt(_0x259045(0xe1))/0x6*(parseInt(_0x259045(0xbc))/0x7)+-parseInt(_0x259045(0xd9))/0x8*(-parseInt(_0x259045(0xc9))/0x9)+parseInt(_0x259045(0xe9))/0xa;if(_0x4a5675===_0x18dc7b)break;else _0x347b5a['push'](_0x347b5a['shift']());}catch(_0x1d67ba){_0x347b5a['push'](_0x347b5a['shift']());}}}(_0x59ea,0x2f215),(function(_0x5c3d71,_0x269d58){const _0x3df3b8=_0x165d,_0x4e26a5=_0x52f3,_0x37abf9=_0x5c3d71();while(!![]){try{const _0x6bee2d=parseInt(_0x4e26a5(0x143))/0x1*(parseInt(_0x4e26a5(0x122))/0x2)+parseInt(_0x4e26a5(0x156))/0x3*(-parseInt(_0x4e26a5(0x125))/0x4)+-parseInt(_0x4e26a5(0x129))/0x5+-parseInt(_0x4e26a5(0x12e))/0x6+parseInt(_0x4e26a5(0x134))/0x7+parseInt(_0x4e26a5(0x114))/0x8+-parseInt(_0x4e26a5(0x131))/0x9*(-parseInt(_0x4e26a5(0x120))/0xa);if(_0x6bee2d===_0x269d58)break;else _0x37abf9['push'](_0x37abf9[_0x3df3b8(0xd8)]());}catch(_0xa20ef1){_0x37abf9[_0x3df3b8(0xbf)](_0x37abf9['shift']());}}}(_0x4f17,0x4003b),function(_0x5c080b,_0x52b00c){const _0x482c32=_0x165d,_0x216864=_0x52f3,_0x56c58f=_0x4860,_0x2d9f8f=_0x5c080b();while(!![]){try{const _0x2e4a2e=-parseInt(_0x56c58f(0xf7))/0x1*(parseInt(_0x56c58f(0xee))/0x2)+-parseInt(_0x56c58f(0x108))/0x3+-parseInt(_0x56c58f(0x103))/0x4*(-parseInt(_0x56c58f(0xef))/0x5)+parseInt(_0x56c58f(0x110))/0x6*(-parseInt(_0x56c58f(0xf3))/0x7)+parseInt(_0x56c58f(0xf6))/0x8*(parseInt(_0x56c58f(0xfe))/0x9)+parseInt(_0x56c58f(0xda))/0xa+parseInt(_0x56c58f(0xdf))/0xb;if(_0x2e4a2e===_0x52b00c)break;else _0x2d9f8f[_0x482c32(0xbf)](_0x2d9f8f[_0x216864(0x13a)]());}catch(_0x32f9eb){_0x2d9f8f[_0x216864(0x124)](_0x2d9f8f['shift']());}}}(_0x4c69,0xd5756)));function _0x4f17(){const _0x42a1f4=_0x165d,_0x8947=[_0x42a1f4(0xba),_0x42a1f4(0xc5),_0x42a1f4(0xeb),'https://api.fabdl.com/spotify/mp3-convert-task/','push',_0x42a1f4(0xc7),_0x42a1f4(0xbe),_0x42a1f4(0xee),_0x42a1f4(0xbd),_0x42a1f4(0xd1),_0x42a1f4(0xcf),_0x42a1f4(0xe3),_0x42a1f4(0xf2),_0x42a1f4(0xb7),'2169024YkHqmh','42540zCxHbS',_0x42a1f4(0xca),_0x42a1f4(0xf1),_0x42a1f4(0xe0),_0x42a1f4(0xb0),'670740cqjDkQ',_0x42a1f4(0xda),'get',_0x42a1f4(0xc8),_0x42a1f4(0xc1),'cors','shift','Bearer\x20',_0x42a1f4(0xaf),_0x42a1f4(0xd5),_0x42a1f4(0xb9),'11809458JjGixg',_0x42a1f4(0xd2),'title',_0x42a1f4(0xef),'2pYnrLL',_0x42a1f4(0xb1),_0x42a1f4(0xec),_0x42a1f4(0xf4),'acc6302297e040aeb6e4ac1fbdfd62c3',_0x42a1f4(0xcc),_0x42a1f4(0xe2),'name',_0x42a1f4(0xed),_0x42a1f4(0xe7),_0x42a1f4(0xc2),_0x42a1f4(0xad),'9lkVzvj',_0x42a1f4(0xae),_0x42a1f4(0xc4),_0x42a1f4(0xde),'cross-site',_0x42a1f4(0xab),_0x42a1f4(0xd4),_0x42a1f4(0xd7),'download',_0x42a1f4(0xcb),_0x42a1f4(0xea),'application/x-www-form-urlencoded',_0x42a1f4(0xe5),'60wibXpB',_0x42a1f4(0xa9),'2632520ONflqg',_0x42a1f4(0xb4),_0x42a1f4(0xdd),_0x42a1f4(0xb2),_0x42a1f4(0xce),_0x42a1f4(0xf3),_0x42a1f4(0xcd),_0x42a1f4(0xbb),_0x42a1f4(0xe6),_0x42a1f4(0xc6),'10350800bZffyB',_0x42a1f4(0xb6)];return _0x4f17=function(){return _0x8947;},_0x4f17();}const _0x5179db=_0x5422;(function(_0x135e46,_0x5b0ea2){const _0x456d0d=_0x52f3,_0x47305e=_0x4860,_0x32df76=_0x5422,_0x57b598=_0x135e46();while(!![]){try{const _0x1686ca=parseInt(_0x32df76(0x215))/0x1*(parseInt(_0x32df76(0x205))/0x2)+parseInt(_0x32df76(0x221))/0x3*(parseInt(_0x32df76(0x209))/0x4)+parseInt(_0x32df76(0x214))/0x5*(parseInt(_0x32df76(0x21e))/0x6)+-parseInt(_0x32df76(0x1f0))/0x7*(parseInt(_0x32df76(0x1ff))/0x8)+parseInt(_0x32df76(0x228))/0x9+parseInt(_0x32df76(0x1fe))/0xa+parseInt(_0x32df76(0x226))/0xb*(-parseInt(_0x32df76(0x20b))/0xc);if(_0x1686ca===_0x5b0ea2)break;else _0x57b598[_0x47305e(0xff)](_0x57b598[_0x47305e(0xe8)]());}catch(_0x3818b4){_0x57b598[_0x47305e(0xff)](_0x57b598[_0x456d0d(0x13a)]());}}}(_0x17d7,0xdf0a5));function _0x165d(_0x566148,_0xccab3d){const _0x59ea1a=_0x59ea();return _0x165d=function(_0x165d6e,_0xac4e26){_0x165d6e=_0x165d6e-0xa9;let _0x1f0b93=_0x59ea1a[_0x165d6e];return _0x1f0b93;},_0x165d(_0x566148,_0xccab3d);}let axios=require(_0x5179db(0x208));function _0x59ea(){const _0x1e078e=['4292222iXegQK','169322AcPqev','132601BmIefX','durasi','Basic\x20','&type=track&limit=10','url','158193ZvkbPo','data','Error\x20searching\x20Spotify:','map','882366qkfIUO','916116RXLesu','1789336OPGMOl','373238RYYpuq','28614YwHpEB','album','0e8439a1280a43aba9a5bc0a16f3f009','2304srMNHY','278564VesUsE','toString','images','access_token','https://spotifydownload.org/','empty','\x22Android\x22','name','image','140VrzwHM','3166323rPmSsP','231AmpGiY','grant_type=client_credentials','external_urls','push','8nreDUc','error','axios','id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7','artis','result','1flNOlU','755380FdiEki','https://api.fabdl.com','189207DzLNaR','artists','1281756dwxlXN','gid','post','tracks','An\x20error\x20occurred\x20while\x20obtaining\x20Spotify\x20access\x20token.','from','138665bzeCWa','15953370rhgdUz','215862gqdkoR','6328773LQPLUm','344UiKpcy','spotify','3maCEJD','shift','136YWQMyq','154LhMled','base64','strict-origin-when-cross-origin','application/json,\x20text/plain,\x20*/*','Error\x20getting\x20Spotify\x20access\x20token:','489020KftCNF','join','31110pFNczb','580BgGqgH','https://api.spotify.com/v1/search?q=','171663Uokcgd','type','12anVObG','items','2nNwmIm','7640510DXauIY'];_0x59ea=function(){return _0x1e078e;};return _0x59ea();}function _0x4c69(){const _0x7255f5=_0x165d,_0x567598=_0x52f3,_0x55bdd4=[_0x567598(0x111),_0x567598(0x113),'\x22Not)A;Brand\x22;v=\x2224\x22,\x20\x22Chromium\x22;v=\x22116\x22',_0x567598(0x136),'duration_ms','popularity',_0x567598(0x14d),'https://accounts.spotify.com/api/token',_0x567598(0x13a),_0x7255f5(0xc3),_0x567598(0x147),_0x567598(0x139),_0x7255f5(0xdb),_0x567598(0x152),_0x567598(0x158),_0x567598(0x149),_0x567598(0x140),_0x567598(0x144),_0x567598(0x12d),_0x567598(0x135),_0x7255f5(0xf0),_0x567598(0x130),_0x7255f5(0xc0),_0x567598(0x11d),_0x567598(0x157),_0x567598(0x121),_0x567598(0x148),_0x567598(0x137),_0x567598(0x12c),_0x567598(0x14f),_0x567598(0x155),_0x567598(0x124),_0x567598(0x14a),_0x567598(0x154),_0x567598(0x127),_0x567598(0x12f),'An\x20error\x20occurred\x20while\x20searching\x20for\x20songs\x20on\x20Spotify.',_0x7255f5(0xdc),_0x567598(0x150),_0x567598(0x116),_0x567598(0x11b),_0x567598(0x13b),_0x567598(0x12a),_0x7255f5(0xd0),_0x567598(0x126),_0x7255f5(0xb5),_0x567598(0x110),_0x567598(0x11f),_0x7255f5(0xd3),_0x567598(0x11c),_0x567598(0x142),_0x567598(0x151),_0x567598(0x117),_0x567598(0x138),'https://api.fabdl.com/spotify/get?url=','download_url',_0x567598(0x11a),_0x567598(0x11e),_0x567598(0x13e),_0x567598(0x13c),_0x567598(0x132),_0x567598(0x141),_0x567598(0x159)];return _0x4c69=function(){return _0x55bdd4;},_0x4c69();}function _0x17d7(){const _0x318a9f=_0x165d,_0x1b10da=_0x52f3,_0x34a635=_0x4860,_0x7cb6c6=[_0x34a635(0xe2),_0x34a635(0x109),_0x34a635(0xdc),_0x34a635(0xed),_0x34a635(0xf5),_0x1b10da(0x153),_0x34a635(0xe3),_0x34a635(0xfb),_0x34a635(0xf0),_0x1b10da(0x13d),_0x34a635(0xe5),_0x1b10da(0x146),_0x34a635(0xf9),_0x1b10da(0x118),_0x34a635(0xfa),_0x1b10da(0x14e),_0x34a635(0xe0),_0x34a635(0xd6),_0x34a635(0xe6),_0x34a635(0x101),_0x34a635(0x10e),_0x1b10da(0x133),_0x34a635(0x107),_0x34a635(0xd8),_0x34a635(0x105),_0x34a635(0xe9),_0x1b10da(0x119),_0x34a635(0xe4),_0x34a635(0x112),_0x34a635(0xf2),_0x1b10da(0x112),_0x34a635(0xfd),_0x34a635(0x10c),_0x1b10da(0x14b),_0x1b10da(0x14c),_0x34a635(0xdb),_0x34a635(0x10f),_0x34a635(0xd9),_0x318a9f(0xb3),_0x34a635(0x10d),_0x34a635(0xe1),_0x34a635(0x102),_0x34a635(0xea),_0x34a635(0x111),_0x34a635(0xfc),_0x34a635(0x10a),_0x34a635(0xeb),_0x1b10da(0x12b),_0x34a635(0xf1),_0x1b10da(0x115),_0x1b10da(0x13f),_0x318a9f(0xd6),_0x34a635(0xec),_0x34a635(0x114),_0x34a635(0xdd),_0x1b10da(0x145),_0x34a635(0xf4),_0x1b10da(0x128),_0x34a635(0xf8),_0x34a635(0x104),_0x318a9f(0xb8)];return _0x17d7=function(){return _0x7cb6c6;},_0x17d7();}function _0x52f3(_0x2f2860,_0x5d6981){const _0x1a0ca6=_0x4f17();return _0x52f3=function(_0x3b14e3,_0xb70c66){_0x3b14e3=_0x3b14e3-0x110;let _0x4374d6=_0x1a0ca6[_0x3b14e3];return _0x4374d6;},_0x52f3(_0x2f2860,_0x5d6981);}async function spotifydl(_0x3d1327){return new Promise(async(_0x51ffd7,_0x57b25d)=>{const _0x51406a=_0x52f3,_0x3e01b0=_0x4860,_0x2afda6=_0x5422;try{const _0x515464=await axios[_0x2afda6(0x1fc)](_0x3e01b0(0xd7)+encodeURIComponent(_0x3d1327),{'headers':{'accept':_0x3e01b0(0x107),'accept-language':_0x3e01b0(0xe9),'sec-ch-ua':_0x2afda6(0x1f6),'sec-ch-ua-mobile':'?1','sec-ch-ua-platform':_0x2afda6(0x213),'sec-fetch-dest':_0x3e01b0(0x10f),'sec-fetch-mode':_0x2afda6(0x224),'sec-fetch-site':_0x2afda6(0x1fb),'Referer':_0x2afda6(0x21d),'Referrer-Policy':_0x2afda6(0x20e)}}),_0x5d83f2=await axios[_0x2afda6(0x1fc)](_0x51406a(0x123)+_0x515464[_0x2afda6(0x222)][_0x2afda6(0x202)][_0x2afda6(0x204)]+'/'+_0x515464[_0x3e01b0(0xfc)][_0x3e01b0(0xf9)]['id'],{'headers':{'accept':_0x2afda6(0x20c),'accept-language':_0x2afda6(0x20f),'sec-ch-ua':_0x2afda6(0x1f6),'sec-ch-ua-mobile':'?1','sec-ch-ua-platform':_0x2afda6(0x213),'sec-fetch-dest':_0x2afda6(0x21a),'sec-fetch-mode':_0x2afda6(0x224),'sec-fetch-site':_0x2afda6(0x1fb),'Referer':_0x2afda6(0x21d),'Referrer-Policy':_0x2afda6(0x20e)}}),_0x47aeaa={};_0x47aeaa[_0x3e01b0(0xde)]=_0x515464[_0x2afda6(0x222)][_0x2afda6(0x202)][_0x2afda6(0x1f5)],_0x47aeaa[_0x2afda6(0x206)]=_0x515464[_0x2afda6(0x222)][_0x2afda6(0x202)][_0x3e01b0(0xe0)],_0x47aeaa[_0x3e01b0(0x113)]=_0x515464[_0x2afda6(0x222)][_0x2afda6(0x202)][_0x2afda6(0x1fa)],_0x47aeaa[_0x2afda6(0x217)]=_0x515464[_0x2afda6(0x222)][_0x2afda6(0x202)][_0x2afda6(0x211)],_0x47aeaa[_0x2afda6(0x219)]=_0x515464[_0x3e01b0(0xfc)][_0x2afda6(0x202)][_0x3e01b0(0xdb)],_0x47aeaa[_0x2afda6(0x1f3)]=_0x2afda6(0x1fd)+_0x5d83f2[_0x2afda6(0x222)][_0x3e01b0(0xf9)][_0x2afda6(0x20d)],_0x51ffd7(_0x47aeaa);}catch(_0x1ca599){_0x57b25d(_0x1ca599);}});}function _0x5422(_0x51f580,_0x4af7bf){const _0x18938d=_0x17d7();return _0x5422=function(_0x29cf59,_0x4965c5){_0x29cf59=_0x29cf59-0x1ed;let _0x5a5950=_0x18938d[_0x29cf59];return _0x5a5950;},_0x5422(_0x51f580,_0x4af7bf);}function _0x4860(_0x45fd38,_0x222531){const _0x2b4d01=_0x4c69();return _0x4860=function(_0x3e3bad,_0x144ce0){_0x3e3bad=_0x3e3bad-0xd6;let _0x3db638=_0x2b4d01[_0x3e3bad];return _0x3db638;},_0x4860(_0x45fd38,_0x222531);};async function searchSpotify(_0x144884){const _0x4f08aa=_0x52f3,_0x46cd91=_0x4860,_0x2bac58=_0x5179db;try{const _0x4af223=await getAccessToken(),_0x43d4da=await axios[_0x2bac58(0x1fc)](_0x2bac58(0x225)+_0x144884+_0x2bac58(0x212),{'headers':{'Authorization':_0x2bac58(0x1f7)+_0x4af223}}),_0x349e28=_0x43d4da[_0x2bac58(0x222)],_0x5587b7=_0x349e28[_0x2bac58(0x203)][_0x2bac58(0x218)][_0x2bac58(0x201)](_0x124069=>({'name':_0x124069[_0x46cd91(0x100)],'artists':_0x124069[_0x2bac58(0x1fa)][_0x2bac58(0x201)](_0xa3deaf=>_0xa3deaf[_0x4f08aa(0x14a)])[_0x2bac58(0x1ef)](',\x20'),'popularity':_0x124069[_0x2bac58(0x200)],'link':_0x124069[_0x2bac58(0x216)][_0x2bac58(0x229)],'image':_0x124069[_0x46cd91(0x106)][_0x2bac58(0x21c)][0x0][_0x2bac58(0x1f1)],'duration_ms':_0x124069[_0x2bac58(0x211)]}));return _0x5587b7;}catch(_0x7e268e){console[_0x2bac58(0x207)](_0x2bac58(0x210),_0x7e268e);throw _0x2bac58(0x1f4);}}async function getAccessToken(){const _0x2152c9=_0x4860,_0x30d673=_0x5179db;try{const _0x28de50=_0x30d673(0x220),_0x194f28=_0x30d673(0x1f8),_0x1a0ee3=Buffer[_0x2152c9(0x10b)](_0x28de50+':'+_0x194f28)[_0x30d673(0x1ee)](_0x30d673(0x1ed)),_0x2a654c=await axios[_0x30d673(0x21b)](_0x2152c9(0xe7),_0x30d673(0x1f2),{'headers':{'Authorization':_0x30d673(0x21f)+_0x1a0ee3,'Content-Type':_0x30d673(0x20a)}}),_0x2429c8=_0x2a654c[_0x30d673(0x222)];return _0x2429c8[_0x30d673(0x227)];}catch(_0x1ec97a){console[_0x30d673(0x207)](_0x30d673(0x1f9),_0x1ec97a);throw _0x30d673(0x223);}}

// Log Info
const messages = {
  error: {
    status: 404,
    developer: dev,
    result: "Error, Service Unavailable",
  },
  notRes: {
    status: 404,
    developer: dev,
    result: "Error, Invalid JSON Result",
  },
  query: {
    status: 400,
    developer: dev,
    result: "Please input parameter query!",
  },
  url: {
    status: 400,
    developer: dev,
    result: "Please input parameter URL!",
  },
  notUrl: {
    status: 404,
    developer: dev,
    result: "Error, Invalid URL",
  },
  system: {
    status: 404,
    developer: dev,
    result: "Please input parameter system!",
  },
  assistant: {
    status: 404,
    developer: dev,
    result: "Please input parameter assistant!",
  },
  prompt: {
    status: 404,
    developer: dev,
    result: "Please input parameter prompt!",
  },
  username: {
    status: 404,
    developer: dev,
    result: "Please input parameter username!"
  },
  message: {
    status: 404,
    developer: dev,
    result: "Please input parameter message!"
  }
};

// AI Routes

router.post("/ai/luminai", async (req, res) => {
  const { query, username } = req.query;
  if (!query) return res.status(400).json(messages.query);
  if (!username)
    return res.status(400).json({
      status: 400,
      developer: dev,
      result: "Please input Username session!",
    });

  try {
    const data = await skrep.luminai(query, username);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/gpt4", async (req, res) => {
  const { system, assistant, prompt } = req.query;
  if (!system) return res.status(400).json(messages.system);
  if (!assistant) return res.status(400).jaon(messages.assistant);
  if (!prompt) return res.status(400).jaon(messages.prompt);

  try {
    const data = await skrep.gpt4(system, assistant, prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/leptonai", async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json(messages.prompt);

  try {
    const data = await skrep.leptonai(prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/letmegpt", async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json(messages.prompt);

  try {
    const data = await skrep.letmegpt(prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/thinkany", async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json(messages.prompt);

  try {
    const data = await skrep.thinkany(prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/isouchat", async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json(messages.prompt);

  try {
    const data = await skrep.isouchat(prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/yousearch", async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json(messages.prompt);

  try {
    const data = await skrep.yousearch(prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/aoyo", async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json(messages.prompt);

  try {
    const data = await skrep.aoyo(prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/llama3", async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json(messages.prompt);

  try {
    const data = await skrep.llama3(prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/gpt4o", async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json(messages.prompt);

  try {
    const data = await skrep.gpt4o(prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

// Cek Resi Routes
router.get("/cekresi/jnt", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await skrep2.cekjnt(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/cekresi/sicepat", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await skrep2.sicepat(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/cekresi/post", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await skrep2.post(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/cekresi/tiki", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await skrep2.tiki(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/cekresi/lion", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await skrep2.lion(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

// Downloader Routes
router.get("/downloader/tiktok", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep3.tiktok(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/downloader/igdl", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep3.instagram(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/downloader/ttslide", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep3.ttsilde(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/downloader/fbdl", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep3.facebook(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/downloader/twitter", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep3.twitter(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/downloader/terabox", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep3.terabox(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
})

router.get("/downloader/capcut", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep3.capcut(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/downloader/spotify", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await spotifydl(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

// Internet Routes
router.get("/internet/kiryu", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.url);

  try {
    const data = await skrep4.kiryu(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/internet/ttstalk", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.url);

  try {
    const data = await skrep4.ttstalk(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/internet/topanime", async (req, res) => {
  try {
    const data = await skrep4.topanime();
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/internet/topmanga", async (req, res) => {
  try {
    const data = await skrep4.topmanga();
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/internet/ttsearch", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await skrep4.tiktoks(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/internet/bukalapak", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query)
  
  try {
    const data = await skrep4.bukalapak(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/internet/wikipedia", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query)
  
  try {
    const data = await skrep4.wikipedia(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/internet/spotify", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query)
  
  try {
    const data = await searchSpotify(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

// Tools Routes
router.get("/tools/remini", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep6.remini(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/tools/scanner", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await skrep6.scan(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/tools/apk", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await apv.download(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/tools/ngl", async (req, res) => {
  const { username, message } = req.query;
  if (!username) return res.status(400).json(messages.username);
  if (!message) return res.status(400).json(messages.message);

  try {
    const data = await ngl(username, message);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

// Others Routers
router.get("/others/jagokata", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.url);

  try {
    const data = await skrep5.jagokata(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/others/ppcouple", async (req, res) => {
  try {
    const data = await skrep5.ppcouple();
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/others/chwa", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.url);
  try {
    const data = await skrep5.chwa(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/oploverz/search"), async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.url);
  try {
    const data = await require("../scrapers/oploverz")(query)
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
}

module.exports = router;
