const mongoose=require("mongoose");
const chat = require("./models/chat");
main()
.then(()=>{
    console.log("connection suuccessful")
})
.catch((err)=>{
    console.log(err)
}
);
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats=[
    {
    from:"sarthak",
    to:"pushpa",
    msg:"send me our pic",
    created_at:new Date(),
},
{
    from:"samarth",
    to:"sarthak",
    msg:"Recharge kar",
    created_at:new Date(),
},
{
    from:"mummy",
    to:"papa",
    msg:"Paise patva",
    created_at:new Date(),
},
];
chat.insertMany(allchats);