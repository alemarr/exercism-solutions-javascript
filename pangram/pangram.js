const totalChars = 26;

export const isPangram = sentence => {
    let result = sentence.toLowerCase()
        .replace(/([^a-z])/g, '')
        .split('')
        .sort()
        .join('')
        .replace(/(.+)(?=\1)/g, '');

    return result.length == totalChars;
};