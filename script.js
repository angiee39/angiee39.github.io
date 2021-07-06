const navigation = (() => {

    const home = document.getElementById('home')
    const about = document.getElementById('about')
    const skills = document.getElementById('skills')
    const portfolio = document.getElementById('portfolio')
    const contact = document.getElementById('contact')
    
    const homeBtn = document.querySelectorAll('#home-btn')
    homeBtn.forEach(item => {
        item.addEventListener('click', event => {
            about.classList.add('hide')
            skills.classList.add('hide')
            portfolio.classList.add('hide')
            contact.classList.add('hide')
            home.classList.remove('hide')
        })

    })
        
    const aboutBtn = document.getElementById('about-btn')
    aboutBtn.addEventListener('click', (e) => {
        home.classList.add('hide')
        skills.classList.add('hide')
        portfolio.classList.add('hide')
        contact.classList.add('hide')
        about.classList.remove('hide')        
    })

    const skillsBtn = document.getElementById('skills-btn')
    skillsBtn.addEventListener('click', (e) => {
        home.classList.add('hide')
        about.classList.add('hide')
        portfolio.classList.add('hide')
        contact.classList.add('hide')
        skills.classList.remove('hide')
    })

    const portfolioBtn = document.getElementById('portfolio-btn')
    portfolioBtn.addEventListener('click', (e) => {
        home.classList.add('hide')
        about.classList.add('hide')
        skills.classList.add('hide')
        contact.classList.add('hide')
        portfolio.classList.remove('hide')
    })

    const contactBtn = document.getElementById('contact-btn')
    contactBtn.addEventListener('click', (e) => {
        home.classList.add('hide')
        about.classList.add('hide')
        skills.classList.add('hide')
        portfolio.classList.add('hide')
        contact.classList.remove('hide')
    })
})();


const projects = (() => {
    const project1 = document.getElementById('project1')
    project1.addEventListener('click', () => {
        window.open ("https://angiee39.github.io/calculator/")
    })
    const project2 = document.getElementById('project2')
    project2.addEventListener('click', () => {
        window.open ("https://angiee39.github.io/weather-app/")
    })
    const project3 = document.getElementById('project3')
    project3.addEventListener('click', () => {
        window.open ("https://angiee39.github.io/restaurant-page/")
    })
    const project4 = document.getElementById('project4')
    project4.addEventListener('click', () => {
        window.open ("https://wptest19.000webhostapp.com/")
    })
    const project5 = document.getElementById('project5')
    project5.addEventListener('click', () => {
        window.open ("https://angiee39.github.io/tic-tac-toe/")
    })
})();