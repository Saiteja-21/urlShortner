import urlModel from '../model/Url_model.js'


export const postData=async (req,res)=>{
    console.log('inpostdata')
    const newdata= urlModel(req.body)
    try{
        const saved=await newdata.save();
        res.status(200).json(saved)

    }catch(error){
        res.send(error);

    }
    
}

export const getData=async(req,res)=>{
    try{
        const data=await urlModel.find();
        res.status(200).json(data)

    }catch(error){


    }
}