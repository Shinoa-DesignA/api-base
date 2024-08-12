var { get } = require("axios"), { load } = require("cheerio"), creator = "MannR", baseUrl = "https://oploverz.my/", o = require("./mediafire")

let search = async (q) => {
    var { data } = await get(baseUrl + "?s=" + q), $ = load(data), title = [], status = [], type = [], url = [], thumb = [], result = []
    
    $(".bsx a").each((a, b) => {
        title.push($(b).attr("title"))
        url.push($(b).attr("href"))
    })
    
    $(".bsx .status").each((a, b) => {
        status.push($(b).text().trim())
    })
    
    $(".bsx .typez").each((a, b) => {
        type.push($(b).text().trim())
    })
    
    $(".bsx img").each((a, b) => {
        thumb.push($(b).attr("src"))
    })
    
    for (let i = 0; i < title.length; i++) {
        result.push({
            title: title[i],
            status: status[i],
            type: type[i],
            url: url[i],
            thumb: thumb[i]
        })
    }
    return result
}

module.exports = search
