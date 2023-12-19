export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type Simulation = {
  dice1: DiceRoll;
  dice2: DiceRoll;
  sum: number;
  result: 'win' | 'lose' | 'roll again';
};

export function diceGameSimulation(numSimulations: number): Simulation[] {
  const resultsArray: Simulation[] = [];
  function resultMessage(num: number): string {
    switch (num) {
      case 7:
      case 11:
        return 'win';
      case 2:
      case 3:
      case 12:
        return 'lose';
      default:
        return 'roll again';
    }
  }
  for (let i = 0; i < numSimulations; i++) {
    const resultObj: Simulation = {};
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    const result = resultMessage(sum);
    resultObj.dice1 = dice1;

    resultsArray.push(resultObj);
  }
  return resultsArray;
}
