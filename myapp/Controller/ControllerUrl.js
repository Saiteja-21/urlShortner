import urlModel from '../model/Url_model.js'


export const postData=async (req,res)=>{
    console.log('inpostdata')
    const newdata= urlModel(req.body)

    try{
        const search=urlModel.findOne({url:req.body.url})
        if(search){
            res.status(200)

        }else{
            const saved=await newdata.save();
            res.status(200).json(saved)
    

        }
       
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