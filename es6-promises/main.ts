import { takeAChance } from './take-a-chance.js';

const result: Promise<string> = takeAChance('Khanh');

result.then((x) => console.log(x)).catch((x) => console.log(x.message));
