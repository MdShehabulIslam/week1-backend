// Task - 3

/* OS Module */

const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU cores:", os.cpus().length);

const totalGB = (os.totalmem() / 1024 ** 3).toFixed(2);
const freeGB = (os.freemem() / 1024 ** 3).toFixed(2);

console.log(`RAM: ${freeGB} GB free of ${totalGB} GB`);
console.log("Hostname:", os.hostname());

/* Path Module */

const path = require("path");

console.log(__dirname);
console.log(__filename);

const filePath = path.join(__dirname, "data", "products.json");

console.log(filePath);
console.log(path.extname("profile-photo.jpg"));

/* FS Module */

const fs = require("fs");

// Write File

fs.writeFileSync(
  "activity.log",
  "Mohammad Shehabul Islam " +
    new Date().toISOString() +
    "\nNode.js exploration complete",
);

// Read File

fs.readFile("activity.log", "utf8", (err, data) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log(data);
});

// Append into File

fs.appendFile(
  "activity.log",
  "\nBuilt-in modules: fs, path, os explored",
  (err) => {
    if (err) console.error("Error: ", err.message);
    else console.log("Appended Data:");
  },
);
