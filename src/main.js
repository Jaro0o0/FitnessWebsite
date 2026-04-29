import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/imgs/hero-img.png'
import aboutImg from './assets/imgs/about-img.jpg'
import cardioImg from './assets/imgs/cardio-img.jpg'
import { Card } from './components/Card.js'
import { initSlider } from './components/Slider.js'


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

  <!--FORM-->
  <section class='py-[95px]'>
    <!--TEXT_BOX-->
    <div>
        <h1>Book your FREE</h1>
        <p>First personal tanning</p>
        <!--PARAGRAF-->
        <p>Get proffesional coaching in first days on gym to healp you</p>
        <p>achieve your sprts goals</p>
    </div>
    <!--FORM-->
    <div class='container mx-auto flex flex-col items-center'>
      <form class='flex flex-col items-center gap-5 w-full max-w-2xl'>
          <div class='flex gap-5 w-full justify-center'>
              <input  placeholder='name' class='bg-white border-b-2 border-black p-2 flex-1'>
              <input  placeholder='e-mail' class='bg-white border-b-2 border-black p-2 flex-1'>
          </div>
          <div class='flex gap-5 w-full justify-center'>
            <input  placeholder='Phone Number' class='bg-white border-b-2 border-black p-2 flex-1'>
            <input  placeholder='Prefered Date' class='bg-white border-b-2 border-black p-2 flex-1'>
          
          </div>
          <input  placeholder='Your Question' class='bg-white border-b-2 border-black p-8 w-full'>
          <button type='submit' class='bg-black text-white px-8 py-3 rounded-full hover:bg-amber-300 hover:text-black transition-colors duration-300'>SUBMIT</button>
      
      </form>
    </div>
  
  </section>

</main>


<footer class='bg-black p-20 text-white text-center'>
      <h1>Fitness</h1>
      <div class='border-b-2 border-white p-2'>
        <span>Reach<span>
        <span>Your<span>
        <span>Best<span>
        <span>Shape<span>
        <span>For<span>
        <span>Life<span>
      </div>


</footer>



`

initSlider()
