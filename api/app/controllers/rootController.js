import { version } from "@api/package.json";

const rootController =(context) =>({
    
    index(req, res){
        res.json({
            version,
            success: true
        })
    }

})

export default rootController;