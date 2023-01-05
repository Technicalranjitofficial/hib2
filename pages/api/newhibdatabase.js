import connectDb from "../../middleware/Mongoose";
import user from "../../models/UserModel"

async function handler(req,res){
    if(req.method === "GET"){
        try {
            const data =await user.find({authkey:"Ranjit"});
            res.json(data);
        } catch (error) {
            console.log(error);
            res.json({message:"Internal Error"});
        }
    }
}

module.exports = connectDb(handler);