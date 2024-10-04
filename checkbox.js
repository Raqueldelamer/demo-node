import { checkbox } from '@inquirer/prompts';
import { input } from '@inquirer/prompts';

const name = await input({ message: 'What is your name?'});
console.log(`Hello ${name}.`);

const languages = await checkbox({
    message: 'What language would you like to speak?',
    choices: [
    { name: 'Spanish', value: 'Spanish' },
    { name: 'French', value: 'French' },
    { name: 'Dutch', value: 'Dutch' },
    { name: 'Swedish', value: 'Swedish' },
    { name: 'Japanese', value: 'Japanese' },
    { name: 'Thai', value: 'Thai' }
    ],
});

console.log(`You definitely should learn ${languages}. It is easier than JavaScript.`)