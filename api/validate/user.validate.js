import Joi from 'joi';
export const validateUser = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
            .min(8)
            .max(30)

    })
 
    const {error} = schema.validate(req.body);
    
    
    if (error){
     
        res.json({
            code: "error",
            message: error.details[0].message
        })
        return;
    }

    next();
}


