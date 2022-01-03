const{readFile,writeFile}=require('fs')

readFile('./content/file1.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    const first=result
    readFile('./content/file2.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return;
        }
        const second=result

        writeFile(
            './content/fileAsync.txt',
            `here is result : ${first} ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
            }
            )
    
    
    })
    })