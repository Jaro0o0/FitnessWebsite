import heroImg from '../assets/imgs/hero-img.png'
import aboutImg from '../assets/imgs/about-img.jpg'
import cardioImg from '../assets/imgs/cardio-img.jpg'
import { Card } from '../components/Card.js'
import { initSlider } from '../components/Slider.js'

export function Home() {
    const categories = [
        { title: 'Cardio', imageSrc: cardioImg },
        { title: 'Strength', imageSrc: cardioImg },
        { title: 'Yoga', imageSrc: cardioImg },
        { title: 'HIIT', imageSrc: cardioImg },
        { title: 'Pilates', imageSrc: cardioImg },
        { title: 'Stretching', imageSrc: cardioImg },
    ];

    return {
        html: /* html */ `
<main>
    <section class='relative w-full h-screen bg-black flex items-center overflow-hidden'>
        <div class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap z-0 pointer-events-none uppercase'>
            HARD WORK
        </div>

        <div class='container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10'>
            <div class='lg:w-1/2 text-center lg:text-left pt-20 lg:pt-0'>
                <span class='inline-block mb-4 px-4 py-1 bg-amber-500 text-black text-xs font-black uppercase tracking-[0.3em] rounded-full'>
                    Evolution Your Body
                </span>
                <h1 class='text-white text-6xl md:text-8xl lg:text-[120px] font-black leading-none uppercase mb-6'>
                    REACH YOUR <br/> <span class='text-transparent [text-stroke:2px_white]'>BEST SHAPE</span>
                </h1>
                <p class='text-gray-400 text-lg md:text-xl max-w-xl mb-10 mx-auto lg:mx-0'>
                    Push your limits and transform your life with our elite training programs. Professional coaching for professional results.
                </p>
                <div class='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                    <a href='#' class='px-10 py-5 bg-amber-500 text-black font-black rounded-full hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-xl shadow-amber-500/20'>
                        Book A Plan
                    </a>
                    <a href='/about' data-link class='px-10 py-5 border-2 border-white text-white font-black rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm'>
                        Learn More
                    </a>
                </div>

                <div class='mt-16 flex gap-12 justify-center lg:justify-start border-t border-white/10 pt-8'>
                    <div>
                        <p class='text-3xl font-black text-white'>10k+</p>
                        <p class='text-gray-500 text-xs uppercase font-bold tracking-widest'>Members</p>
                    </div>
                    <div>
                        <p class='text-3xl font-black text-white'>50+</p>
                        <p class='text-gray-500 text-xs uppercase font-bold tracking-widest'>Coaches</p>
                    </div>
                    <div>
                        <p class='text-3xl font-black text-white'>100%</p>
                        <p class='text-gray-500 text-xs uppercase font-bold tracking-widest'>Results</p>
                    </div>
                </div>
            </div>

            <div class='lg:w-1/2 relative mt-12 lg:mt-0'>
                <div class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/20 blur-[120px] rounded-full z-0'></div>
                <img src='${heroImg}' class='relative z-10 w-full h-auto mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700'/>
            </div>
        </div>
    </section>

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

            <a href="/about" data-link class='inline-block mt-12 px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg'>
                LEARN MORE
            </a>
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
  
  <section class='py-32 bg-white'>
    <div class='container mx-auto px-4'>
        <div class='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
            <div class='max-w-2xl text-left'>
                <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>Our Programs</span>
                <h2 class='text-5xl md:text-7xl font-black text-black mt-4 leading-none uppercase'>
                    Train <span class='text-transparent [text-stroke:1px_black]'>Smarter</span> <br/> Not Harder
                </h2>
            </div>
            <div class='text-right'>
                <p class='text-gray-500 max-w-sm mb-6 font-medium'>Choose from our specialized categories designed to push your limits and achieve your fitness goals.</p>
                <a href='#' class='inline-block text-black font-black uppercase tracking-widest text-xs border-b-2 border-amber-500 pb-1 hover:text-amber-500 transition-colors'>View All Classes</a>
            </div>
        </div>

        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            ${categories.map(({ title, imageSrc }) => Card({ title, imageSrc })).join('')}
        </div>
    </div>
  </section>

  <section class='py-24 bg-white overflow-hidden'>
    <div class='container mx-auto px-4 text-center mb-16'>
        <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>Testimonials</span>
        <h2 class='text-4xl md:text-5xl font-black text-black mt-4 leading-tight'>Real Results From <br/> <span class='text-amber-500'>Real People</span></h2>
        <p class='text-gray-500 mt-4 max-w-2xl mx-auto'>Hear from our members who have transformed their lives through our programs and community support.</p>
    </div>

    <!--SWIPER-->
    <div class='container mx-auto px-4'>
      <div class="swiper mySwiper !pb-16">
        <div class="swiper-wrapper">
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

</main>
        `,
        init: () => {
            initSlider();
        }
    };
}
