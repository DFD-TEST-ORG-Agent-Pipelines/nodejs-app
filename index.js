const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello from Node.js!");
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server on port ${PORT}`));
