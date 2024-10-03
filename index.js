import { input } from '@inquirer/prompts';

import { bonjour } from './bonjour.js';
bonjour();

const answer = await input({ message: 'Enter your name' });

console.log(`Bonjour ${answer}, top of the day to you!`);

import { opinionPoll } from './opinionPoll.js';
opinionPoll();

const response = await input({message: 'What is your favorite song?'});
console.log(`Great choice! ${response} is a classic!`);