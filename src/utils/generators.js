export const generateRandomString = (length = 16) => {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from(array)
        .map((num) => chars[num % chars.length])
        .join('');
};