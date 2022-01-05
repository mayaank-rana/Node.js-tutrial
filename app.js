// const _ =require('lodash');

// const items=[1,[2,[3,[4]]]]

// const newItems =_.flatMapDeep(items);
// console.log(items)

// console.log("hello  aaaa world!! we are here")

const {writeFileSync}=require('fs')

for(let i=0;i<10000;i++){
    writeFileSync('./content/bigfile.txt',`hellow world ${i}\n`,{flag : 'a'})
}