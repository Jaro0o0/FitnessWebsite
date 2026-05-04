import { TrainerCard } from "./TrainerCard"
import imgOne from '../assets/imgs/trainer-one-img.jpg'
import imgTwo from '../assets/imgs/trainer-two-img.jpg'
import imgThree from '../assets/imgs/trainer-three-img.jpg'

const staff = [ 
    { imageSrc: imgOne, name: 'John "The Beast" Wick', role: 'Strength Specialist' },
    { imageSrc: imgTwo , name: 'Sarah "Power" Jenkins', role: 'Strength Specialist' },
    { imageSrc: imgThree, name: 'Mike "Flow" Ross', role: 'Yoga Master' }
]


export function Trainers() {
    return /*html*/ `
    <section  class='py-32 bg-zinc-950 overflow-hidden'>
        <div class='container mx-auto px-4'>
            <div class='flex flex-col md:flex-row justify-between items-end mb-20 gap-8'>
                <div class='max-w-2xl text-left'>
                    <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>Expert Staff</span>
                    <h2 class='text-5xl md:text-7xl font-black text-white mt-4 leading-none uppercase'>
                        Meet Our <span class='text-transparent [text-stroke:1px_white]'>Elite</span> <br/> Coaches
                    </h2>
                </div>
                <div class='text-right'>
                    <p class='text-gray-400 max-w-sm mb-6 font-medium'>Our certified professionals are dedicated to pushing you beyond your limits with specialized guidance.</p>
                </div>
            </div>

            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                ${staff.map(({ imageSrc, name, role }) => TrainerCard({ imageSrc, name, role })).join('')}
            </div>

            <!--BUTTON-->
            <div class='mt-20 text-center'>
                <p class='text-gray-500 font-medium mb-8'>Interested in joining our elite coaching team?</p>
                <a href="#" class='inline-block px-10 py-4 border border-zinc-800 text-white font-black rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs'>
                    Join the Team
                </a>
            </div>
        </div>
    </section>
    `
}