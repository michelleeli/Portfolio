document.addEventListener("DOMContentLoaded", async () => {
    const text = document.getElementById('text')
    const mountain1 = document.getElementById('mountain1')
    const mountain2 = document.getElementById('mountain2')
    const mountain3 = document.getElementById('mountain3')
    const mountain4 = document.getElementById('mountain4')
    const cloud1 = document.getElementById('cloud1')
    const cloud2 = document.getElementById('cloud2')
    const bird = document.getElementById('bird')
    const pfp = document.getElementById('pfp')

    window.addEventListener('scroll', ()=> {
        let value = window.scrollY;
        text.style.marginTop = value * 2.5 + 'px';
        mountain1.style.left = value * -1.5 + 'px'
        mountain2.style.left = value * -.7 + 'px'
        mountain3.style.left = value * 1 + 'px'
        mountain4.style.left = value * .8 + 'px'
        bird.style.left = value * .5 + 'px'
        cloud2.style.left = value * -1 + 'px'
        cloud1.style.left = value * 1 + 'px'
        pfp.style.bottom = value * 1 + 'px'
    })
})

