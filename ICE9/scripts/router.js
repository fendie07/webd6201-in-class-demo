//let core
(function(core){
class Router{

    /**
     * 
     * @returns {string}
     */
    get ActiveLink(){
       return this.m_activeLink
    }


    /**
     * @param {string} link
     */
    set ActiveLink(link){
        this.m_activeLink = link
    }
    /**
     * Creates an instance of Router
     */
    constructor(){
        this.ActiveLink = ""
    }
    /**
     * @returns {void}
     * @param {string[]} route 
     */
    Add(route){

        this.m_routingTable.push(route)
    }
    /**
     * 
     * @param {string} routingTable 
     * @returns {voud}
     */
    AddRoutingTable(routingTable){
        this.m_routingTable = routingTable
    }
    /**
     * 
     * @param {string} route 
     * @returns {number}
     */
    Find(route){
        return this.m_routingTable.indexOf(route)
    }
    
    /**
     * 
     * @param {string} route 
     * @returns {boolean}
     */
    Remove(route){
        if(this.Find(route) > -1){
            this.m_routingTable.splice(this.Find(route),1)
            return true;
        }
        return false
    }
/**
 * 
 * @returns {string}
 */
    toString(){
        return this.m_routingTable.toString()
    }
}

core.Router = Router
})(core || (core = {}))

let router = new core.Router()

router.AddRoutingTable([
    "/",
    "/about",
    "/services",
    "/contact",
    "/contactlist",
    "/projects",
    "/register",
    "/login",
    "/edit"
    
])



let route = location.pathname

/**if(router.Find(route) > -1){
    router.ActiveLink = (route == "/") ? "home" : route.substring(1)

}else{
    router.ActiveLink = "404"
}*/
router.ActiveLink = (router.Find(route) > -1) ? (route =="/") ? "home" : route.substring(1) : "404"