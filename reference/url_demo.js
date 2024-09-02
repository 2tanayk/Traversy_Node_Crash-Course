const url = require('url')
const myUrl = new URL('https://github.com:8000/2tanayk?tab=repositories')
    //Serialized URL
console.log(myUrl.href)
    //domain name(root domain)
console.log(myUrl.host)
    //domain name(without port)
console.log(myUrl.hostname)
    //path name
console.log(myUrl.pathname)
    //Serialized Query
console.log(myUrl.search)
    //params object
console.log(myUrl.searchParams)
    //add params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
    //loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`))