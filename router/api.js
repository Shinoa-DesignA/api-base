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
