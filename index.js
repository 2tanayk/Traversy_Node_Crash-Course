// console.log("Yo")
// const Person = require('./Person')
// const person1 = new Person("Tanay", 19)
// person1.greeting()
// console.log(person1)

// const Logger = require('./logger')
// const logger = new Logger()
// logger.on('message', (data) => console.log(`Called Listener: ${data}`, data))
// logger.log('Hello')

//web server using Node.js
const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    //Not the most efficient way
    console.log(req.url)
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        })
    }
    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        })
    }
    if (req.url === '/api/users') {
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'John Doe', age: 30 }
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    }

    // let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    // let extName = path.extname(filePath)
    //     //initial content type
    // let contentType = 'text/html'
    //     //check extension and set content type
    // switch (extName) {
    //     case ".js":
    //         contentType = "text/javascript";
    //         break;
    //     case ".css":
    //         contentType = "text/css";
    //         break;
    //     case ".json":
    //         contentType = "application/json";
    //         break;
    //     case ".png":
    //         contentType = "image/png";
    //         break;
    //     case ".jpg":
    //         contentType = "image/jpg";
    //         break;
    // }
    // //read file
    // console.log(filePath)
    // fs.readFile(filePath, (err, content) => {
    //     if (err) {
    //         if (err.code == "ENOENT") {
    //             // Page not found
    //             fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
    //                 res.writeHead(404, { "Content-Type": "text/html" });
    //                 res.end(content, "utf8");
    //             });
    //         } else {
    //             //  Some server error
    //             res.writeHead(500);
    //             res.end(`Server Error: ${err.code}`);
    //         }
    //     } else {
    //         // Success
    //         res.writeHead(200, { "Content-Type": contentType });
    //         res.end(content, "utf8");
    //     }
    // });
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))