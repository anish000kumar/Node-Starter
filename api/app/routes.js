import rootController from "@controller/rootController";

function registerRoutes(api, context){
    
    api.get('/', rootController(context).index);

}