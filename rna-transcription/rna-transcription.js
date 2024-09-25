const TRANSFORMATIONS = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

export const toRna = (dna) => {
    return dna.split('').map((value) => {
        if (!TRANSFORMATIONS[value]) {
            throw new Error('Invalid input DNA.');
        }
        return TRANSFORMATIONS[value];
    }).join('');
};