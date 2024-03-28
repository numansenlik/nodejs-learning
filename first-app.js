const fs = require("fs");
for (let index = 0; index < 10; index++) {
  fs.writeFileSync(`${index}hello.txt`, "Hello Node First App");
}
