const langs = ["C is fun", "Python is cool", "JavaScript is amazing"];
let out = "";
for (let i = 0; i < langs.length; i++) {
  out += langs[i] + (i < langs.length - 1 ? "\n" : "");
}
console.log(out);
