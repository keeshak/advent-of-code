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
  let lines = input.split('\n');
  let output = 0;

  lines.map((line, row) => {
    let expression = /[0-9]+/g;
    let part;

    while ((part = expression.exec(line)) !== null) {
      let prev = lines[row - 1] && lines[row - 1].substr(part.index === 0 ? 0 : part.index - 1, part.index === 0 ? part[0].length + 1 : part[0].length + 2);
      let current = lines[row] && lines[row].substr(part.index === 0 ? 0 : part.index - 1, part.index === 0 ? part[0].length + 1 : part[0].length + 2);
      let next = lines[row + 1] && lines[row + 1].substr(part.index === 0 ? 0 : part.index - 1, part.index === 0 ? part[0].length + 1 : part[0].length + 2);

      if ((prev && prev.match(/[-+@#$%&*=/]/)) || current.match(/[-+@#$%&*=/]/) || (next && next.match(/[-+@#$%&*=/]/))) {
        console.log(prev, current, next, true, output += Number(part[0]));
      } else {
        console.log(prev, current, next, false, output);
      }
    }
  });
};

parseInput(getInput()); // 527364
