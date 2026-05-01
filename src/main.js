import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/imgs/hero-img.png'
import aboutImg from './assets/imgs/about-img.jpg'
import cardioImg from './assets/imgs/cardio-img.jpg'
import { Card } from './components/Card.js'
import { initSlider } from './components/Slider.js'


const categories = [
  { title: 'Cardio', imageSrc: cardioImg },
  { title: 'Strength', imageSrc: cardioImg },
  { title: 'Yoga', imageSrc: cardioImg },
  { title: 'HIIT', imageSrc: cardioImg },
  { title: 'Pilates', imageSrc: cardioImg },
  { title: 'Stretching', imageSrc: cardioImg },
];

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

  <!--ABOUT US-->
   <section class='py-24 bg-gray-50'>
    <div class='container mx-auto px-4'>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div class='order-2 lg:order-1'>
            <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>About Our Gym</span>
            <h2 class='text-4xl md:text-5xl font-black text-black mt-4 mb-8 leading-tight'>Why Choose <span class='text-amber-500'>US Gym</span></h2>
            
            <p class='text-gray-600 mb-10 text-lg leading-relaxed'>
              We provide a world-class fitness environment with expert trainers and state-of-the-art equipment to help you reach your maximum potential.
            </p>

            <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div class='flex items-start gap-4'>
                    <div class='bg-black text-white p-3 rounded-lg'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h4 class='font-bold text-lg'>Expert Trainers</h4>
                        <p class='text-gray-500 text-sm'>Certified professionals to guide your journey.</p>
                    </div>
                </div>
                <div class='flex items-start gap-4'>
                    <div class='bg-black text-white p-3 rounded-lg'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h4 class='font-bold text-lg'>Modern Gear</h4>
                        <p class='text-gray-500 text-sm'>Top-tier equipment for every workout style.</p>
                    </div>
                </div>
            </div>

            <button class='mt-12 px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg'>
                LEARN MORE
            </button>
          </div>

          <div class='order-1 lg:order-2 relative'>
              <div class='absolute -top-4 -left-4 w-24 h-24 bg-amber-300 rounded-full z-0 opacity-50 blur-2xl'></div>
              <div class='absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500 rounded-full z-0 opacity-20 blur-3xl'></div>
              <img src='${aboutImg}' class='relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700'>
              <div class='absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block'>
                  <p class='text-3xl font-black text-black'>10+</p>
                  <p class='text-gray-500 text-xs uppercase font-bold'>Years Experience</p>
              </div>
          </div>
      </div>
    </div>
  </section>
  
  <section class='py-[95px]'>
  <div class='container mx-auto'>
    <h1  class='text-4xl md:text-5xl font-black text-black mt-4 mb-8 leading-tight'>Train Smarter</h1>
    <!--CARDS-->
    <div class='grid grid-cols-3 gap-2'>
        <!--ROBIE STRING Z TABLICY-->
        ${categories.map(({ title, imageSrc }) => Card({ title, imageSrc })).join('')}
    </div>
  </div>
  </section>

  <!--SECTION_SLIDER (TESTIMONIALS)-->
  <section class='py-24 bg-white overflow-hidden'>
    <div class='container mx-auto px-4 text-center mb-16'>
        <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>Testimonials</span>
        <h2 class='text-4xl md:text-5xl font-black text-black mt-4 leading-tight'>Real Results From <br/> <span class='text-amber-500'>Real People</span></h2>
        <p class='text-gray-500 mt-4 max-w-2xl mx-auto'>Hear from our members who have transformed their lives through our programs and community support.</p>
    </div>

    <div class='container mx-auto px-4'>
      <div class="swiper mySwiper !pb-16">
        <div class="swiper-wrapper">
          
          <!-- Review 1 -->
          <div class="swiper-slide h-auto">
            <div class='bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full flex flex-col'>
                <div class='flex gap-1 text-amber-500 mb-6'>
                    ${[1, 2, 3, 4, 5].map(() => `<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
                </div>
                <p class='text-gray-700 italic mb-8 flex-grow'>"Joining US Gym was the best decision I ever made. I lost 15kg in 6 months and feel stronger than ever!"</p>
                <div class='flex items-center gap-4 border-t border-gray-200 pt-6'>
                    <div class='w-14 h-14 rounded-full bg-amber-200 flex items-center justify-center font-bold text-amber-700'>JS</div>
                    <div class='text-left'>
                        <h4 class='font-bold text-black'>John Smith</h4>
                        <p class='text-gray-500 text-sm'>Lost 15kg • 6 Months</p>
                    </div>
                </div>
            </div>
          </div>

          <!-- Review 2 -->
          <div class="swiper-slide h-auto">
            <div class='bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full flex flex-col'>
                <div class='flex gap-1 text-amber-500 mb-6'>
                    ${[1, 2, 3, 4, 5].map(() => `<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
                </div>
                <p class='text-gray-700 italic mb-8 flex-grow'>"The expert trainers here really know their stuff. My posture and core strength have improved significantly."</p>
                <div class='flex items-center gap-4 border-t border-gray-200 pt-6'>
                    <div class='w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white'>AW</div>
                    <div class='text-left'>
                        <h4 class='font-bold text-black'>Anna White</h4>
                        <p class='text-gray-500 text-sm'>Yoga Enthusiast</p>
                    </div>
                </div>
            </div>
          </div>

          <!-- Review 3 -->
          <div class="swiper-slide h-auto">
            <div class='bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full flex flex-col'>
                <div class='flex gap-1 text-amber-500 mb-6'>
                    ${[1, 2, 3, 4, 5].map(() => `<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
                </div>
                <p class='text-gray-700 italic mb-8 flex-grow'>"High-energy atmosphere and top-notch equipment. I actually look forward to my HIIT sessions every day!"</p>
                <div class='flex items-center gap-4 border-t border-gray-200 pt-6'>
                    <div class='w-14 h-14 rounded-full bg-black flex items-center justify-center font-bold text-white'>MK</div>
                    <div class='text-left'>
                        <h4 class='font-bold text-black'>Mike King</h4>
                        <p class='text-gray-500 text-sm'>Bodybuilder</p>
                    </div>
                </div>
            </div>
          </div>

          <!-- Review 4 -->
          <div class="swiper-slide h-auto">
            <div class='bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full flex flex-col'>
                <div class='flex gap-1 text-amber-500 mb-6'>
                    ${[1, 2, 3, 4, 5].map(() => `<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
                </div>
                <p class='text-gray-700 italic mb-8 flex-grow'>"Friendly community and a very clean facility. It feels like a second home to me now."</p>
                <div class='flex items-center gap-4 border-t border-gray-200 pt-6'>
                    <div class='w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center font-bold text-black'>ED</div>
                    <div class='text-left'>
                        <h4 class='font-bold text-black'>Emily Davis</h4>
                        <p class='text-gray-500 text-sm'>Marathon Runner</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
        <div class="swiper-pagination !-bottom-2"></div>
      </div>
    </div>
  </section>

  <!--FORM SECTION-->
  <section class='py-24 bg-gray-900 relative overflow-hidden'>
    <!-- Background Decor -->
    <div class='absolute top-0 right-0 w-1/3 h-full bg-amber-500/10 skew-x-12 translate-x-20 z-0'></div>
    
    <div class='container mx-auto px-4 relative z-10'>
      <div class='flex flex-col lg:flex-row gap-16 items-center'>
        
        <!-- TEXT & CONTACT INFO -->
        <div class='lg:w-1/2'>
            <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>Get In Touch</span>
            <h2 class='text-4xl md:text-6xl font-black text-white mt-4 mb-6 leading-tight'>Book Your <span class='text-amber-500'>FREE</span> <br/> Trial Session</h2>
            <p class='text-gray-400 text-lg mb-10'>Get professional coaching in your first days at the gym to help you achieve your sports goals safely and effectively.</p>
            
            <div class='space-y-6'>
                <div class='flex items-center gap-4 text-white'>
                    <div class='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                        <p class='text-gray-400 text-xs uppercase font-bold tracking-widest'>Call Us</p>
                        <p class='font-bold text-lg'>+1 (234) 567-890</p>
                    </div>
                </div>
                <div class='flex items-center gap-4 text-white'>
                    <div class='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                        <p class='text-gray-400 text-xs uppercase font-bold tracking-widest'>Email Us</p>
                        <p class='font-bold text-lg'>hello@usgym.com</p>
                    </div>
                </div>
                <div class='flex items-center gap-4 text-white'>
                    <div class='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                        <p class='text-gray-400 text-xs uppercase font-bold tracking-widest'>Location</p>
                        <p class='font-bold text-lg'>123 Fitness Ave, Muscle City</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- FORM CARD -->
        <div class='lg:w-1/2 w-full'>
            <div class='bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative'>
                <form class='space-y-6'>
                    <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div class='space-y-2'>
                            <label class='text-xs font-bold uppercase text-gray-400 ml-1'>Name</label>
                            <input type='text' placeholder='Your Name' class='w-full bg-gray-50 border-2 border-transparent focus:border-amber-500 focus:bg-white p-4 rounded-xl outline-none transition-all duration-300'>
                        </div>
                        <div class='space-y-2'>
                            <label class='text-xs font-bold uppercase text-gray-400 ml-1'>Email</label>
                            <input type='email' placeholder='Email Address' class='w-full bg-gray-50 border-2 border-transparent focus:border-amber-500 focus:bg-white p-4 rounded-xl outline-none transition-all duration-300'>
                        </div>
                    </div>
                    <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div class='space-y-2'>
                            <label class='text-xs font-bold uppercase text-gray-400 ml-1'>Phone</label>
                            <input type='tel' placeholder='Phone Number' class='w-full bg-gray-50 border-2 border-transparent focus:border-amber-500 focus:bg-white p-4 rounded-xl outline-none transition-all duration-300'>
                        </div>
                        <div class='space-y-2'>
                            <label class='text-xs font-bold uppercase text-gray-400 ml-1'>Date</label>
                            <input type='date' class='w-full bg-gray-50 border-2 border-transparent focus:border-amber-500 focus:bg-white p-4 rounded-xl outline-none transition-all duration-300'>
                        </div>
                    </div>
                    <div class='space-y-2'>
                        <label class='text-xs font-bold uppercase text-gray-400 ml-1'>Message</label>
                        <textarea placeholder='How can we help you?' rows='4' class='w-full bg-gray-50 border-2 border-transparent focus:border-amber-500 focus:bg-white p-4 rounded-xl outline-none transition-all duration-300 resize-none'></textarea>
                    </div>
                    <button type='submit' class='w-full bg-amber-500 text-white font-black py-5 rounded-xl hover:bg-black transition-all duration-500 shadow-lg shadow-amber-500/20 uppercase tracking-widest'>
                        Submit Request
                    </button>
                </form>
            </div>
        </div>

      </div>
    </div>
  </section>

</main>


<footer class='bg-black pt-20 pb-10 text-white'>
    <div class='container mx-auto px-4'>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
            
            <!-- BRAND COLUMN -->
            <div class='space-y-6'>
                <h1 class='text-3xl font-black tracking-tighter'>FITNESS<span class='text-amber-500'>GYM</span></h1>
                <p class='text-gray-400 leading-relaxed'>
                    Transforming lives through fitness since 2010. Join our community and reach your maximum potential with expert coaching and world-class facilities.
                </p>
                <div class='flex gap-4'>
                    <a href='#' class='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300'>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href='#' class='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300'>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.136.07 1.743.253 2.14.407a4.673 4.673 0 0 1 1.733 1.127 4.674 4.674 0 0 1 1.127 1.732c.154.397.337 1.004.407 2.14.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.07 1.136-.253 1.743-.407 2.14a4.674 4.674 0 0 1-1.127 1.732 4.673 4.673 0 0 1-1.733 1.127c-.397.154-1.004.337-2.14.407-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.136-.07-1.743-.253-2.14-.407a4.673 4.673 0 0 1-1.733-1.127 4.674 4.674 0 0 1-1.127-1.732c-.154-.397-.337-1.004-.407-2.14-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.07-1.136.253-1.743.407-2.14a4.674 4.674 0 0 1 1.127-1.732 4.673 4.673 0 0 1 1.733-1.127c.397-.154 1.004-.337 2.14-.407 1.266-.058 1.646-.069 4.85-.069m0-2.163C8.735 0 8.324.017 7.043.075 5.753.135 4.872.34 4.101.64a6.83 6.83 0 0 0-2.465 1.604A6.83 6.83 0 0 0 .034 4.708c-.3.77-.505 1.65-.565 2.94C-.588 8.932-.6 9.342-.6 12.163s.017 3.24.075 4.522c.06 1.29.265 2.17.565 2.94a6.83 6.83 0 0 0 1.604 2.465 6.83 6.83 0 0 0 2.465 1.604c.77.3 1.65.505 2.94.565 1.282.058 1.692.075 4.522.075s3.24-.017 4.522-.075c1.29-.06 2.17-.265 2.94-.565a6.83 6.83 0 0 0 2.465-1.604 6.83 6.83 0 0 0 1.604-2.465c.3-.77.505-1.65.565-2.94.058-1.282.075-1.692.075-4.522s-.017-3.24-.075-4.522c-.06-1.29-.265-2.17-.565-2.94a6.83 6.83 0 0 0-1.604-2.465A6.83 6.83 0 0 0 17.658.64c-.77-.3-1.65-.505-2.94-.565C13.431.017 13.021 0 12.203 0h-.203z"/><path d="M12 5.918a6.245 6.245 0 1 0 0 12.49 6.245 6.245 0 0 0 0-12.49zm0 10.327a4.082 4.082 0 1 1 0-8.164 4.082 4.082 0 0 1 0 8.164z"/><path d="M18.463 4.11a1.458 1.458 0 1 0 0 2.915 1.458 1.458 0 0 0 0-2.915z"/></svg>
                    </a>
                </div>
            </div>

            <!-- QUICK LINKS -->
            <div>
                <h4 class='text-lg font-bold mb-6'>Quick Links</h4>
                <ul class='space-y-4 text-gray-400'>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>About Us</a></li>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Our Classes</a></li>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Pricing Plans</a></li>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Trainers</a></li>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Contact</a></li>
                </ul>
            </div>

            <!-- SERVICES -->
            <div>
                <h4 class='text-lg font-bold mb-6'>Our Services</h4>
                <ul class='space-y-4 text-gray-400'>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Weight Lifting</a></li>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Cardio & Yoga</a></li>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Personal Training</a></li>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Zumba Classes</a></li>
                    <li><a href='#' class='hover:text-amber-500 transition-colors'>Diet Plans</a></li>
                </ul>
            </div>

            <!-- NEWSLETTER -->
            <div>
                <h4 class='text-lg font-bold mb-6'>Newsletter</h4>
                <p class='text-gray-400 mb-6'>Subscribe to get latest fitness tips and offers.</p>
                <form class='flex flex-col gap-3'>
                    <input type='email' placeholder='Enter Email' class='bg-gray-800 border-none p-4 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none'>
                    <button class='bg-amber-500 text-black font-bold py-4 rounded-xl hover:bg-white transition-colors'>SUBSCRIBE</button>
                </form>
            </div>
        </div>

        <!-- FOOTER BOTTOM -->
        <div class='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm'>
            <p>&copy; 2026 FITNESSGYM. All Rights Reserved.</p>
            <div class='flex gap-8'>
                <a href='#' class='hover:text-white'>Privacy Policy</a>
                <a href='#' class='hover:text-white'>Terms of Service</a>
            </div>
        </div>
    </div>
</footer>



`

initSlider()
