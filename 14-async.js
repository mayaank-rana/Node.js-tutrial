//this line will do all work...which was done by next four commented lines
const {readFile ,writeFile}=require('fs').promises


// const {readFile ,writeFile}=require('fs');
// const util =require('util')
//first line will do same as the commented function below
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise =util.promisify(writeFile)

// const getText=(path)=>{
//         return new Promise((resolve,reject)=>{
//             readFile(path,'utf8',(err,data)=>{
//                 if(err){
//                     reject(err);
//                 }
//                 else{
//                     resolve(data);
//                 }
//             })
//         })
//     }

const start = async () => {
    try {
        const first =await readFile('./content/file1.txt','utf8')
        const second =await readFile('./content/file2.txt','utf8')
        await writeFile('./content/filemade.txt',`this is awasome ${first} ${second}`)
        console.log(first,second)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log('this block of code always works')
    }
}

start()

//  getPath('./content/file1.txt')
// .then((result)=>
//     console.log(result)
// )
// .catch((err)=>
//     console.log(err)
// )