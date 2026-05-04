import aboutImg from './assets/imgs/about-img.jpg'
import { form } from './components/form'

export function About() {
    return {
        html: /* html */ `
<main>
    <section class='min-h-screen bg-black flex items-center py-24'>
        <div class='container mx-auto px-6'>
            <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                <div class='relative group'>
                    <div class='absolute -inset-4 bg-amber-500/20 rounded-3xl blur-2xl group-hover:bg-amber-500/30 transition-all'></div>
                    <img src='${aboutImg}' class='relative w-full h-[500px] lg:h-[650px] object-cover rounded-2xl shadow-2xl border border-gray-800'>
                </div>
                <div class='space-y-8'>
                    <div>
                        <span class='text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block'>Who We Are</span>
                        <h2 class='text-5xl lg:text-6xl font-black text-white leading-tight'>Dedicated To Your <span class='text-amber-500'>Fitness Journey</span></h2>
                    </div>
                    
                    <div class='space-y-6'>
                        <p class='text-gray-400 text-lg leading-relaxed'>
                            Founded in 2010, FITNESSGYM has been at the forefront of the fitness industry, helping thousands of people achieve their health and wellness goals. Our state-of-the-art facility and expert trainers provide the perfect environment for transformation.
                        </p>
                        <p class='text-gray-400 text-lg leading-relaxed'>
                            We believe that fitness is not just about physical strength, but also about mental resilience and community. Join us and become part of a movement dedicated to excellence.
                        </p>
                    </div>

                    <div class='grid grid-cols-2 gap-12 pt-4'>
                        <div class='border-l-4 border-amber-500 pl-6'>
                            <p class='text-5xl font-black text-white'>15+</p>
                            <p class='text-gray-500 font-bold uppercase text-xs tracking-widest mt-1'>Years of Excellence</p>
                        </div>
                        <div class='border-l-4 border-amber-500 pl-6'>
                            <p class='text-5xl font-black text-white'>24/7</p>
                            <p class='text-gray-500 font-bold uppercase text-xs tracking-widest mt-1'>Facility Access</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--FORM-->
    <section>
            ${form()}
    </section>
</main>
        `,
        init: () => {
            window.scrollTo(0, 0);
        }
    };
}
