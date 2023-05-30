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

function clickHome() {
    var clickHome = window.document.querySelector('div.Home')
    
    clickHome.style.display="block"
    if(clickHome.style.display="block"){
        clickHome.style.display="none"
    }else{
        clickHome.style.display="block"
    }
    
}

function clickTrabalhos() {
    var clickTrabalhos = window.document.querySelector('div.Trabalhos')
    
    
    clickTrabalhos.style.display="block"
    
}