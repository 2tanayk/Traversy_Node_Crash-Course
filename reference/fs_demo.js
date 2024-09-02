const path = require('path')
const fs = require('fs')
    //create folder
    // fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    //         if (err) throw err
    //         console.log('Folder created')
    //     })

//create file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "hello world", function(err) {
//     if (err) throw err
//     console.log('File created & written')
//         //append file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "Hello", function(err) {
//         if (err) throw err
//         console.log('File created & written')
//     })
// })

//read file
//append file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
//     if (err) throw err
//     console.log(data)
// })

//rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err) {
    if (err) throw err
    console.log('File renamed')
})