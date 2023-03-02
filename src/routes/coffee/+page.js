export const load = async() => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    return {
        fetchedData : json
    }
}