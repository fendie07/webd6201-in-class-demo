(function (){

    function DisplayNavBar(){
        let XHR = new XMLHttpRequest()
        
        //add event listener for readystatechange

        XHR.addEventListener("readystatechange", () => {
            if (XHR.readyState === 4 && XHR.status === 200) {
                $('#navigationBar').html(XHR.responseText)
            }
        })

        //connect and get data
        XHR.open("GET", "./static/header.html")

        //send data to server and await request
        XHR.send()

    }
    function DisplayHome(){
        /*let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function(){
            location.href = "./projects."
        })

        

        /*document.querySelectorAll("#RandomButton").forEach(element => {
            element.addEventListener("click", () =>{
                location.href = "./contact.html"
            })
        })*/

        $("#RandomButton").on("click",function(){
            location.href="./contact.html"
        })


        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        //console.log(mainContent)

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3")

        let secondstring = "This is a main paragraph that we added through javascript and this is also on github pages"

        mainContent.appendChild(mainParagraph)
        $("main").addClass("container").append(`<p id="MainParagraph" class="mt-3 container">${ secondstring }</p> `)

        //Ajax
        //instantiate the XHR object
        

        /*documentBody.innerHTML = 
        `<div class = "container">
            <h1 class="display-1"> Hello WEBD6201</h1>
            <p class="mt-5 lead"> and...what's the vibe>?</p>
        </div>`

        let essam = new core.Contact("Essam Fendish", "3579294892", "ShlimeGang@yahoo.uk")
        console.log(essam.toString())*/


        //document.getElementById("RandomButton").remove()    


    }
    function DisplayProjects(){
        console.log("Projects Page")
        
    }
    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress)
        if(contact.serialize()){
            let key = contact.Name.substring(0,1) + Date.now()
            localStorage.setItem(key, contact.serialize())
        }

    }

    function TestPhoneNumber(){
        let messageArea = $('#messageArea').hide()

        let phoneNumberPatter = /^\d{10}$/g

        
        $('#contactNumber').on("blur", function(){
            let contactNumberText = $(this).val()

            if(!phoneNumberPatter.test(contactNumberText)){
                $(this).trigger("focus").trigger("select")

                messageArea.addClass("alert alert-danger")

                messageArea.text("Please Enter a valid phone number")

                messageArea.show()

            }
            else{
                messageArea.removeAttr("class")
                messageArea.hide()
            }
        })
    }
    function TestFullName(){
        let messageArea = $('#messageArea').hide()

        let fullNamePattern = /([A-Z][a-z]{1,25})((\s|,|-)([A-Z][a-z]{1,25}))*(\s|-|,)*([A-Z][a-z]{1,25})*$/g


        $('#fullName').on("blur", function(){
            let fullNameText = $(this).val()

            if(!fullNamePattern.test(fullNameText)){
                $(this).trigger("focus").trigger("select")

                messageArea.addClass("alert alert-danger")

                messageArea.text("Please Enter a valid full name which means a capitalized first name and last name")

                messageArea.show()

            }
            else{
                messageArea.removeAttr("class")
                messageArea.hide()
            }
        })
    }
    function TestEmail(){
        let messageArea = $('#messageArea').hide()

        let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-][^\d]{2,10}/g


        $('#emailAddress').on("blur", function(){
            let emailAddressText = $(this).val()

            if(!emailAddressPattern.test(emailAddressText)){
                $(this).trigger("focus").trigger("select")

                messageArea.addClass("alert alert-danger").text("Please Enter a valid email address").show()

            }
            else{
                messageArea.removeAttr("class").hide()
               
            }
        })
    }

    function ValidateInput(inputfieldID, regularExpression, exception){
        let messageArea = $('#messageArea').hide()

        $('#' + inputfieldID).on("blur", function(){
            let inputText = $(this).val()

            if(!regularExpression.test(inputText)){
                $(this).trigger("focus").trigger("select")

                messageArea.addClass("alert alert-danger").text(exception).show()

            }
            else{
                messageArea.removeAttr("class").hide()
               
            }
        })
        

    }
    function ContactFormValidate(){
        let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-][^\d]{2,10}/g
        let fullNamePattern = /^([A-Z][a-z]{1,25})((\s|,|-)([A-Z][a-z]{1,25}))*(\s|-|,)*([A-Z][a-z]{1,25})*$/g

        ValidateInput("fullName", fullNamePattern, "Please Enter a valid full name which means a capitalized first name and last name")
        ValidateInput("emailAddress", emailAddressPattern, "Please Enter a valid email address")


    }
    function DisplayContacts(){
        console.log("Contacts Us Page")
        
        ContactFormValidate()
        let submitButton = document.getElementById("submitButton")
        let subscribeCheckbox = document.getElementById("subscribeCheckbox")

        /*localStorage.setItem("random variable", "random variable for testing and demo") 
        console.log(localStorage.getItem("random variable"))
        localStorage.removeItem("random variable")*/

        submitButton.addEventListener("click", function(){
            //event.preventDefault()
            if (subscribeCheckbox.checked){
                AddContact(fullName.value, contactNumber.value, emailAddress.value)

                

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
                let contact = new core.Contact()
                contact.deserialize(contactData)

                data += `<tr>
                <th scope= "row" class= "text-center">${ index }</th>
                <td class= "text-center">${ contact.Name }</td>
                <td class= "text-center">${ contact.ContactNumber}</td>
                <td class= "text-center">${ contact.EmailAddress}</td>
                <td class= "text-center"><td class="text-center"><button value="${ key }" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i>&nbsp; Edit</button></td></td>
                <td class= "text-center"><td class="text-center" id = "deleteButton"><button value="${ key }" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i>&nbsp; Delete</button></td></td>
                </tr>
                `
                
                

                index++
            }

            contactlist.innerHTML = data

            $("#addButton").on("click", () => {
                location.href = "/edit#Add"
            })

            $("button.delete").on("click", function(){

                if(confirm("Are you sure you want to delete this?"))
                localStorage.removeItem($(this).val())

                location.href= "/contactlist"
            })

            $("button.edit").on("click", function(){
                location.href = '/edit#' + $(this).val()
            })
        }
    }
    function DisplayEditPage(){
        ContactFormValidate()

        let page = location.hash.substring(1)
        
        
        switch(page){
            case "Add":
                {
                    $("#welcome").text("WEBD6201 Add Contact")

                    $("#editButton").html(`<i class ="fas fa-plus-circle fa-lg"></i> Add`)

                    $("#editButton").on("click", (event) => {
                        event.preventDefault()
                        AddContact(fullName.value, contactNumber.value, emailAddress.value)
                        location.href="contactlist.html"
                    })
                    
                }
                break
            default:
                {
                    let contact = new core.Contact()
                    contact.deserialize(localStorage.getItem(page))
    
                    $("#fullName").val(contact.Name)
                    $("#contactNumber").val(contact.ContactNumber)
                    $("#emailAddress").val(contact.EmailAddress)

                    $("#editButton").on("click", (event) => {
                        event.preventDefault()


                        contact.Name = $("#fullName").val()
                        contact.ContactNumber = $("#contactNumber").val()
                        contact.EmailAddress = $("#emailAddress").val()


                        localStorage.setItem(page, contact.serialize())

                        location.href = '/contactlist'
                    })
    
                }
            
            break
        }

    }
    function DisplayRegisterPage(){
        console.log("Register Page")
    }
    function DisplayLoginPage(){
        console.log("Login Page")
    }
    function DisplayReferences(){
        console.log("References Page")
    }
    function Start(){
        console.log("App Started!")
        
        
        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayHome();
                DisplayNavBar();
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
            case "Edit - WEBD6201 Demo":
                DisplayEditPage();
                break;
            case "Login - WEBD6201 Demo":
                DisplayLoginPage();
                break;
            case "Register - WEBD6201 Demo":
                DisplayRegisterPage();
                break;
        }
        $(window).scrollTop(0);
    }
    window.addEventListener("load", Start)
})()