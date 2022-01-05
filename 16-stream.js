const {creteReadSteam, createReadStream}=require('fs')

const steam=createReadStream('./content/bigfile.txt',{
    highWaterMark: 90000,
    encoding:'utf8'
})

steam.on('data',(result)=>{
    console.log(result)
})