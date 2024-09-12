const fs = require("fs");
let text = fs.readFileSyne("dele.txt","utf-8")
text=text.replace("Prohallad","Polu");


console.log("The content of the file is");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("Polu.txt",text);
