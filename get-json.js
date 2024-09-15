async function getJSON  (path, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${path}?${queryString}` : path;

    try{
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }
        return data.data;
    }catch(error){
        throw error;
    }
}
