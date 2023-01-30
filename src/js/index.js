function responsiveMenu() {
    let menu = document.querySelector(".menu");
    let outMenu = document.querySelector('.out-menu')

    if (window.screen.width <= 600) {
        if (menu.className === "menu") {
            menu.className += " responsive";
            outMenu.style.display = 'block';
            disableScroll()


        } else {
            menu.className = "menu";
            outMenu.style.display = 'none'
            enableScroll()


        }
    }
}
document.querySelector('.menu-icon').addEventListener('click', () => {
    responsiveMenu()
    getScroll()
})
document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', () => {
        responsiveMenu()
        getScroll()
    })
})
document.querySelector('.out-menu').addEventListener('click', () => {
    responsiveMenu()
    getScroll()
})
function disableScroll() {
    let section = document.getElementsByTagName('body')[0]
    let html = document.getElementsByClassName('html')[0]
    section.style.overflow = 'hidden'
    html.style.overflow = 'hidden'
}
function enableScroll() {
    let section = document.getElementsByTagName('body')[0]
    let html = document.getElementsByClassName('html')[0]
    section.style.overflow = 'auto'
    html.style.overflow = 'auto'

}
function onload() {
    let animation = document.querySelector('.animation')
    if (!animation) {
        let about = document.querySelector('.about')
        let menu = document.querySelector('.menu')
        let res = about.getBoundingClientRect().top - menu.getBoundingClientRect().top

        document.querySelectorAll('.progress-value').forEach((p) => {
            if (window.screen.width > 500) {
                if (res <= 620) {

                    p.className += ' animation'
                }
            }
            else {
                if (res <= 300) {

                    p.className += ' animation'
                }
            }

        })

    }
}
onload()

function getScroll() {
    document.addEventListener('scroll', () => {
        onload()
    })
}
getScroll()

function modal(el) {
    el.style.display = 'flex';
    disableScroll()
}
function closeModal(el) {
    el.style.display = 'none'
    enableScroll()
}


document.querySelectorAll('.out-modal').forEach((el) => {
    el.addEventListener('click', (event) => {
        if (event.target == el)
            closeModal(el)
    })
})