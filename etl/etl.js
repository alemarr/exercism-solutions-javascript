export const transform = (old) => {
    let transformed = {};

    Object.keys(old).map(key => {
        old[key].map(value => {
            transformed[value.toLowerCase()] = parseInt(key);
        })
    });

    return transformed;
};