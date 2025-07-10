export const bufferToBase64 = (buffer) => {
    // Convert ArrayBuffer to Uint8Array
    const bytes = new Uint8Array(buffer);
    // Convert bytes to string of chars
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    // Encode binary string as base64
    return window.btoa(binary);
};