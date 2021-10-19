

const {APP_PORT} = require ("./config/config.default")

const app = require('./app')

// app.use((ctx,next)=>{
//     ctx.body = 'hello koa-project22'
// })

app.listen(APP_PORT,()=>{
    console.log(`server is running on http://localhost:${APP_PORT}`)
})