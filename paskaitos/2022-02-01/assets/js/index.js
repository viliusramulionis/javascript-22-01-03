//alert('labas pasauli')
window.addEventListener('scroll', () => {
    const offset = 260
    const navbar = document.getElementById('navbar')
    if(window.scrollY >= offset)
        navbar.classList.add('scrolled')
    else 
        navbar.classList.remove('scrolled')

    // if(window.scrollY >= offset) {
    //     document.getElementById('navbar').classList.add('scrolled')
    // } 
    // // else if() {

    // // } 
    // else {
    //     document.getElementById('navbar').classList.remove('scrolled')
    // } 

    // if(window.scrollY < offset) {
    //     document.getElementById('navbar').classList.remove('scrolled')
    // }
    //console.log(window.scrollY)

    //Jeigu if'e turi buti paleidziama daugiau kodo nei viena eilute, 
    //tuomet riestinius skliaustus naudoti yra privaloma
    // if() {
    //     console.log('Kazkoks tekstas')
    //     console.log('Kazkoks tekstas')
    // } else {
    //     console.log('Kazkoks tekstas')
    //     console.log('Kazkoks tekstas')
    // }
})