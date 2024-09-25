const MINIMUM_LENGTH = 10;
const MAXIMUM_LENGTH = 11;
const COUNTRY_CODE = 1;

export const clean = phoneNumber => {
  checkIfHasLetters(phoneNumber);
  checkIfHasSpecialCharacters(phoneNumber);

  const sanitized = phoneNumber.replace(/\D/g, '');

  validateLength(sanitized);
  validateFormat(sanitized);

  const numberWithoutCountryCode = sanitized.slice(-10);
  
  return numberWithoutCountryCode;
};

const checkIfHasLetters = phoneNumber => {
  if (/[a-zA-Z]/.test(phoneNumber)) {
    throw new Error('Letters not permitted');
  }
};

const checkIfHasSpecialCharacters = phoneNumber => {
  const withoutValidCharacters = phoneNumber.replace(/[ +()-.]/g, '');
  if (/\D/.test(withoutValidCharacters)) {
    throw new Error('Punctuations not permitted');
  }
};

const validateLength = phoneNumber => {
  if (phoneNumber.length < MINIMUM_LENGTH) {
    throw new Error('Incorrect number of digits');
  }

  if (phoneNumber.length > MAXIMUM_LENGTH) {
    throw new Error('More than 11 digits');
  }
}

const validateAreaCode = areaCode => {
  if (areaCode.charAt(0) === '0') {
    throw new Error('Area code cannot start with zero');
  }

  if (areaCode.charAt(0) === COUNTRY_CODE.toString()) {
    throw new Error('Area code cannot start with one');
  }
}

const validateExchangeCode = exchangeCode => {
  if (exchangeCode.charAt(0) === '0') {
    throw new Error('Exchange code cannot start with zero');
  }

  if (exchangeCode.charAt(0) === '1') {
    throw new Error('Exchange code cannot start with one');
  }
};

const validateFormat = phoneNumber => {
  let areaCode;
  let exchangeCode;
  if (phoneNumber.length === MAXIMUM_LENGTH) {
    if (phoneNumber.charAt(0) !== COUNTRY_CODE.toString()) {
      throw new Error('11 digits must start with 1');
    }

    areaCode = phoneNumber.substr(1, 3);
    exchangeCode = phoneNumber.substr(4, 3);
  }
  if (phoneNumber.length === MINIMUM_LENGTH) {
    areaCode = phoneNumber.substr(0, 3);
    exchangeCode = phoneNumber.substr(3, 3);
  }

  validateAreaCode(areaCode);
  validateExchangeCode(exchangeCode);
};