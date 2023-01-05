import connectDb from "../../middleware/Mongoose"
import user from "../../models/UserModel";


function handler(req, res) {
    if(req.method === "POST"){
        try {
            const {email,password} = req.body;
            user.create({email:email,password:password,authkey:"Ranjit"}).then((data)=>{
                console.log(data)
                res.json({message:"created Sucessfully!! ",sucess:true});
            }).catch((error)=>{
                res.json({message:"Something went wrong!! ",sucess:false})
                console.log(error)
            })
        } catch (error) {
            res.json({message:"Internal Error!! ",sucess:false})
            console.log(error)
            
        }
    }
  }

  module.exports= connectDb(handler);
  