import { colorCode } from '../resistor-color/resistor-color';

export const decodedValue = values => {
  let output = colorCode(values[0]).toString() + colorCode(values[1]).toString();  

  return Number(output);
};
