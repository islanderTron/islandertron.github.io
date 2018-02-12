// Variables
const mediaQuery = window.matchMedia("(max-width:800px)");
let projClassName   = document.getElementsByClassName("project");
let expClassName    = document.getElementsByClassName("exp")

function toggle() {
    let classChildNode = this.childNodes[3];
    
    return (classChildNode.style.display == "none") ? classChildNode.style.display = "block" : classChildNode.style.display = "none" ;
}

function handlerWidthChange(mql) { 
    if(mql.matches){
        for(var i = 0; i < projClassName.length; i++) {
            // Projects
            projClassName[i].childNodes[3].style.display = "none";
            projClassName[i].addEventListener("click", toggle, false);
            
            // Expereinces
            expClassName[i].childNodes[3].style.display = "none";
            expClassName[i].addEventListener("click", toggle, false);
        }
    } else {
        for(var i = 0; i < projClassName.length; i++) {
            // Projects
            projClassName[i].childNodes[3].style.display = "block";

            // Experiences
            expClassName[i].childNodes[3].style.display = "block";
        }
    }
}

mediaQuery.addListener(handlerWidthChange);
handlerWidthChange(mediaQuery);