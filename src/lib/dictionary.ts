import dictionary from '../data/dictionary.txt';
import { parseWord } from './parseWord';


export const getDictionary = async (): Promise<string[]> => {
  let values: string[] = [];
  await fetch(dictionary)
    .then(res => res.text())
    .then(text => {
      const WORD_LENGTH_ALLOWED = 5;
      const words = text
        .split('\n')
        .filter((word: string) => word.length === WORD_LENGTH_ALLOWED);

      values = words.map(word => parseWord(word).toUpperCase());
    })
    .catch(err => console.log(err));

  return values;
};