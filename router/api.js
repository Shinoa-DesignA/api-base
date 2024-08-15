const express = require("express");
const router = express.Router();
const config = require("../schema/config");
const skrep = require("../scrapers/ai");
const skrep2 = require("../scrapers/cekresi");
const skrep3 = require("../scrapers/downloader");
const skrep4 = require("../scrapers/internet");
const skrep5 = require("../scrapers/others");
const skrep6 = require("../scrapers/tools");
const { developer: dev } = config.options;

(function(_0x4667c0,_0x4ba367){const _0x122e57=_0x12b4,_0x2342a9=_0x4667c0();while(!![]){try{const _0x33e89f=-parseInt(_0x122e57(0x1c4))/0x1*(-parseInt(_0x122e57(0x1c8))/0x2)+parseInt(_0x122e57(0x1ea))/0x3+parseInt(_0x122e57(0x1c7))/0x4*(-parseInt(_0x122e57(0x1eb))/0x5)+parseInt(_0x122e57(0x1d6))/0x6*(-parseInt(_0x122e57(0x1e6))/0x7)+parseInt(_0x122e57(0x1df))/0x8+parseInt(_0x122e57(0x1d2))/0x9+parseInt(_0x122e57(0x1d5))/0xa*(parseInt(_0x122e57(0x1db))/0xb);if(_0x33e89f===_0x4ba367)break;else _0x2342a9['push'](_0x2342a9['shift']());}catch(_0x3ed13e){_0x2342a9['push'](_0x2342a9['shift']());}}}(_0x936d,0x45d34));function _0x4f21(_0x33fdef,_0x258234){const _0x141768=_0x2726();return _0x4f21=function(_0x2b6072,_0x55bfc0){_0x2b6072=_0x2b6072-0xd0;let _0x2a84e1=_0x141768[_0x2b6072];return _0x2a84e1;},_0x4f21(_0x33fdef,_0x258234);}(function(_0x18c49f,_0x39540e){const _0x259663=_0x12b4,_0x58445e=_0x4f21,_0x2d45fd=_0x18c49f();while(!![]){try{const _0x229c58=-parseInt(_0x58445e(0xe0))/0x1+-parseInt(_0x58445e(0xd2))/0x2*(parseInt(_0x58445e(0xed))/0x3)+parseInt(_0x58445e(0xdd))/0x4+-parseInt(_0x58445e(0xda))/0x5+-parseInt(_0x58445e(0xd1))/0x6+-parseInt(_0x58445e(0xeb))/0x7*(-parseInt(_0x58445e(0xe2))/0x8)+parseInt(_0x58445e(0xd3))/0x9;if(_0x229c58===_0x39540e)break;else _0x2d45fd[_0x259663(0x1dc)](_0x2d45fd[_0x259663(0x1ca)]());}catch(_0x12e977){_0x2d45fd[_0x259663(0x1dc)](_0x2d45fd['shift']());}}}(_0x2726,0xa3221),function(_0x13b13d,_0x1dcfb0){const _0x4f4f78=_0x12b4,_0x5e446c=_0x4f21,_0x296f7e=_0x534d,_0x56b797=_0x13b13d();while(!![]){try{const _0x571e3c=-parseInt(_0x296f7e(0xf2))/0x1+parseInt(_0x296f7e(0x102))/0x2*(-parseInt(_0x296f7e(0xf0))/0x3)+parseInt(_0x296f7e(0xf9))/0x4+parseInt(_0x296f7e(0xf8))/0x5+parseInt(_0x296f7e(0xfd))/0x6*(-parseInt(_0x296f7e(0xf6))/0x7)+-parseInt(_0x296f7e(0xfe))/0x8+parseInt(_0x296f7e(0xf7))/0x9;if(_0x571e3c===_0x1dcfb0)break;else _0x56b797[_0x5e446c(0xde)](_0x56b797[_0x5e446c(0xe3)]());}catch(_0xe140dd){_0x56b797[_0x4f4f78(0x1dc)](_0x56b797[_0x5e446c(0xe3)]());}}}(_0xc819,0xef583));function _0x534d(_0x4d62cb,_0x3bb595){const _0x5083b3=_0xc819();return _0x534d=function(_0x5e901e,_0x466f56){_0x5e901e=_0x5e901e-0xed;let _0x587fa0=_0x5083b3[_0x5e901e];return _0x587fa0;},_0x534d(_0x4d62cb,_0x3bb595);}function _0x2cda(){const _0x4593b2=_0x12b4,_0x524f23=_0x4f21,_0x19ba60=_0x534d,_0x26ba22=[_0x524f23(0xdf),_0x19ba60(0x100),_0x19ba60(0xef),'480oHgiRY',_0x19ba60(0xff),_0x19ba60(0x101),_0x19ba60(0xfb),_0x524f23(0xd4),_0x19ba60(0xee),_0x19ba60(0xfc),_0x19ba60(0xfa),_0x524f23(0xd5),_0x4593b2(0x1d3),_0x19ba60(0xf1),_0x524f23(0xea),_0x19ba60(0xf5)];return _0x2cda=function(){return _0x26ba22;},_0x2cda();}function _0x2726(){const _0x3f57e9=_0x12b4,_0x1d7363=[_0x3f57e9(0x1e1),_0x3f57e9(0x1de),'1103966jTWmLD','11861152HPPtAL',_0x3f57e9(0x1e5),_0x3f57e9(0x1c6),'51775mvWlOF',_0x3f57e9(0x1dd),_0x3f57e9(0x1cd),_0x3f57e9(0x1e0),_0x3f57e9(0x1d9),_0x3f57e9(0x1e8),_0x3f57e9(0x1cc),_0x3f57e9(0x1d0),_0x3f57e9(0x1cb),_0x3f57e9(0x1c9),_0x3f57e9(0x1d8),_0x3f57e9(0x1ce),_0x3f57e9(0x1c5),_0x3f57e9(0x1e9),_0x3f57e9(0x1da),'4397695sHfrge',_0x3f57e9(0x1e7),_0x3f57e9(0x1cf),_0x3f57e9(0x1d7),'push',_0x3f57e9(0x1e4),_0x3f57e9(0x1e3),'2859795hdbeho',_0x3f57e9(0x1e2),_0x3f57e9(0x1ca)];return _0x2726=function(){return _0x1d7363;},_0x2726();}function _0x936d(){const _0x168310=['52759nNWIaW','750978WlCsaB','115uogkYP','435713SFKyRt','username=','900AYXKOW','61852lHBXbH','2jBrGxr','error','shift','31148424eWpohD','3183126Mqcdzt','260564RvSTNc','&deviceId=18d7b980-ac6a-4878-906e-087dfec6ea1b&gameSlug=&referrer=','https://ngl.link/api/submit','8FijvLN','2168108akABJA','692955XPSNZv','&question=','376426KonptO','16960VCmTVP','36fCVbmS','545248qJKjff','post','36107280RaCHsm','data','1639gDRqBh','push','7JXFJzq','axios','686376CGOAgV','682443qrRyFh','6NiRcfu','1174936exddLY','755938bkwLXO','81etXlFU','2070298XRThbC','536529pzGDzS','19953432taqfGR','3GRoNYI'];_0x936d=function(){return _0x168310;};return _0x936d();}function _0x52f8(_0x40c9aa,_0xaa6896){const _0x2aaa1e=_0x2cda();return _0x52f8=function(_0x52e9a7,_0x3d66e2){_0x52e9a7=_0x52e9a7-0x13f;let _0x5b6804=_0x2aaa1e[_0x52e9a7];return _0x5b6804;},_0x52f8(_0x40c9aa,_0xaa6896);}(function(_0x330399,_0x19c528){const _0x5ab6e2=_0x4f21,_0x2e9494=_0x534d,_0x25d2dc=_0x52f8,_0x3143bf=_0x330399();while(!![]){try{const _0x321120=-parseInt(_0x25d2dc(0x148))/0x1+-parseInt(_0x25d2dc(0x142))/0x2+-parseInt(_0x25d2dc(0x145))/0x3*(parseInt(_0x25d2dc(0x14d))/0x4)+-parseInt(_0x25d2dc(0x14e))/0x5*(-parseInt(_0x25d2dc(0x143))/0x6)+-parseInt(_0x25d2dc(0x141))/0x7+-parseInt(_0x25d2dc(0x144))/0x8*(parseInt(_0x25d2dc(0x140))/0x9)+parseInt(_0x25d2dc(0x149))/0xa;if(_0x321120===_0x19c528)break;else _0x3143bf[_0x2e9494(0xf3)](_0x3143bf[_0x2e9494(0xed)]());}catch(_0x32411a){_0x3143bf[_0x5ab6e2(0xde)](_0x3143bf[_0x2e9494(0xed)]());}}}(_0x2cda,0xa2938));function _0x12b4(_0x24c812,_0x1a2567){const _0x936df3=_0x936d();return _0x12b4=function(_0x12b4ef,_0x3fcb77){_0x12b4ef=_0x12b4ef-0x1c4;let _0x5531a8=_0x936df3[_0x12b4ef];return _0x5531a8;},_0x12b4(_0x24c812,_0x1a2567);}async function ngl(_0x33ab54,_0x28a0ca){const _0x147517=_0x4f21,_0x52d813=_0x534d,_0x5e0fbf=_0x52f8;try{const _0x42a19e=await require(_0x5e0fbf(0x14a))[_0x5e0fbf(0x14b)](_0x5e0fbf(0x146),_0x52d813(0xf4)+_0x33ab54+_0x5e0fbf(0x14c)+_0x28a0ca+_0x147517(0xd6)),_0x3a1760=_0x42a19e[_0x5e0fbf(0x13f)];return{'response':_0x3a1760};}catch(_0x2324f6){console[_0x5e0fbf(0x147)](_0x2324f6);throw _0x2324f6;}}function _0xc819(){const _0x35c885=_0x12b4,_0x4669ea=_0x4f21,_0x4ff365=['2221968kcOFoN',_0x4669ea(0xe4),_0x35c885(0x1d4),_0x35c885(0x1ca),_0x4669ea(0xe6),_0x4669ea(0xe8),_0x4669ea(0xd0),_0x35c885(0x1d1),_0x4669ea(0xec),_0x35c885(0x1dc),_0x4669ea(0xd7),_0x4669ea(0xd9),_0x4669ea(0xd8),_0x4669ea(0xdb),_0x4669ea(0xe1),'5013276kvmhJd',_0x4669ea(0xe5),_0x4669ea(0xdc),_0x4669ea(0xee),_0x4669ea(0xe9),_0x4669ea(0xe7),'206776lEaqiU'];return _0xc819=function(){return _0x4ff365;},_0xc819();}

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
