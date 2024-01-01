export const parseWord = (word: string): string => {
  return word
    .split('')
    .map(char => {
      if (char.toLowerCase() === 'ñ') {
        return char;
      }

      return char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    })
    .join('');
};