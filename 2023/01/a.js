import { readFileSync } from 'fs';

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
    let digits = line.match(/[0-9]/g) || [];
    let newDigit = Number(digits[0] + '' + digits.at(-1));

    console.log(line, newDigit, output += newDigit);
  });
}

parseInput(getInput()); // 55386
