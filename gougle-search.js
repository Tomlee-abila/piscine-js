async function queryServers(serverName, q) {
    const url1 = `/${serverName}?q=${q}`;
    const url2 = `/${serverName}_backup?q=${q}`;

    const getJSONPromises = [
        getJSON(url1),
        getJSON(url2)
    ];

    try {
        return await Promise.race(getJSONPromises);
    } catch (error) {
        throw new Error('Both server queries failed');
    }
}

async function gougleSearch(q) {
    const getJSONPromises = {
        web: queryServers("web", q),
        image: queryServers("image", q),
        video: queryServers("video", q)
    };

    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 80)
    );

    try {
        const results = await Promise.race([
            Promise.all(Object.values(getJSONPromises)),
            timeoutPromise
        ]);

        const resultObject = {
            web: results[0],
            image: results[1],
            video: results[2]
        };

        return resultObject;
    } catch (error) {
        throw error;
    }
}