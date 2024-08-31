const getURL = (str) =>{
    const reg = /(https?:\/\/)[\w.\/\S]+/g
    let result = str.match(reg)
    return result
}

const greedyQuery = (str) => {
    const urlPattern = /(https?:\/\/[^\s?]+(?:\?[^\s]*)?)/g;
    const queryParamPattern = /[?&]([^=&]+)=/g; // Pattern to match query parameters
    
    const urls = str.match(urlPattern) || [];
    return urls.filter(url => {
        const queryParams = url.match(queryParamPattern);
        return queryParams && queryParams.length >= 3;
    });
}

const notSoGreedy = (str) => {
    const urlPattern = /(https?:\/\/[^\s?]+(?:\?[^\s]*)?)/g;
    const queryParamPattern = /[?&]([^=&]+)=/g; // Pattern to match query parameters
    
    const urls = str.match(urlPattern) || [];
    return urls.filter(url => {
        const queryParams = url.match(queryParamPattern);
        return queryParams && queryParams.length >= 2 && queryParams.length <= 3;
    });
}

// const dataSet = "http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true  http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy https://www.notherExample.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot&id=3&qwe=ty http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot https://devdocs.io/javascript/global_objects/regexp/@@split http://correct/url?correct=yes https://nan-academy.github.io/js-training/?page=editor#data.nested http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy http://www_example.com/ https://regex-performance.github.io/exercises.html http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact http://localhost/exercises https://192.168.1.123?something=nothing&pro=[23]"
// console.log(notSoGreedy(dataSet))