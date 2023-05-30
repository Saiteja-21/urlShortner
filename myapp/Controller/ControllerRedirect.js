import urlModel from "../model/Url_model.js";

export const redirectData = async (req, res) => {
    try {
        const data = await req.params.alias;
        const result = await urlModel.findOne({ alias: data })
        res.redirect(result.url);
       

    } catch (error) {
        res.send(error);
    }
}