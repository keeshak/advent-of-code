import { readFileSync } from 'fs';

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const getInput = () => {
  try {
    let input = readFileSync('input.txt', 'utf8');

    return input.toString();
  } catch(e) {
    console.log(e.stack);
  }
}

const parseInput = (input) => {
  let sum = 0;

  input.split('\n').map((line) => {
    let digits = [];

    [...line].map((c, i) => {
      c.match(/[0-9]/g) && digits.push(c);

      numbers.map((number, key) => {
        line.startsWith(number, i) && digits.push(key);
      });
    });

    let newDigit = Number(digits[0] + '' + digits.at(-1));

    sum += newDigit;

    console.log(line, newDigit, sum);
  });
}

parseInput(getInput());
