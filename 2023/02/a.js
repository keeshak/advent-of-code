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
    let [game, sets] = line.split(':');
    let gameId = Number(game.match(/[0-9]/g).join(''));
    let gameIsValid = true;

    sets.split(';').map(set => {
      let cubes = set.split(',');

      let redCubes = cubes.filter(cube => cube.match(/red/g))[0];
      let redCubesAmount = redCubes ? Number(redCubes.match(/[0-9]+/g)[0]) : 0;

      let greenCubes = cubes.filter(cube => cube.match(/green/g))[0];
      let greenCubesAmount = greenCubes ? Number(greenCubes.match(/[0-9]+/g)[0]) : 0;

      let blueCubes = cubes.filter(cube => cube.match(/blue/g))[0];
      let blueCubesAmount = blueCubes ? Number(blueCubes.match(/[0-9]+/g)[0]) : 0;

      if (redCubesAmount > 12 || greenCubesAmount > 13 || blueCubesAmount > 14) {
        gameIsValid = false;
      }
    });

    if (gameIsValid) {
      console.log(gameId, true, output += gameId);
    } else {
      console.log(gameId, false, output);
    }
  });
};

parseInput(getInput()); // 2162
