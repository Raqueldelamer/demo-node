import { input } from '@inquirer/prompts';
import { bonjour } from './bonjour.js';
bonjour();

const answer = await input({ message: 'Enter your name' });

console.log(`Bonjour ${answer}, top of the day to you!`);

import { opinionPoll } from './opinionPoll.js';
opinionPoll();

const response = await input({message: 'What is your favorite song?'});
console.log(`Great choice! ${response} is a classic!`);

const hobby = await input({message: 'What is your favorite hobby?'});
console.log(`${hobby} is a great way to spend time!`);

const programming = await input({message: 'What is your favorite programming language?'});
console.log(`${programming} is difficult. Keep at it!`);