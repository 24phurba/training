const fs = require("node:fs");

try {
  fs.mkdirSync("StudentFolder");
  fs.writeFileSync("./StudentFolder/notes.txt", "this is my first note.");
  fs.appendFileSync(
    "./StudentFolder/notes.txt",
    "\nAdding another line to my notes."
  );

  const data = fs.readFileSync("./StudentFolder/notes.txt", "utf-8");
  console.log(data);
  fs.unlinkSync("./StudentFolder/notes.txt");
  fs.rmdirSync("StudentFolder");
} catch (error) {
  console.log(error);
}
