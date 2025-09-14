const n = Number(process.argv[2]);
if (!Number.isInteger(n)) {
  console.log("Missing number of occurrences");
} else {
  let out = "";
  for (let i = 0; i < n; i++) {
    out += "C is fun\n";
  }
  console.log(out.trim());
}
