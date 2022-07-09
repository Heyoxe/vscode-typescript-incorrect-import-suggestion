import { MY_PROPERTY } from 'somelib/helper/incorrect.mjs';

// This will throw
console.log(MY_PROPERTY);

// ! If you try to autocomplete this, SOMETHING_ELSE will be suggested despite not being used anywhere
// console.log(SOMETHING_)

// ! If you try to autocomplete this, WITH_LOCALE will not be suggested
// console.log(WITH_)
