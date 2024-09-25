export const age = (planet, seconds) => {
    let calculator = new SpaceAgeCalculator();
    return calculator.calculate(planet, seconds);
};

class SpaceAgeCalculator
{
    constructor() {
        this.yearSeconds = 31557600;
        this.planets = {
            earth: 1,
            mercury: 0.2408467,
            venus: 0.61519726,
            mars: 1.8808158,
            jupiter: 11.862615,
            saturn: 29.447498,
            uranus: 84.016846,
            neptune: 164.79132
        };
    }

    calculate(planet, seconds) {
        let planetSeconds = this.planets[planet] * this.yearSeconds; 
        return Math.round((seconds / planetSeconds) * 1e2 ) / 1e2;
    }
}