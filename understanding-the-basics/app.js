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
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.write("<button type='submit' > Mesaji gonder</button>");
  res.write("</form>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

server.listen(3000);
