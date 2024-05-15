import Joi from "joi";

const URL_PATTERN: RegExp = /^(?:(?:http|https|ftp):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/;
const urlSchema = Joi.object({
    url: Joi.string().regex(URL_PATTERN).required()
})

export default urlSchema
