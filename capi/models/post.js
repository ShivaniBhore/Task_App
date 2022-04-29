const mongoose =require ('mongoose');

 const post2schema = mongoose.Schema({
     username:{
         type:String,
         required:true
     },
     password:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
 });
 module.exports = mongoose.model('post2',post2schema);
 