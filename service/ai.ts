export const chatAiApi = async (question: string) => {
    const api = '/api/ai';
    try {
        const response = await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'question': question })
        });
        const data = await response.json();
        console.log(data)
        if (!data.success) {
            return null;
        }
        return data.data.output;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}