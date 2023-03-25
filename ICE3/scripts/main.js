(function (){
    function DisplayButton(){
        let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function(){
            location.href = '/projects'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        //console.log(mainContent)

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3")

        let firstString = "This is a "
        let secondString = `${ firstString } main paragraph that we added through javascript`

        mainParagraph.textContent = secondString





        mainContent.appendChild(mainParagraph)


        documentBody.innerHTML = 
        `<div class = "container">
            <h1 class="display-1"> Hello WEBD6201</h1>
            <p class="mt-5 lead"> and...what's the vibe>?</p>
        </div>`

        //document.getElementById("RandomButton").remove()    


    }
    function Start(){
        console.log("App Started!")
        
        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayButton();
                break;
        
            case "Projects - WEBD6201 Demo":
                DisplayButton();
                break;
        }
    }
    window.addEventListener("load", Start)
})()