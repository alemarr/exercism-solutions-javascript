export const isValid = (isbn) => {
    let isbnArray = isbn.replace(/-/g, '').split('');

    if (isbnArray.length !== 10) return false;

    if (isbnArray[9] === 'X') isbnArray[9] = 10;
    
    if (isbnArray.some((char) => isNaN(char))) return false;

    return isbnArray.reduce((acc, curr, index) => acc + (10 - index) * Number(curr), 0) % 11 === 0;
};
