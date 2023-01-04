let burger = document.querySelector(".burger-div")
let navbar = document.querySelector(".nav-bar")
let body = document.querySelector("body")

burger.addEventListener("click", showMenu)

function showMenu(){
    navbar.classList.toggle("active")
    body.classList.toggle("noscroll")
}

let arrow = document.querySelector(".arrow")
let list = document.querySelector(".pseudo-list")

arrow.addEventListener("click", showList)

function showList(){
    list.classList.toggle("show-list")
    arrow.classList.toggle("arrow-down")
}

let certificatesBtn = document.querySelector(".certificates")


certificatesBtn.addEventListener("click", goToCert)

function goToCert(){
    window.location.href = "certificates.html"
}

const home = document.querySelector(".home")

home.addEventListener("click", goToHome)

function goToHome(){
    window.location.href = "index.html"
}

const nft = document.querySelector(".nft")

nft.addEventListener("click", function(){
    window.location.href = "nft.html"
})

const illustrations = document.querySelector(".illustration")

illustrations.addEventListener("click", function(){
    window.location.href = "ilustrations.html"
})

const aboutme = document.querySelector(".aboutme")


aboutme.addEventListener("click", function(){
    window.location.href = "aboutme.html"
})

const about = document.querySelector(".aboutme1")

about.addEventListener("click", function(){
    window.location.href = "aboutme.html"
})

const contact = document.querySelector(".contact1")

contact.addEventListener("click", function(){
    window.location.href = "info.html"
})

const contact1 = document.querySelector(".contact2")

contact1.addEventListener("click", function(){
    window.location.href = "info.html"
})

const facebook = document.querySelector(".facebook") 

facebook.addEventListener("click", function(){
    window.open("https://www.facebook.com/ana.gurgenidze.507")
})

const bechance = document.querySelector(".bechance") 

bechance.addEventListener("click", function(){
    window.open("https://www.behance.net/anaana37")
})

function gvinoEnjoyersBtn(){
    document.querySelector(".content").style.display = "none"
    document.querySelector(".gvino-enjoyers").style.display = "block"
}

function closeGvino(){
    document.querySelector(".content").style.display = "grid"
    document.querySelector(".gvino-enjoyers").style.display = "none"
}

function bleedingBtn(){
    document.querySelector(".content").style.display = "none"
    document.querySelector(".bleeding").style.display = "block"
   scroll(0, 0)
}

function closebleeding(){
    document.querySelector(".content").style.display = "grid"
    document.querySelector(".bleeding").style.display = "none"
}

function cosmicBtn(){
    document.querySelector(".content").style.display = "none"
    document.querySelector(".cosmic").style.display = "block"
    scroll(0, 0)
}

function closeCosmic(){
    document.querySelector(".content").style.display = "grid"
    document.querySelector(".cosmic").style.display = "none"
}

function psychBtn(){
    document.querySelector(".content").style.display = "none"
    document.querySelector(".psych").style.display = "block"
    scroll(0, 0)
}

function closePsych(){
    document.querySelector(".content").style.display = "grid"
    document.querySelector(".psych").style.display = "none"
}

function aquaBtn(){
    document.querySelector(".content").style.display = "none"
    document.querySelector(".aqua").style.display = "block"
    scroll(0, 0)
}

function closeAqua(){
    document.querySelector(".content").style.display = "grid"
    document.querySelector(".aqua").style.display = "none"
}

function studioBtn(){
    document.querySelector(".content").style.display = "none"
    document.querySelector(".studio").style.display = "block"
    scroll(0, 0)
}

function closeStudio(){
    document.querySelector(".content").style.display = "grid"
    document.querySelector(".studio").style.display = "none"
}

function higiBtn(){
    document.querySelector(".content").style.display = "none"
    document.querySelector(".higi").style.display = "block"
    scroll(0, 0)
}

function closeHigi(){
    document.querySelector(".content").style.display = "grid"
    document.querySelector(".higi").style.display = "none"
}

function brandBtn(){
    window.location.href = "brand.html"
}

function portfolio1Btn() {
    window.location.href = "portfolio.html"
}