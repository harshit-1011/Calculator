const express= require('express')
const app = express();
const port = process.env.PORT ||3500 

const path = require("path")
const hbs = require('hbs')

const staticpath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.use(express.urlencoded({extended:false}))
//middleware
app.use(express.static(staticpath))
hbs.registerPartials(partialsPath)
app.set('views',templatePath)
app.set("view engine",'hbs')

app.get('/',(req,res)=>{
      res.render("index")
})

app.listen(port,()=>{
      console.log("Listening on port : ",port)
})