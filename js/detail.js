let moviesBox = document.querySelectorAll(".movies-box")
let detailTitle = document.querySelector(".detail-name")
let detail = document.querySelector(".detail")
let cardTitle = document.querySelectorAll(".card-name")
let imgBadge = document.querySelector(".card-img")



moviesBox.forEach(function (el) {
    el.addEventListener("click", function (e) {
        detail.style.backgroundImage = `url(../imgs/${e.currentTarget.id}.jpg)`
        detail.classList.add(e.currentTarget.id)
        if (detail.classList.contains(e.currentTarget.id)) {
            detail.className = `detail pt-5 pb-5 d-flex align-items-center ${e.currentTarget.id}`
        }
        imgBadge.src = e.currentTarget.firstElementChild.src
    })
})

cardTitle.forEach(t => {
    moviesBox.forEach(el => {
        el.addEventListener("click", function (e) {
            detailTitle.textContent = e.currentTarget.children[1].firstElementChild.textContent
        })
    })
})
