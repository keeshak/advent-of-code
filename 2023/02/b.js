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

    let highestRedCubes = 0;
    let highestGreenCubes = 0;
    let highestBlueCubes = 0;

    sets.split(';').map(set => {
      let cubes = set.split(',');

      let redCubes = cubes.filter(cube => cube.match(/red/g))[0];
      let redCubesAmount = redCubes ? Number(redCubes.match(/[0-9]+/g)[0]) : 0;

      let greenCubes = cubes.filter(cube => cube.match(/green/g))[0];
      let greenCubesAmount = greenCubes ? Number(greenCubes.match(/[0-9]+/g)[0]) : 0;

      let blueCubes = cubes.filter(cube => cube.match(/blue/g))[0];
      let blueCubesAmount = blueCubes ? Number(blueCubes.match(/[0-9]+/g)[0]) : 0;

      highestRedCubes = (redCubesAmount > highestRedCubes) ? redCubesAmount : highestRedCubes;
      highestGreenCubes = (greenCubesAmount > highestGreenCubes) ? greenCubesAmount : highestGreenCubes;
      highestBlueCubes = (blueCubesAmount > highestBlueCubes) ? blueCubesAmount : highestBlueCubes;
    });

    let power = highestRedCubes * highestGreenCubes * highestBlueCubes;

    console.log(highestRedCubes, highestGreenCubes, highestBlueCubes, power, output += power)
  });
};

parseInput(getInput()); // 72513
