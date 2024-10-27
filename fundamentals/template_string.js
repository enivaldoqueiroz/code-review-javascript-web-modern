const nameString = "Mila";
const concatString = "Hello " + nameString + "!";

// Using TemplateString com ``
const templateString = `
    Hello
    ${nameString}!`;
console.log(templateString);

// expressions...
console.log(`1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Hi... ${up('Warning')}!`);