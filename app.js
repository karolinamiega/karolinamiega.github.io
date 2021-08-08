const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    burger.addEventListener('click', () =>{
    //toggle nav
        nav.classList.toggle('nav-active');

  
    //burger animation
    burger.classList.toggle('toggle');
}); 
}
//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /7;
    let yAxis = (window.innerHeight / 2 - e.pageY) /7;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
//Animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
});
//Animate out
container.addEventListener('mouseleave', e =>{
    card.style.transition = 'all 0.5 ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
});


navSlide();