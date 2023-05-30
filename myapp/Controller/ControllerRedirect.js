import urlModel from "../model/Url_model.js";

export const redirectData = async (req, res) => {
    try {
        const {alias} =  req.params;
        const result = await urlModel.findOne({ alias })
        console.log(req.params)
        console.log(result)
        res.redirect(result.url);
       

    } catch (error) {
        res.send(error);
    }
}