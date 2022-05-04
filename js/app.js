
let navbar = document.querySelector("nav")
let scrollTopBtn = document.querySelector(".scroll-to-top")


window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.background = "hsl(225, 25%, 9%)"
        scrollTopBtn.style.display = "block"
    }
    else {
        navbar.style.background = "transparent"
        scrollTopBtn.style.display = "none"
    }
}

scrollTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


const topRated = [
    {
        id: 1,
        img: "../imgs/freeguy.png",
        name: "Free Guy",
        year: 2022,
        rate: 7.7,
        time: "118 min",
        type: "Movie",
    },
    {
        id: 2,
        img: "../imgs/peakyBlinders.jpg",
        name: "Peaky Blinders",
        year: 2016,
        rate: 9.1,
        time: "6 Seasons",
        type: "TvShow",
    },
    {
        id: 3,
        img: "../imgs/royal-rumble.jpg",
        name: "Royal Rumble 2017",
        year: 2017,
        rate: 9.3,
        time: "3.5 H",
        type: "WWE",
    },
    {
        id: 4,
        img: "../imgs/strangerThings.jpg",
        name: "Stranger Things",
        year: 2017,
        rate: 8.8,
        time: "3 Seasons",
        type: "TvShow",
    },
    {
        id: 5,
        img: "../imgs/attackOnTitan.jpg",
        name: "Attack on Titan",
        year: 2013,
        rate: 9.3,
        time: "4 Seasons",
        type: "Anime",
    },
    {
        id: 6,
        img: "../imgs/wwe2.jpg",
        name: "Wrestlmania 31",
        year: 2014,
        rate: 9.1,
        time: "2 Days",
        type: "WWE",
    },
    {
        id: 7,
        img: "../imgs/uncharted.png",
        name: "Uncharted",
        year: 2022,
        rate: 7.0,
        time: "116 min",
        type: "Movie",
    },
    {
        id: 8,
        img: "../imgs/dragonBall.jpg",
        name: "Dragon Ball Z",
        year: 1989,
        rate: 8.8,
        time: "9 Seasons",
        type: "Anime",
    },
]

let cards = document.querySelector(".top-rated .cards .row")
let topRatedBtns = document.querySelector(".top-rated .top-rated-btns")

window.addEventListener("DOMContentLoaded", function () {
    displayCards(topRated)
})

let categories = topRated.reduce(function (values, item) {
    if (!values.includes(item.type)) {
        values.push(item.type)
    }
    return values
}, ['all'])
let filteredBtns = document.querySelectorAll(".top-rated-btn")

filteredBtns.forEach(function (ele) {
    ele.addEventListener("click", function (e) {
        let type = e.currentTarget.dataset.card
        let menuType = topRated.filter(function (e) {
            if (e.type === type) {
                return e
            }
        })
        if (type === "all") {
            displayCards(topRated)
        } else {
            displayCards(menuType)
        }

    })
})


function displayCards(ele) {
    let displayCard = ele.map(function (el) {
        return `<div class="col-md-6 col-lg-3">
        <div class="movies-box" data-card="movies">
        <a href="details.html">
            <img class="img-fluid"
            src=${el.img}>
        </a>
            <div class="title-wrapper">
                <h4 class="movies-box-card-name">${el.name}</h4>
                <div class="movies-card-year">${el.year}</div>
            </div>
            <div class="middle-wrapper">
                <div class="movies-card-quality">${el.type}</div>
                <div class="movies-card-minutes">
                    <i class="fa-solid fa-clock"></i>
                    ${el.time}
                </div>
                <div class="movies-card-rate">
                    <i class="fa-solid fa-star"></i>
                    ${el.rate}
                </div>
            </div>
        </div>
    </div>`
    })
    displayCard = displayCard.join("")
    cards.innerHTML = displayCard
}




