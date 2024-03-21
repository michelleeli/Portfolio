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
    const skills = document.getElementById('skills')
    const info = document.getElementById('info')
    const facts = document.getElementById('fun-facts')
    const about = document.getElementById('about-description')

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

    function updateSkill(e) {
        about.innerText = ""
        const img = document.createElement("img");
        img.src = "https://skillicons.dev/icons?i=git,python,ruby,react,js,redux,express,nodejs,mongodb,css,postgres,mysql,html&perline=4"
        about.appendChild(img)
    }

    function updateInfo(e) {
        about.innerText = "Personal growth has always been the main driving force behind many of the decisions I make - including the decision to change careers from being a pharmacist to becoming a software engineer. I am grateful for the skills of critical thinking, problem solving, collaborative teamwork, and leadership that I have honed as a medical professional and am now able to apply to my work as a software engineer. It makes me excited to grow alongside the tech industry, work with others who share the same passions, and learn from those who have different interests than my own!"
    }

    function updateFacts(e) {
        about.innerText = 'I love discovering new places and have traveled to more than 20 countries, I grew up taking swimming and latin ballroom dance lessons. I was a cheerleader and dance team director in my academic years and now my favorite ways to stay active include going to the gym and taking pilates and zumba classes, My favorite genres are fiction novels and memoirs and my favorite podcasts are neuroscience and self help, I play the piano and spent my quarantine days learning how to play the ukelele, My favorite creative outlets are bullet journaling and creating lifestyle content'
    }
    skills.addEventListener('click', updateSkill)
    info.addEventListener('click', updateInfo)
    facts.addEventListener('click', updateFacts)
})

