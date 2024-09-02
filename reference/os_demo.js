const os = require('os')

//Platform
console.log(os.platform())
    //architecture
console.log(os.arch())
    //CPU core info
console.log(os.cpus())
    //memory
console.log(os.freemem())
console.log(os.totalmem())
    //home dir.
console.log(os.homedir())
    //uptime
console.log(os.uptime())