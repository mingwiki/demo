const http = require("http")
const fs = require("fs")
const { URL } = require("url")
const serverAddr = "http://127.0.0.1"
const Mock = require("mockjs")

http.createServer((req, res) => {
  const url = new URL(serverAddr + req.url)
  switch (url.pathname) {
    case "/getInfo":
      let result = Mock.mock({
        "姓名": "@cname",
        "居住地": "@city",
        "邮件": "@email",
        "生日": '@date("yyyy-MM-dd")'
      })
      res.setHeader("Content-Type", "application/json");
      // res.setHeader("Charset", "UTF-8")
      res.end(JSON.stringify(result))
      break
    default:
      try {
        let pathname = url.pathname === "/" ? "/demo.html" : url.pathname
        res.end(fs.readFileSync(__dirname + pathname))
      } catch (e) {
        console.log(e)
        res.statusCode = 404
        res.end()
      }
  }
}).listen(5000)
console.log(serverAddr + ":5000")