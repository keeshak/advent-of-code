import { readFileSync } from 'fs';

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const getInput = () => {
  try {
    let input = readFileSync('input.txt', 'utf8');

    return input.toString();
  } catch(e) {
    console.log(e);
  }
}

const parseInput = (input) => {
  let output = 0;

  input.split('\n').map(line => {
    let digits = [];

    [...line].map((c, i) => {
      c.match(/[0-9]/g) && digits.push(c);

      numbers.map((number, key) => {
        line.startsWith(number, i) && digits.push(key);
      });
    });

    let newDigit = Number(digits[0] + '' + digits.at(-1));

    console.log(line, newDigit, output += newDigit);
  });
}

parseInput(getInput()); // 54824
