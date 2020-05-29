const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})





// const t1 = new Task({
//     description: 'first',
//     completed: true
// }) 

// t1.save().then((a)=>{
//     console.log(a)
// }).catch(e=>{
//     console.log(e)
// })
// const me = new User({
//     name: ' Yogi  ',
//     email: 'yo@gmail.com',
//     password: 'pAssword'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((e)=>{
//     console.log('error  ',e)
// })