const mongoose=require("mongoose");
main()
.then(()=>{
    console.log("Connection successful");
})
.catch((err)=>console.log(err));
async function main() {


    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
    
}
const bookschema=new mongoose.Schema({
    title:
    {
        type:String,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
        default:0,
    },
});
const Book=mongoose.model("Book",bookschema);
let book1=new Book({
    title:"Rich dad and poor dad",
    author:"unknown",
    price:"499"
});
book1.save().then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
});