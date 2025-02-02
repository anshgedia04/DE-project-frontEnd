
export const post_data_fetch = async (url, data) => {
    const responce = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    if(!responce.ok){
        throw new Error('Failed to fetch data in post_data_fetch function');
    }
    return responce.json();
};
    