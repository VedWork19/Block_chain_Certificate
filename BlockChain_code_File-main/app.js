const express=require("express");
const app=express();
const path=require("path");
const cors=require("cors")
const fileUpload=require("express-fileupload");
const PORT=process.env.PORT||5000;
const morgan = require('morgan');
app.use(morgan('dev'));
require("./db/sql");
require('events').EventEmitter.prototype._maxListeners = 150;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload())

app.use("/",require("./routers/index"))
app.get('/x',(req,res)=>{
	res.send('hello');
})

app.listen(PORT,()=>{
    console.log("Connected",PORT);
})