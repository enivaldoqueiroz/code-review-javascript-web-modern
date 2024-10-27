const school = "Cod3r";

console.log(school.charAt(4)); // Returns the character at the specified index.
console.log(school.charAt(5)); // Returns empty
console.log(school.charCodeAt(3)); // Returns the Unicode value of the character
console.log(school.indexOf('3')); // Returns the position of the first occurrence of a substring.

console.log(school.substring(1)); // Returns the substring at the specified location within a String object
console.log(school.substring(0, 3));

console.log('School'.concat(school).concat("!"));
console.log(school.replace(3,'e'));
console.log(school.replace('/\d/','e')); // Using regex in replace
console.log('ana, Maria, pedro'.split(','));