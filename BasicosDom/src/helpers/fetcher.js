    export function fetching(endpoint) {
        const PORT = import.meta.env.VITE_PORT;
        const URL = import.meta.env.VITE_URL;
        const URL_PORT = `${URL}:${PORT}`;
        
        return fetch(`${URL_PORT}/${endpoint}`)
            .then((res) => res.json())
            .then((data) => {
            return data
        })
        .catch(err => {
            throw new Error(err)
        })
    }

    export async function fetching2(endpoint) {
    const PORT = import.meta.env.VITE_PORT;
    const URL = import.meta.env.VITE_URL;
    const URL_PORT = `${URL}:${PORT}`;

    try {
        const res = await fetch(`${URL_PORT}/${endpoint}`);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
}
