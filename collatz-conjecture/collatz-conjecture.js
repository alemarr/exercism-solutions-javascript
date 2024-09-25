export const steps = number => {
    var stepsCount = 0;
    
    if (number <= 0) {
        throw new Error('Only positive numbers are allowed');
    }

    while (number > 1) {
        if (number % 2 == 0) {
            number = number / 2;
        } else {
            number = (number * 3) + 1;
        }
        
        stepsCount++;
    }

    return stepsCount;
}