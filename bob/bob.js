export const hey = (message) => {
  message = message.trim();
  switch (true) {
    case isEmpty(message):
      return 'Fine. Be that way!';
    case isYell(message) && isQuestion(message):
      return "Calm down, I know what I'm doing!";
    case isYell(message):
      return "Whoa, chill out!";
    case isQuestion(message):
      return "Sure.";
    default:
      return "Whatever.";
  }
};

const isEmpty = message => {
  return message == '';
};

const isYell = message => {
  return message.toUpperCase() == message && /[A-Z]/.test(message);
};

const isQuestion = message => {
  return message.substr(-1, 1) == '?';
};