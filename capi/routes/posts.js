 const express = require('express');
 const router = express.Router();
 const post2 = require ('../models/post');


//GET BACK ALL THE POSTS
  router.get('/', async (req,res)=> {
    try{
         const posts = await post.find();
         res.json(posts);
    }catch(err){ 
        res.json({message: err });

    }
    
 }); 
//SUBMITS A POST
 router.post('/', async (req,res) => {
    const Post2 = new post2({
       username : req.body.username,
       password : req.body.password,
       phoneno : req.body.phoneno,
       mail : req.body.mail,

    });  
    

       console.log(Post2)
       await Post2.save().then((result) =>{
          res.send(result)
         }).catch((err) =>{
            res.send(err)
         });
    
    
}); 

//SPECFIC POST 
router.get('/:postId',(req,res) => {
 console.log(req.params.postId);
});
 
module.exports= router;