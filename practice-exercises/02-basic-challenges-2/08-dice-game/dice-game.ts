export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type Simulation = {
  dice1: DiceRoll;
  dice2: DiceRoll;
  sum: number;
  result: 'win' | 'lose' | 'roll again';
};

export function diceGameSimulation(numSimulations: number): Simulation[] {
  const resultsArray: Simulation[] = [];
  function resultMessage(num: number): Simulation['result'] {
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
  function rollDice(): DiceRoll {
    return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
  }
  for (let i = 0; i < numSimulations; i++) {
    const roll1 = rollDice();
    const roll2 = rollDice();
    const rollTotal = roll1 + roll2;
    const message = resultMessage(rollTotal);

    const resultObj: Simulation = {
      dice1: roll1,
      dice2: roll2,
      sum: rollTotal,
      result: message,
    };

    resultsArray.push(resultObj);
  }
  return resultsArray;
}
