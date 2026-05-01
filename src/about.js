import aboutImg from './assets/imgs/about-img.jpg'
import { form } from './components/form'

export function About() {
    return {
        html: /* html */ `
<main class="pt-32">
    <section class='py-24 bg-white'>
        <div class='container mx-auto px-4'>
            <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                <div class='relative'>
                    <img src='${aboutImg}' class='w-full h-[600px] object-cover rounded-2xl shadow-2xl'>
                </div>
                <div>
                    <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>Who We Are</span>
                    <h2 class='text-5xl font-black text-black mt-4 mb-8 leading-tight'>Dedicated To Your <span class='text-amber-500'>Fitness Journey</span></h2>
                    
                    <p class='text-gray-600 mb-6 text-lg leading-relaxed'>
                        Founded in 2010, FITNESSGYM has been at the forefront of the fitness industry, helping thousands of people achieve their health and wellness goals. Our state-of-the-art facility and expert trainers provide the perfect environment for transformation.
                    </p>
                    <p class='text-gray-600 mb-10 text-lg leading-relaxed'>
                        We believe that fitness is not just about physical strength, but also about mental resilience and community. Join us and become part of a movement dedicated to excellence.
                    </p>

                    <div class='grid grid-cols-2 gap-8'>
                        <div>
                            <p class='text-4xl font-black text-amber-500'>15+</p>
                            <p class='text-gray-500 font-bold uppercase text-xs tracking-widest'>Years of Excellence</p>
                        </div>
                        <div>
                            <p class='text-4xl font-black text-amber-500'>24/7</p>
                            <p class='text-gray-500 font-bold uppercase text-xs tracking-widest'>Facility Access</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--FORM-->
    <section>
            ${form}
    </section>
</main>
        `,
        init: () => {
            window.scrollTo(0, 0);
        }
    };
}
