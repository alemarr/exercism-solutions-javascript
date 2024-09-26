import { match } from "assert";

export const encode = input => input.replace(/(.)\1+/g, (matches, char) => matches.length + char);

export const decode = input => input.replace(/(\d+)(.)/g, (_matches, count, char) => char.repeat(count));
