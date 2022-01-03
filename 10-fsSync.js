 const{readFileSync,writeFileSync}=require('fs')
//to read from file1 and file2
const first=readFileSync('./content/file1.txt','utf8')
const second=readFileSync('./content/file2.txt','utf8')

//console.log(first,second)


//to write in a file...if file doesn't exist..then it's creaded ittself

writeFileSync(
    './content/newfile.txt',
    `here is new file creaded!!`
)

// //if we want to append to existing file..then
writeFileSync(
    './content/file3.txt',
    `This statement is appended in file 3!! `,
    //we use flag
    {flag:'a'}
)

//it's slow cause things happen line by line