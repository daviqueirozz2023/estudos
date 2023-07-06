const body = document.querySelector("body")
const sidebar = body.querySelector(".sidebar")
const toggle = body.querySelector(".toggle")
const searchBtn = body.querySelector(".search-box")
const modeSwitch = body.querySelector(".toggle-switch")
const modeText = body.querySelector(".mode-text")
const homeSwitch = body.querySelector(".home")
const TrabalhosSwitch = body.querySelector(".Trabalhos")

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close")
})

searchBtn.addEventListener("click", () =>{
    sidebar.classList.remove("close")
})


modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark")

    if(body.classList.contains("dark")){
        modeText.innerText = "Light Mode"
    }else{
        modeText.innerText = "Dark Mode"
    }
})

function clickHome(){
    var Home = window.document.querySelector('.textNone.Home')
    var clickTrabalhos = window.document.querySelector('div.Trabalhos')
    
    Home.style.display = "block"
    clickTrabalhos.style.display="none"

}
/*
function clickHome() {
    var clickHome = window.document.querySelector('div.Home')
    clickHome.style.display="block"
    
    if(clickHome.classList.text("text")){
        clickHome.innerText = "textNone"
        
    }else{
        
        clickHome.innerText = "text"
        //clickHome.style.display="block"
    }
    
}
*/
function clickTrabalhos() {
    var Home = window.document.querySelector('.textNone.Home')
    var clickTrabalhos = window.document.querySelector('div.Trabalhos')
    
    Home.style.display = "none"
    clickTrabalhos.style.display="block"
    
}