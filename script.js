const responsiveul=document.querySelector('ul');
const hamburger=document.querySelector('.ham img');
const cars=document.querySelector('.cars');
const porsche=document.querySelector('.porsche');
const luxaryCar=document.querySelector('.luxary-car');

hamburger.addEventListener('click',()=>{
    responsiveul.classList.toggle('responsive')
})





document.addEventListener('DOMContentLoaded', () => {
    const imagelink = [
        {imgLink:'images/bestcars/porche-1.png',name:'Porsche 911 Carrera', price: '$99,200'},
        {imgLink:'images/bestcars/porche-2.png',name:'Boxster', price: '$62,600'},
        {imgLink:'images/bestcars/porche-3.png',name:'Cayman', price: '$61,200'},
        {imgLink:'images/bestcars/porche-4.png',name:'Panamera', price: '$92,400'},
        {imgLink:'images/bestcars/porche-5.png',name:'Macan', price: '$54,900'},
        {imgLink:'images/bestcars/porche-2.png',name:'Taycan', price: '$82,700'},
        {imgLink:'images/bestcars/porche-4.png',name:'Cayenne', price: '$67,500'},
    ];

    const cars = document.querySelector('.cars');
    const porsche = document.querySelector('.porsche');

    // Clone and append new Porsche elements
    imagelink.forEach((car, index) => {
        if (index === 0) return; // Skip the first element if needed
        let newPorsche = porsche.cloneNode(true);
        newPorsche.querySelector('img').src = car.imgLink;
        newPorsche.querySelector('h1').innerText = car.name;
        newPorsche.querySelector('h2').innerText = car.price;

        // Append the new Porsche element
        cars.appendChild(newPorsche);
        // luxaryCar.appendChild(newPorsche);
    });

    // Initialize AOS
    AOS.init();

    // Refresh AOS to apply animations to new elements
    AOS.refresh();
});



