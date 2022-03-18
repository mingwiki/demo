const http = require('http')
// const url = require('url')
const { URL, URLSearchParams } = require("url")
http.createServer((req, res) => {
  // let urlObj = url.parse(req.url, true)
  console.log(req.url)
  let url = new URL(req.url, 'http://localhost')
  let params = new URLSearchParams(url.search)
  console.log(params)
  // console.log(url)
  // if (urlObj.pathname === '/getWeather') {
  if (url.pathname === '/getWeather') {
    let data = { city: 'hangzhou', weather: 'sunny' }
    // res.end(`${urlObj.query.callback}(${JSON.stringify(data)})`)
    res.end(`${params.get("callback")}(${JSON.stringify(data)})`)
  } else {
    res.writeHead(404, 'Not Found')
    res.end('not found')
  }
}).listen(8888)