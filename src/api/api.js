import { API_URL } from '../config/config';

const buildUrl = (path, params) => {
    const url = new URL(path, API_URL);
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }
    return url.toString();
};

export const searchUsers = async (query) => {
    try {
        const url = buildUrl('search', { query });
        debugger;
        const response = await fetch(url);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const url = buildUrl(id.toString());
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

       if (!response.ok) {
            const errorText = await response.text(); // Get error details from server
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};