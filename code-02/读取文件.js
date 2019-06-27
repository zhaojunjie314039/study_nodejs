
// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')
var wwwDir = '/Users/zhaojunjie/Documents/GitHub/study_nodejs/code-02/www'
fs.readFile(wwwDir+'/index.html', function (error, data) {

  if (error) {
    console.log('读取文件失败了')
  } else {
    console.log(data.toString())
  }
})
