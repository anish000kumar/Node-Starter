import log from "./log";

function mapErrors(errorObj){
   return {
       error: true,
       message: errorObj.message,
       code: 'VALIDATION01'
   }
}

function wrapTryCatch(fn){
    return function(req, res, ...args){
        try{
            let result =  fn.call(this, req, res, ...args);
            Promise.resolve(result)
            .then()
            .catch(err => {
                log.error(err);
                res.status(500).json(mapErrors(err));
            })
        }
        catch(err){
            log.error(err);
            res.status(500).json(mapErrors(err));
        }
    }
}
export default function trycatch(controllerObj){
    const newObj = {};

    Object.keys(controllerObj).forEach(key => {
        newObj[key] = wrapTryCatch(controllerObj[key])
    })

    return newObj;
}