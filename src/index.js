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
        about.style.backgroundColor = '#D694A3'
        about.innerHTML = `
        <i class="devicon-ruby-plain" ></i>
        <p class="visible" id="rubytext">Ruby</p>

        <i class="devicon-rails-plain"></i>
        <p class="visible" id="railstext">Rails</p>

        <i class="devicon-redux-original"></i>
        <p class="visible" id="reduxtext">Redux</p>

        <i class="devicon-postgresql-plain"></i>
        <p  class="visible" id="postgrestext">PostgreSQL</p>
        
        <i class="devicon-mongodb-plain"></i>
        <p class="visible" id="mongotext">MongoDB</p>

        <i class="devicon-javascript-plain"></i>
        <p class="visible" id="javascripttext">Javascript</p>

        <i class="devicon-react-original"></i>
        <p class="visible" id="reacttext">React</p>

        <i class="devicon-express-original"></i>
        <p class="visible" id="expresstext">Express</p> 
        
        <i class="devicon-css3-plain"></i>
        <p class="visible" id="csstext">CSS</p>
        
        <i class="devicon-html5-plain"></i>
        <p class="visible" id="htmltext">HTML</p>`
    }

    function updateInfo(e) {
        about.style.backgroundColor = '#cd7dac'

        about.innerText = "Personal growth has always been the main driving force behind many of the decisions I make - including the decision to change careers from being a pharmacist to becoming a software engineer. I am grateful for the skills of critical thinking, problem solving, collaborative teamwork, and leadership that I have honed as a medical professional and am now able to apply to my work as a software engineer. It makes me excited to grow alongside the tech industry, work with others who share the same passions, and learn from those who have different interests than my own!"
    }

    function updateFacts(e) {
        about.style.backgroundColor = '#c75589'
        about.innerHTML = `
        <li> I love discovering new places and have traveled to more than 20 countries </li> 
        <li>I grew up taking swimming and latin ballroom dance lessons. I was a cheerleader and dance team director in my academic years. Now my favorite ways to stay active include going to the gym and taking pilates and zumba classes</li>
        <li>My favorite book genres are fiction novels and memoirs and my favorite podcasts are neuroscience and self help</li> 
        <li>I play the piano and spent my quarantine days learning how to play the ukelele </li> 
        <li>My favorite creative outlets are bullet journaling and creating lifestyle content</li>`
    }
    skills.addEventListener('click', updateSkill)
    info.addEventListener('click', updateInfo)
    facts.addEventListener('click', updateFacts)
})

