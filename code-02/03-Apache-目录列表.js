var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = '/Users/zhaojunjie/Documents/GitHub/study_nodejs/code-02/www'

server.on('request', function (req, res) {
  var url = req.url
    // 引入模板template.html，读取模板内容
  fs.readFile('./template.html', function (err, data) {
    if (err) {
      return res.end('404 Not Found.')
    }
    // 1. 读取wwwDir路径下的文件名和目录名fs.readdir,返回files
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end('Can not find www dir.')
      }
    // 2. 将得到的文件名和目录名替换到 template.html 中
      // 2.1 生成需要替换的内容
      var content = ''
      files.forEach(function (item) {
        // 在 EcmaScript 6 的 `` 字符串中，可以使用 ${} 来引用变量
        content += `
          <tr>
            <td data-value="apple/"><a class="icon dir" href="#">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
          </tr>
        `
    })
      // 2.3 替换
      data = data.toString()
      data = data.replace('^_^', content)

      // 3. 发送解析替换过后的响应数据
      res.end(data)
    })
  })
})
server.listen(3000, function () {
  console.log('running...')
})
