const http = require("http")
const fs = require("fs")
const { URL } = require("url")
const serverAddr = "http://localhost"


http.createServer((req, res) => {

  const url = new URL(serverAddr + req.url)
  switch (url.pathname) {
    case "/getWeather":
      if (url.searchParams.get("city") === "beijing") {
        res.end(JSON.stringify({ city: 'beijing', weather: 'sunny' }))
      } else {
        res.end(JSON.stringify({ city: url.searchParams.get("city"), weather: "unknown" }))
      }
      break
    default:
      try {
        let pathname = url.pathname === "/" ? "/demo.html" : url.pathname
        res.end(fs.readFileSync(__dirname + pathname))
      } catch (e) {
        res.writeHead(404, "Not Found")
        res.end(`<title>Hello demo</title><h1>404 Not Found</h1>`)
      }
  }
}).listen(80)
console.log(serverAddr)