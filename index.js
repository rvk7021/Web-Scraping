const axios = require('axios');
const cheerio = require('cheerio');
const qs =require('qs');

const url = "https://saveig.app/api/ajaxSearch"

async function getVideos(){
    const data ={ 
         q: "https://www.instagram.com/reel/C6_6_lpBfBY/?utm_source=ig_web_copy_link",
         t: "media",
         lang: "en"
                }

    const  headers={
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Length': '105',
        'Content-Type': 'application/x-www-form-urlencoded;',
        'Origin': 'https://saveig.app',
        'Priority': 'u=1, i',
        'Referer': 'https://saveig.app/',
        'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Gpc': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
    }
    axios.post(url, qs.stringify(data),{headers}).then((res)=>{
        const filteredData = res.data;
        // console.log('Filtered Data:', filteredData);
        const y = filteredData.data;
        // console.log('Y:', y);

        const $ = cheerio.load(y);
        const filtered1 = $(".download-items");
        // console.log('Filtered1:', filtered1.html());

        const downloadLink = filtered1.find(".download-items__btn a").attr("href");
        console.log( downloadLink);
        
    }).catch((err)=>{
        console.log(err)
    });
}
getVideos();

