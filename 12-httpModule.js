const http=require('http');

const server=http.createServer((request,resolve)=>{
    resolve.write('Welcome To our Home Page')
    resolve.end()

})

server.listen(5000)
//comment