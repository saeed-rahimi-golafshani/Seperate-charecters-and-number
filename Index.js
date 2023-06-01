const code = "5022291037349410 salk";
const carecters = code.match(/[a-z]+/gi).join("");
const number = code.match(/\d+/g).join("");
const specialCharacters = code.match(/[^a-z\d]+/gi).join(""); // @#
console.log(carecters);
console.log(number);
console.log(specialCharacters);