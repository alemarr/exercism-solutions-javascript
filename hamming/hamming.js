export const compute = (a, b) => {
    validate(a, b);

    return a.split('').reduce((distance, char, index) => {
        if (char !== b.charAt(index)) {
            distance++;
        }
        return distance;
    }, 0);
};

const validate = (a, b) => {
    if (a.length !== b.length) {
        throw new Error('strands must be of equal length');
    }

    if (!a && b) {
        throw new Error('left strand must not be empty');
    }

    if (a && !b) {
        throw new Error('right strand must not be empty');
    }
}