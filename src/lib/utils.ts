import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validateAnswer = (targetWord: string, input: string[]) => {
  const validation: Record<string, string> = {};

  input.forEach((inputChar, inputIdx) => {
    targetWord.split('').forEach((targetChar, targetIdx) => {
      if (inputIdx === targetIdx) {
        if (inputChar === targetChar) {
          validation[inputIdx] = 'right';
          return;
        }

        if (!targetWord.includes(inputChar)) {
          validation[inputIdx] = 'not-found';
          return;
        } else {
          validation[inputIdx] = 'wrong';
        }
      }
    });
  });

  for (const key in validation) {
    const actualChar = input.find((_, index) => index === Number(key));

    const charCount = input.filter(value => value === actualChar).length;
    const targetCount = targetWord
      .split('')
      .filter(value => value === actualChar).length;

    if (charCount > targetCount) {
      const char = input.findIndex((_, index) => index === Number(key));
      if (validation[char] === 'wrong') {
        validation[char] = 'not-found';
        break;
      }
    }
  }

  return validation;
};

export const validateKeyboard = (target: string, source: string[][]) => {
  const result: Record<string, string> = {};

  source.forEach(row => {
    row.forEach((char, charIdx) => {
      if (result[char] !== undefined) return;
      if (char === target[charIdx]) {
        result[char] = 'right';
      } else if (!target.includes(char)) {
        result[char] = 'not-found';
      } else {
        result[char] = 'wrong';
      }
    });
  });

  return result;
};
export const getRandom = <R extends unknown>(arr: unknown[]): R => {
  const random = Math.floor(Math.random() * arr.length);

  return arr[random] as R;
};