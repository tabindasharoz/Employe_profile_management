const express= require ('express');
const app=express();
const cors= require('cors');
const port=8000;
const mongoose= require('mongoose');
// app.use(express.json());
const userSchema= mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
lastname:{
    type:String,
},
email:{
    type:String,
    require:true,
    unique:true
},
salary:{
    type:String,
}
});
mongoose.connect('mongodb://127.0.0.1:27017/hmaradb')
.then(()=>console.log("Connection done"))
.catch((err)=>console.log("Error found",err));
const Emp= mongoose.model('emp',userSchema);
app.use(express.json());
app.use(cors());

app.post('/',async(req,res)=>{
        const {firstname,lastname,email,salary}=req.body
console.log(firstname,lastname,email,req.body.firstname);
const result= await Emp.create({
    firstname:firstname,
    lastname:lastname,
    email:email,
    salary:salary
})
   return res.send({msg:"Success"})
})
app.get('/', async(req,res)=>{
    const result=await Emp.find()

    
    return res.send(result)
})

app.get('/:id', async(req,res)=>{
    const id=req.params.id;
    const result= await Emp.findById(id);
    return res.send(result);
})
app.patch('/:id', async(req,res)=>{
 try {
    const id= req.params.id;
    const result= await Emp.findByIdAndUpdate(id,req.body)
    return res.send({msg:"Success"});

 } catch (error) {
    return res.send({msg:"error"});
 }

})

app.delete('/:id', async(req,res)=>{
   try {
    const id= req.params.id;
    const result= await Emp.findByIdAndDelete(id)
    return res.send({msg:"Success"});
   } catch (error) {
    return res.send ({msg:error});
   }

})
app.listen(8000,()=>console.log('your server is running on ${8000}'));