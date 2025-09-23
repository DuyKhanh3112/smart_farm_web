
export const postImageApi = async (imageBytes: string, fileName: string) => {
    const api = '/api/picture';
    try {
        const response = await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'imageBytes': imageBytes, 'fileName': fileName })
        });
        const data = await response.json();
        if (!data.success) {
            return null;
        }
        return data.data.results;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}