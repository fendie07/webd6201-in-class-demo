(function (){
    function DisplayHome(){
        let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function(){
            location.href = "./projects."
        })

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        //console.log(mainContent)

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3")

        

        mainParagraph.textContent = "This is our text content"





        mainContent.appendChild(mainParagraph)


        /*documentBody.innerHTML = 
        `<div class = "container">
            <h1 class="display-1"> Hello WEBD6201</h1>
            <p class="mt-5 lead"> and...what's the vibe>?</p>
        </div>`

        let essam = new Contact("Essam Fendish", "3579294892", "ShlimeGang@yahoo.uk")
        console.log(essam.toString())*/


        //document.getElementById("RandomButton").remove()    


    }
    function DisplayProjects(){
        console.log("Projects Page")
    }
    function DisplayContacts(){
        console.log("Contacts Us Page")
        let submitButton = document.getElementById("submitButton")
        let subscribeCheckbox = document.getElementById("subscribeCheckbox")

        /*localStorage.setItem("random variable", "random variable for testing and demo") 
        console.log(localStorage.getItem("random variable"))
        localStorage.removeItem("random variable")*/

        submitButton.addEventListener("click", function(){
            //event.preventDefault()
            if (subscribeCheckbox.checked){
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value)
                if(contact.serialize()){
                    let key = contact.Name.substring(0,1) + Date.now()
                    localStorage.setItem(key, contact.serialize())
                }
            }
        })
    }
    function DisplayContactList(){
        if (localStorage.length > 0){
            let contactlist = document.getElementById("contactlist")

            let data = ""
            let keys = Object.keys(localStorage)

            let index = 1

            for (const key of keys) {
                let contactData = localStorage.getItem(key)
                let contact = new Contact()
                contact.deserialize(contactData)

                data += `<tr>
                <th scope= "row" class= "text-center">${ index }</th>
                <td class= "text-center">${ contact.Name }</td>
                <td class= "text-center">${ contact.ContactNumber}</td>
                <td class= "text-center">${ contact.EmailAddress}</td>
                <td class= "text-center"></td>
                <td class= "text-center"></td>
                </tr>
                `

                index++
            }

            contactlist.innerHTML = data
        }
    }
    function DisplayReferences(){
        console.log("References Page")
    }
    function Start(){
        console.log("App Started!")
        
        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayHome();
                break;
            case "Projects - WEBD6201 Demo":
                DisplayProjects();
                break;
            case "Contact Us - WEBD6201 Demo":
                DisplayContacts();
                break;
            case "Contact List - WEBD6201 Demo":
                DisplayContactList();
                break;
            case "References - WEBD6201 Demo":
                DisplayReferences();
                break;
        }
    }
    window.addEventListener("load", Start)
})()