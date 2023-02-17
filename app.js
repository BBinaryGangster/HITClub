"use strict"

// CODE FOR TOGGLES 

let all = ['c++', 'brainstorm', 'web_design', 'java', 'python', 'oop', 'blockchain', 'photoshop', 'nodejs', 'ai', 'reactjs', 'unity', 'graphic', 'java_web'] 
let happen = ['c++', 'brainstorm', 'web_design', 'java', 'python', 'blockchain', 'photoshop', 'unity', 'java_web']
let about = ['nodejs', 'ai', 'reactjs', 'graphic']
let end = ['oop']

let classElements = document.querySelectorAll(".schedule .class-item")

// all select btns  
let btn_all = document.querySelector(".select-all")
let btn_happen = document.querySelector(".select-happen")
let btn_about = document.querySelector(".select-about")
let btn_end = document.querySelector(".select-end")

btn_all.addEventListener("click", select_all)
btn_happen.addEventListener("click", select_happen)
btn_about.addEventListener("click", select_about)
btn_end.addEventListener("click", select_end)

function select_all(e) {
    for (let el of classElements) {
        el.style.display = "grid"
    }
}

function select_happen(e) {
    for (let el of classElements) {
        if (happen.includes(el.dataset.name)) {
            console.log("hi")
            el.style.display = "grid"
        } else {
            el.style.display = "none"
        }
    }
}

function select_about(e) {
    for (let el of classElements) {
        if (about.includes(el.dataset.name)) {
            console.log("hi")
            el.style.display = "grid"
        } else {
            el.style.display = "none"
        }
    }
}

function select_end(e) {
    for (let el of classElements) {
        if (end.includes(el.dataset.name)) {
            console.log("hi")
            el.style.display = "grid"
        } else {
            el.style.display = "none"
        }
    }
}

let clickEvent = new Event("click")
btn_all.dispatchEvent(clickEvent)

// CODE FOR SLIDESHOW  

let slideItems = document.querySelectorAll(".slideshow .item")

let currentIndex = 0 
let currentItem = slideItems[currentIndex]

function showNext() {
    currentItem.classList.remove("active")
    currentIndex++
    if (currentIndex >= slideItems.length) {
        currentIndex = 0 
    }



    currentItem = slideItems[currentIndex] 
    currentItem.classList.add("active")

    // add big dot class  
    let dots =  currentItem.querySelectorAll(".dots i") 
    for (let i = 0; i < dots.length; i++) {
        if (i == currentIndex) {
            dots[i].classList.add("big-dot")
        } else {
            dots[i].classList.remove("big-dot")
        }
    }
}

setInterval(showNext, 4000)