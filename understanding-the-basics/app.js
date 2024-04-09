const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>");
    res.write("<form  action='/message' method='POST'>");
    res.write(
      "<input name='message' type=text placeholder='Bir Mesaj Giriniz'></input>"
    );
    res.write("<button type='submit' > Mesaji gonder</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split("=")[1];
      fs.writeFileSync(`${message}.txt`, "DUMMY");
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  return res.end();
});

server.listen(3000);
//
