import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/imgs/hero-img.png'
import aboutImg from './assets/imgs/about-img.jpg'
import cardioImg from './assets/imgs/cardio-img.jpg'
import { Card } from './components/Card.js'
import Swiper from 'swiper'
import { swiper } from './components/Slider.js'


document.querySelector('#app').innerHTML = /* html */ `
<header class='fixed top-0 left-0 w-full z-50 p-4'>
  <div class='flex justify-between'>
      <h1 class='text-white text-2xl' >Fitness</h1>
      <ul class='flex text-white gap-2'>
        <li class='text-white cursor-pointer font-bold hover:text-amber-300 transiton-colors duration-300'>Home</li>
        <li class='text-white cursor-pointer font-bold hover:text-amber-300 transiton-colors duration-300'>About</li>
        <li class='text-white cursor-pointer font-bold hover:text-amber-300 transiton-colors duration-300'>How it Works</li>
        <li class='text-white cursor-pointer font-bold hover:text-amber-300 transiton-colors duration-300'>Results</li>
        <li class='text-white cursor-pointer font-bold hover:text-amber-300 transiton-colors duration-300'>Testimonials</li>
      </ul>
  </div>

</header>


<main>
   
    <section class='w-full h-screen bg-black relative '>
      
      <img src='${heroImg}' class='w-150 h-auto absolute  bottom-[0] left-1/2 -translate-x-1/2 '/>
        <div class='pt-12'>
            <h1 class='text-white text-[100px] text-center''>Reach Your Best</h1>
            <p class='text-white text-[100px] text-center'>Shape or Life</p>
        </div>
        <a class='  absolute bottom-[10%] right-[15%] inline-block p-5 bg-amber-300 text-white  font-bold  
        uppercase rounded-3xl cursor-pointer hover:bg-amber-500  transition-colors duration-300 ' >Book A PLAN</a>
       
      
      <h1 class='text-black'>ABCX</h1>
  </section>

  <section class='py-[95px]'>
    <div class='container'>
      <div class='grid grid-cols-2 gap-2'>
          <div>
            <h1 class='text-black text-center'>Why Choose US Gym</h1>
          </div>
          <div>
              <img src='${aboutImg}' class='w-full h-full object-cover rounded-md'>
          </div>
      </div>
    </div>
  </section>
  
  <section class='py-[95px]'>
    <h1 class='text-black'>Train Smarter</h1>
    <!--CARDS-->
    <div class='grid grid-cols-3 gap-2'>
        ${Card({title: 'Cardio' , imageSrc: cardioImg})}
    </div>
  
  </section>

  <!--SECTION_SLIDER-->
   <section class='py-[95px]'>
    <h1 class='text-black'>Real people</h1>
    <p>Real Transformation</p>
    <div class='container'>
        <!-- Swiper -->
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  
  </section>

</main>


<footer></footer>



`

setupCounter(document.querySelector('#counter'))
