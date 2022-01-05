const http=require('http');

// console.log('anc')

const server=http.createServer((request,resolve)=>{
    if(request.url==='/')
    {
        resolve.sendFile(__dirname+'/demo.html')
    }
    if(request.url==='/about')
    {
        resolve.end('Welcome to short history')
    }
   
    // console.log(request)
    // resolve.write('Welcome To our Home Page')
    // resolve.end()

})

server.listen(5000)
// //comment