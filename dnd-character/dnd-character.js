const INITIAL_HITPOINTS = 10;
const DICE_THROWS = 4;
const DICE_SIDES = 6;

const rollDice = () => {
  return Math.floor(DICE_SIDES * Math.random()) + 1;
};

export const abilityModifier = (ability) => {
  if (ability < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (ability > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((ability - 10) / 2);
};

export class Character {
  constructor() {
    this._constitution = Character.rollAbility();
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = INITIAL_HITPOINTS + Character.getModifierFor(this._constitution);
  }

  get hitpoints() {
    return this._hitpoints;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  static rollAbility() {
    const throws = Array.from({length: DICE_THROWS}, () => rollDice())

    return throws.sort((a, b) => a - b)
        .slice(1)
        .reduce((acc, diceRoll) => {
          acc += diceRoll;
          return acc;
        }, 0);
  }

  static getModifierFor(abilityValue) {
    return Math.floor((abilityValue - INITIAL_HITPOINTS) / 2);
  }
}
