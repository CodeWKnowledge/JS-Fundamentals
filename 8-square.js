const size = Number(process.argv[2]);
if (!Number.isInteger(size)) {
  console.log("Missing size");
} else {
  let out = "";
  for (let i = 0; i < size; i++) {
    out += "X".repeat(size) + "\n";
  }
  console.log(out.trim());
}
