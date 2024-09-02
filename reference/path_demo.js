const path = require('path')
console.log(__filename)
    //filename
console.log(path.basename(__filename))
    //dir. name
console.log(path.dirname(__filename))
    //file extension name
console.log(path.extname(__filename))

//a path object
console.log(path.parse(__filename))
    //concatenation
console.log(path.join(__dirname, 'test', 'hello.html'))