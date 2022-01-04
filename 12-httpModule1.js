const {readFile}=require('fs');
const { reject } = require('lodash');
const path = require('path');
const { resolve } = require('path');

const getPath=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })

    })
}

getPath('./content/file1.txt')
.then((result)=>{
    console.log(result);
)}
.catch((err)=>{
    console.log(err);
})