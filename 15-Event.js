const EventEmitter =require('events');

const customEmitter =new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log('data recieved',`${name} ${id}`)
})
//note emit should be after on.. else it won't work
customEmitter.on('response',()=>{
    console.log('data recieved 2')
})

//customEmitter.emit('response')

// we can pass arguments in emit

customEmitter.emit('response','john',34)
