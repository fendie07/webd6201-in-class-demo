(function(core){

class User{
    //Constructor
    constructor(displayName = "", emailAddress = "" , username = "", password = ""){
        this.DisplayName = displayName
        this.EmailAddress = emailAddress
        this.Username = username
        this.Password = password
    }

    toString(){
        return `Display Name: ${ this.DisplayName} \nEmail Address:${ this.EmailAddress}\n Username: ${ this.Username} `
    }

    toJSON(){
        return{
            "Display Name": this.DisplayName,
            "Display Name": this.EmailAddress,
            "Display Name": this.Username,
        }
    }
    fromJSON(data){
        this.DisplayName = data.displayName
        this.EmailAddress = data.EmailAddress
        this.Username = data.Username
        this.Password = data.Password

    }
    serialize(){
        if(this.DisplayName != "" && this.EmailAddress !="" && this.Username != "")
            return `${this.DisplayName}, ${this.EmailAddress}, ${this.Username}`
        console.error("One or more properties or fields of the Contact Object are missing or invalid")
        return null
    }

    deserialize(data){
        let propertyArray = data.split(",")
        this.DisplayName = propertyArray[0]
        this.EmailAddress = propertyArray[1]
        this.Username = propertyArray[2]
    }
}

core.User = User
})(core || (core={}))