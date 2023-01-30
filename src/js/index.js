function responsiveMenu() {
    let menu = document.querySelector(".menu");
    let outMenu = document.querySelector('.out-menu')
    let section = document.getElementsByTagName('body')[0]
    let html = document.getElementsByClassName('html')[0]
    if (window.screen.width <= 600) {
        if (menu.className === "menu") {
            menu.className += " responsive";
            outMenu.style.display = 'block';
            section.style.overflow = 'hidden'
            html.style.overflow = 'hidden'

        } else {
            menu.className = "menu";
            outMenu.style.display = 'none'
            section.style.overflow = 'auto'
            html.style.overflow = 'auto'

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
}
function closeModal(el) {
    el.style.display = 'none'
}
dogwalkers.close()