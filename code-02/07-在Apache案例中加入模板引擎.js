var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

var wwwDir = '/Users/zhaojunjie/Documents/GitHub/study_nodejs/code-02/www'

server.on('request', function (req, res) {
  //readFile（）读取template-apache.html数据，data为二进制数据
  fs.readFile('./template-apache.html', function (err, data) {
    if (err) {
      return res.end('404 Not Found.')
    }
    //console.log(data.toString())
    //fs.readdir()读取wwwDir目录列表中的文件名和目录名，files为目录名构成的数组
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end('Can not find www dir.')
      }
      // 打印 files => [ '.DS_Store', 'a.txt', 'test1', 'test2' ]
      // template.renser(字符串数据{{index}}，替换对象{index：value}),返回字符串
      var htmlStr = template.render(data.toString(), {
        title: '模板引擎',
        files: files
      })
      console.log(htmlStr)
      // 3. 发送解析替换过后的响应数据
      res.end(htmlStr)
    })
  })
})
server.listen(3000, function () {
  console.log('running...')
})
