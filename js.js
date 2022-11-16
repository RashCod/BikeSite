const arrLeft = document.querySelector(".bike__slider-left");
const arrRight = document.querySelector(".bike__slider-right");


arrLeft.addEventListener("mouseenter", function (e) {
const bikeSlider1 = document.querySelector(".bike__slider-img1")
const bikeSlider2 = document.querySelector(".bike__slider-img2")
const bikeSlider3 = document.querySelector(".bike__slider-img3")
    if (bikeSlider1.classList.contains('active')){
        bikeSlider1.classList.remove('active')
        bikeSlider2.classList.add('active')
    }else{
        bikeSlider2.classList.remove('active')
        bikeSlider1.classList.add('active')
    }
    
  }

)

arrRight.addEventListener("mouseenter", function (e) {
    const bikeSlider1 = document.querySelector(".bike__slider-img1")
    const bikeSlider2 = document.querySelector(".bike__slider-img2")
        if (bikeSlider1.classList.contains('active')){
            bikeSlider1.classList.remove('active')
            bikeSlider2.classList.add('active')
        }else{
            bikeSlider2.classList.remove('active')
            bikeSlider1.classList.add('active')
        }
        
      }
    
    )


    let offset = 0; /// смещение от левого края


    const sliderLineContainer = document.querySelector('.slider__line-container')
    

    document.querySelector('.arrow__img-left').addEventListener('click', function(){
        offset -= 1100
        if(offset < 0){
            offset = 2200
        }
        sliderLineContainer.style.left = -offset + 'px'
    })

    document.querySelector('.arrow__img-right').addEventListener('click', function(){
        offset += 1100
        if(offset > 2200){
            offset = 0
        }
        sliderLineContainer.style.left = -offset + 'px'
    })



    const orderGrey = document.querySelector('.order__grey')
    const orderWhite = document.querySelector('.order__white')
    const orderRed = document.querySelector('.order__red')

    const containerOrder1 = document.querySelector('.container__order-info1')
    const containerOrder2 = document.querySelector('.container__order-info2')
    const containerOrder3 = document.querySelector('.container__order-info3')



orderGrey.addEventListener('mouseenter', function(){
    if(containerOrder1.classList.toggle('order-active')){
        containerOrder2.classList.remove('order-active');
        containerOrder3.classList.remove('order-active');
    }else{
        containerOrder1.classList.add('order-active')
    }
})

orderWhite.addEventListener('mouseenter', function(){
    if(containerOrder2.classList.toggle('order-active')){
        containerOrder1.classList.remove('order-active');
        containerOrder3.classList.remove('order-active');
    }else{
        containerOrder2.classList.add('order-active')
    }
})
    
orderRed.addEventListener('mouseenter', function(){
    if(containerOrder3.classList.toggle('order-active')){
        containerOrder1.classList.remove('order-active')
        containerOrder2.classList.remove('order-active')
    }else{
        containerOrder3.classList.add('order-active')
    }
})


const hamb = document.querySelector('#hamb')
const popup = document.querySelector('#popup')
const menu = document.querySelector('#menu').cloneNode(1)
const body = document.body


hamb.addEventListener('click',hambHandler)

function hambHandler(event){
    event.preventDefault();
    popup.classList.toggle('open')
    hamb.classList.toggle('active')
    body.classList.toggle('noscroll')
    renderPopup()
}

function renderPopup(){
    popup.appendChild(menu)
}


//  goTop для подьема вверх!  /////

const goTopButton = document.querySelector('.go__top')

goTopButton.addEventListener('click',goTop)
window.addEventListener('scroll', trackScroll)

function trackScroll(){
    const offset = window.pageYOffset;      // Смещение
    const coords = document.documentElement.clientHeight;  // Высота окна браузера
    if(offset > coords){          // Если смещение больше чем высота первого экрана 
        goTopButton.classList.add('go__top--show')
    }else{
        goTopButton.classList.remove('go__top--show')
    }
}



function goTop () {
    if(window.pageYOffset > 0){    // Если смещение
        window.scrollBy(0,-20)     //
        setTimeout(goTop,0)
    }
}



/////////////////////////