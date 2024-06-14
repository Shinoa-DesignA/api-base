const axios = require("axios");
const cheerio = require("cheerio");
const qs = require("qs");
const fetch = require("fs");
const { G4F } = require("g4f");
let g4f = new G4F();

exports.luminai = async (q, username) => {
    try {
        const response = await axios.post("https://luminai.siputzx.my.id/sesi", {
        content: q,
        user: username,
        });
        return response.data.result;
    } catch (error) {
    console.error("Error fetching:", error);
    throw error;
    }
};

//=========================================//
//BATAS LUMINAI//
//=========================================//

exports.gpt4 = async (system, assistant, user) => {
    try {
        const messages = [
            { role: "system", content: system },
            { role: "asistant", content: assistant  },
            { role: "user", content: usert }
        ];
        let res = await g4f.chatCompletion(messages)
        return  res;
    } catch (e) {
    console.error("Error fetching:", e);
    throw e;
    }
}

//=========================================//
//BATAS GPT4//
//=========================================//

function generateRandomID(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomID = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomID += characters.charAt(randomIndex);
    }
    return randomID;
}

/**
  * Scraper By QanyPaw
  * Forbidden to sell and delete my wm, respect the creator
*/

/**
  * Scraper By QanyPaw
  * Forbidden to sell and delete my wm, respect the creator
*/

exports.leptonai = async (query) => {
    try {
        const api = axios.create({
            baseURL: 'https://search.lepton.run/api/',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const rid = generateRandomID(10);
        const postData = { query, rid };
        const response = await api.post('query', postData);
    
        const llmResponseRegex = /__LLM_RESPONSE__([\s\S]*?)__RELATED_QUESTIONS__/;
        const llmResponseMatch = response.data.match(llmResponseRegex);

        if (llmResponseMatch && llmResponseMatch[1]) {
        let llmResponse = llmResponseMatch[1].trim();
        llmResponse = llmResponse.replace(/__LLM_RESPONSE__|__RELATED_QUESTIONS__/g, '').trim();
        return llmResponse;
        } else {
        throw new Error("No LLM response found.");
        }
    } catch (error) {
    throw new Error('Error fetching LLM response: ' + error.message);
    }
}

//=========================================//
//BATAS LEPTONAI//
//=========================================//

exports.letmegpt = async (query) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://letmegpt.com/search?q=${encodedQuery}`;

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        return $('#gptans').text();
    } catch (error) {
    console.log('Error:', error);
    return null;
    }
}

//=========================================//
//BATAS LETMEGPT//
//=========================================//

/**
  * Scraper By QanyPaw
  * Forbidden to sell and delete my wm, respect the creator
*/

exports.thinkany = async (content) => {
    try {
        const api = axios.create({
            baseURL: 'https://thinkany.ai/api',
            headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://thinkany.ai/'
            }
        });
  
        const newConversationData = { content, locale: "en", mode: "search", model: "claude-3-haiku", source: "all" };
        const { data } = await api.post('/new-conversation', newConversationData);

        const chatData = {
            role: "user",
            content: data.data.content,
            conv_uuid: data.data.uuid,
            mode: data.data.mode,
            is_new: true,
            model: data.data.llm_model
        };

        const chatResponse = await api.post('/chat', chatData);
        return chatResponse.data;
    } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

//=========================================//
//BATAS THINKANY//
//=========================================//

/**
  * Scraper By QanyPaw
  * Thank To Najmy
  * Forbidden to sell and delete my wm, respect the creator
*/

exports.isouchat = async (q) => {
    try {
        const api = axios.create({
            baseURL: "https://isou.chat/api",
            headers: {
            Accept: "text/event-stream",
            "Content-Type": "application/json",
            }
        });
        
        const requestData = {
            stream: true,
            model: "gpt-3.5-turbo",
            mode: "simple",
            language: "all",
            categories: ["general"],
            engine: "SEARXNG",
            locally: false,
            reload: false,
        };

        const { data } = await api.post("/search?q=" + q, requestData);
        return extractAnswers(data);
    } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function extractAnswers(data) {
    let answers = "";
    const regex = /data:\{"data":"\{\\?"answer\\?":\\"(.*?)\\"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
        if (match[1]) {
            answers += match[1];
        }
    }
    return answers;
}

//=========================================//
//BATAS ISOUCHAT//
//=========================================//

/**
  * Scraper By QanyPaw
  * Forbidden to sell and delete my wm, respect the creator
*/

exports.yousearch = async (searchTerm) => {
    const website = axios.create({
        baseURL: 'https://app.yoursearch.ai',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const requestData = {
        searchTerm: searchTerm,
        promptTemplate: `Search term: "{searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

Sources:
(1) <URL of the first reference>
(2) <URL of the second reference>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}`,
    searchParameters: "{}",
    searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`
    };

    try {
        const response = await website.post('/api', requestData);
        return response.data.response;
    } catch (error) {
    console.error('Error:', error);
    throw error;
    }
};

//=========================================//
//BATAS YOUSEARCH//
//=========================================//

function generateRandomString(length) {
    const characters = 'abcdef0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

/**
  * Scraper By QanyPaw
  * Forbidden to sell and delete my wm, respect the creator
*/

function generateRandomNumberString(length) {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

async function getSearchResults(query) {
    const url = 'https://aoyo.ai/Api/AISearch/Source';
    const requestData = {
        q: query,
        num: 20,
        hl: 'id-ID'
    };

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*'
    };

    try {
        const response = await axios.post(url, qs.stringify(requestData), { headers });
        return response.data.organic;
    } catch (error) {
        return [];
    }
}

exports.aoyo = async (content) => {
    const searchQuery = content;
    const searchResults = await getSearchResults(searchQuery);

    const engineContent = searchResults.map((result, index) => ({
        title: result.title,
        link: result.link,
        snippet: result.snippet,
        sitelinks: result.sitelinks ? result.sitelinks.map(link => ({
            title: link.title,
            link: link.link
        })) : [],
        position: index + 1
    }));

    const url = 'https://aoyo.ai/Api/AISearch/AISearch';
    const requestData = {
        content: content,
        id: generateRandomString(32),
        language: 'id-ID',
        engineContent: JSON.stringify(engineContent),
        randomNumber: generateRandomNumberString(17)
    };

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://aoyo.ai/search/?q=' + encodeURIComponent(content)
    };

    try {
        const response = await axios.post(url, qs.stringify(requestData), { headers });
        return response.data.replace(/\[START\][\s\S]*$/g, '').trim();

    } catch (error) {
        return { error: error.message };
    }
}

//=========================================//
//BATAS AOYO//
//=========================================//

/*

Github: https://github.com/khrlmstfa

*Please don't remove this watermark, try to respect developer @Irull*

*/

exports.llama3 = async (query, prompt, model) => {
    if (!["70b", "8b"].some(qq => model == qq)) model = "70b"; //correct
    try {
        const BASE_URL = 'https://llama3-enggan-ngoding.vercel.app/api/llama'; //@Irulll
        const payload = {
            messages: [
            {
                role: "system",
                content: prompt
            },
            {
                role: "user",
                content: query
            }
            ],
            model: model
        };
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148',
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
    } catch (error) {
    console.error('Error:', error);
    throw error;
    }
}

//=========================================//
//BATAS LLAMA3//
//=========================================//

exports.gpt4o = async (prompt) => {
    let session_hash = Math.random().toString(36).substring(2).slice(1)
    let resPrompt = await axios.post('https://kingnish-opengpt-4o.hf.space/run/predict?__theme=light', {
        "data":[{
            "text":prompt,
            "files":[]
        }],
        "event_data":null,
        "fn_index":3,
        "trigger_id":34,
        "session_hash":session_hash})
    let res = await axios.post('https://kingnish-opengpt-4o.hf.space/queue/join?__theme=light', {
        "data":[
            null,
            null,
            "idefics2-8b-chatty",
            "Top P Sampling",
            0.5,
            4096,
            1,
            0.9,
            true
        ],
        "event_data":null,
        "fn_index":5,
        "trigger_id":34,
        "session_hash": session_hash
    })
    let event_ID = res.data.event_id
    let anu = await axios.get('https://kingnish-opengpt-4o.hf.space/queue/data?session_hash=' + session_hash)
    const lines = anu.data.split('\n');
const processStartsLine = lines.find(line => line.includes('process_completed'));

if (processStartsLine) {
    const processStartsData = JSON.parse(processStartsLine.replace('data: ', ''));
    let ress = processStartsData.output.data
    let result = ress[0][0][1]
    return result
} else {
    return 'error kang!'
}
}
//=========================================//
//BATAS GPT4O//
//=========================================//

  
