import { Card } from "../components/Card";
import cardioImg from '../assets/imgs/cardio-img.jpg'

import strengthImg from '../assets/imgs/strength-img.jpg'
import yogaImg from '../assets/imgs/yoga-img.jpg'
import hiitImg from '../assets/imgs/hiit-img.jpg'
import pilatesImg from '../assets/imgs/pilates-img.jpg'
import boxingImg from '../assets/imgs/boxing-img.jpg'
import physiqueImg from '../assets/imgs/physique-img.jpg'
import calistenicImg from '../assets/imgs/calistenic-img.jpg'

import mobilityImg from '../assets/imgs/mobility-img.jpg'


    const categories = [
        { title: 'Cardio', imageSrc: cardioImg },
        { title: 'Strength', imageSrc: strengthImg },
        { title: 'Yoga', imageSrc: yogaImg },
        { title: 'HIIT', imageSrc: hiitImg },
        { title: 'Pilates', imageSrc: pilatesImg  },
        { title: 'Boxing', imageSrc: boxingImg  },

        { title: 'Mobility', imageSrc: mobilityImg  },
        { title: 'Physique', imageSrc: physiqueImg },
        { title: 'Calistenic', imageSrc: calistenicImg  },


    ];



export function Offer() {
    return {
        html: /*html*/ `
            <main class="pt-24 min-h-screen bg-black text-white">
                <div class="container mx-auto px-4 h-[75vh] flex flex-col justify-center bg-black">
                    <!--TEXT_BOX-->
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div class="max-w-2xl text-left">
                            <span class="text-amber-500 font-bold uppercase tracking-widest text-sm">Services</span>
                            <h1 class="text-5xl md:text-7xl font-black text-white mt-4 leading-none uppercase">
                                Our <span class="text-transparent [text-stroke:1px_white]">Exclusive</span> <br/> Offer
                            </h1>
                        </div>
                        <p class="text-gray-400 text-lg max-w-sm mb-2">
                            Tailored fitness solutions designed for your specific goals. Choose the path that leads to your transformation.
                        </p>
                    </div>
                </div>
                
                <!--CARD_BOX-->
                <div class="container mx-auto px-4 py-24 bg-black">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!--PERSONAL-->
                        <div class="group p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 relative overflow-hidden">
                            <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <h3 class="text-3xl font-black mb-4 uppercase italic">Personal <span class="text-amber-500">Training</span></h3>
                            <p class="text-gray-400 mb-8 leading-relaxed">Experience a workout customized specifically for your body and goals with one-on-one attention.</p>
                            <ul class="space-y-3 mb-10">
                                <li class="flex items-center text-sm text-gray-300 gap-2">
                                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Customized Workout Plans
                                </li>
                                <li class="flex items-center text-sm text-gray-300 gap-2">
                                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    1-on-1 Coaching
                                </li>
                                <li class="flex items-center text-sm text-gray-300 gap-2">
                                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Progress Tracking
                                </li>
                            </ul>
                            <a href="#" class="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:text-amber-500 transition-colors">
                                Book a Session
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>

                        <!--GROUP_ClASS -->
                        <div class="group p-10 bg-amber-500 rounded-3xl border border-amber-500 transition-all duration-500 relative overflow-hidden">
                             <div class="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
                                <svg class="w-24 h-24 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <span class="absolute top-6 left-10 px-3 py-1 bg-black text-amber-500 text-[10px] font-black uppercase tracking-widest rounded-full">Most Popular</span>
                            <h3 class="text-3xl font-black mb-4 uppercase italic text-black mt-8">Group <span class="text-white">Classes</span></h3>
                            <p class="text-black/80 mb-8 leading-relaxed font-medium">Join our high-energy community and push your limits alongside like-minded fitness enthusiasts.</p>
                            <ul class="space-y-3 mb-10">
                                <li class="flex items-center text-sm text-black font-bold gap-2">
                                    <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Varied Daily Workouts
                                </li>
                                <li class="flex items-center text-sm text-black font-bold gap-2">
                                    <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Expert Instructors
                                </li>
                                <li class="flex items-center text-sm text-black font-bold gap-2">
                                    <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Community Motivation
                                </li>
                            </ul>
                            <a href="#" class="inline-flex items-center gap-2 text-black font-black uppercase tracking-widest text-xs border-b-2 border-black pb-1">
                                See Schedule
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>

                        <!--BOXING_CLASS-->
                        <div class="group p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 relative overflow-hidden">
                             <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                            </div>
                            <h3 class="text-3xl font-black mb-4 uppercase italic">Boxing <span class="text-amber-500">Training</span></h3>
                            <p class="text-gray-400 mb-8 leading-relaxed">Fuel your strength with science-based boxing training programs tailored to your goals and fighting style.</p>
                            <ul class="space-y-3 mb-10">
                                <li class="flex items-center text-sm text-gray-300 gap-2">
                                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Conditioning & Fight Endurance
                                </li>
                                <li class="flex items-center text-sm text-gray-300 gap-2">
                                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    1-on-1 Coaching
                                </li>
                                <li class="flex items-center text-sm text-gray-300 gap-2">
                                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                     Punch Combination Drills 
                                </li>
                            </ul>
                            <a href="#" class="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:text-amber-500 transition-colors">
                                Get Your Plan
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!--Grid-->
                <section class='py-32 bg-white'>
                    <div class='container mx-auto px-4'>
                        <div class='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
                            <div class='max-w-2xl text-left'>
                                <!--SUBHEADING-->
                                <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>Our Programs</span>
                                <h2 class='text-5xl md:text-7xl font-black text-black mt-4 leading-none uppercase'>
                                    Train  <br/> <span class=' [text-stroke:1px_black]'>Smarter</span>
                                </h2>
                            </div>
                        </div>

                        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            ${categories.map(({ title, imageSrc }) => Card({ title, imageSrc })).join('')}
                        </div>
                    </div>
                </section>
            </main>
        `,
        init: () => {
            window.scrollTo(0, 0);
        }
    };
}