export const recite = (initialBottlesCount, takeDownCount) => {
  const song = [];

  for (let i = takeDownCount; i > 0; i--) {
    const verse = getVerse(initialBottlesCount);

    song.push(...verse);
    if (i > 1) {
      song.push('');
    }

    initialBottlesCount--;
  }

  return song;
};

const getVerse = bottles => {
  let verse;
  switch (bottles) {
    case 0:
      verse = [
        'No more bottles of beer on the wall, no more bottles of beer.',
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
      ];
      break;
    case 1:
      verse = [
        `${bottles} bottle of beer on the wall, ${bottles} bottle of beer.`,
        `Take it down and pass it around, no more bottles of beer on the wall.`
      ];
      break;
    default:
      const newBottles = bottles - 1;
      const bottleText = newBottles > 1 ? 'bottles' : 'bottle';
      verse = [
        `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`,
        `Take one down and pass it around, ${newBottles} ${bottleText} of beer on the wall.`
      ];
      break;
  }

  return verse;
};