var fs = require('fs')
fs.readdir('/Users/zhaojunjie/Documents/GitHub/study_nodejs/code-02/www', function (err, files) {
  if (err) {
    return console.log('目录不存在')
  }
  console.log(files)
})