class Contact{
    constructor(name, contactNumber, emailAddress){
        this.Name = name;
        this.ContactNumber = contactNumber
        this.EmailAddress = emailAddress
    }

    get Name() {

        return this.m_name
    }

    set Name(name){
        this.m_name = name
    }

    get ContactNumber(){

        return this.m_contactNumber
    }

    set ContactNumber(contactNumber){
        this.m_contactNumber = contactNumber

    }

    get EmailAddress(){

        return this.m_emailAddress
    }
    set EmailAddress(emailAddress){
        this.m_emailAddress = emailAddress
    }

    serialize(){
        if(this.name != "" && this.ContactNumber !="" && this.EmailAddress != "")
            return `${this.Name}, ${this.ContactNumber}, ${this.EmailAddress}`
        console.error("One or more properties or fields of the Contact Object are missing or invalid")
        return null
    }

    deserialize(data){
        let propertyArray = data.split(",")
        this.Name = propertyArray[0]
        this.ContactNumber = propertyArray[1]
        this.EmailAddress = propertyArray[2]
    }

    toString(){
        return `Full Name is ${ this.Name } \n Contact Information is ${this.ContactNumber} \n Email Address is ${this.EmailAddress} `
    }
}