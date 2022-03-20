const http = require('http')
const url = require('url')
http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true)
  if (urlObj.pathname === '/bridge') {
    http.get(urlObj.query.url, req => {
      let text = ''
      req.on('data', data => text += data)
      req.on('end', () => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.end(text)
      })
    })
  } else {
    res.writeHead(404, 'Not Found')
    res.end('not found')
  }
}).listen(8888)

//当前代码在 http://js.jirengu.com 下运行
fetch('http://localhost:8888/bridge?url=' + encodeURIComponent('http://baidu.com'))
  .then(res => res.text())
  .then(data => console.log(data))