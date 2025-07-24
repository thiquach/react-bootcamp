const { log } = require("console");
const fs = require("fs");

fs.readFile("./message.txt", (err, data) => {
    if (err) throw err;
    console.log("read successfully! " + data);
})