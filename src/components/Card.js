export function Card({ imageSrc, title }) {
    return /*HTML*/ `
    <div class='group relative overflow-hidden rounded-3xl cursor-pointer h-[450px]'>
        <!-- Image with Zoom Effect -->
        <img src='${imageSrc}' 
             class='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'>
        
        <!-- Gradient Overlay -->
        <div class='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500'></div>
        
        <!-- Content -->
        <div class='absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span class='inline-block mb-3 px-3 py-1 bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest rounded-md'>
                Training
            </span>
            <h3 class='text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-4'>
                ${title} <br/> <span class='text-amber-500'>Program</span>
            </h3>
            
            <div class='flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100'>
                <span class='text-sm font-bold uppercase tracking-widest'>Explore Class</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
        </div>

        <!-- Decorative Border -->
        <div class='absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-3xl transition-colors duration-500 pointer-events-none'></div>
    </div>
    `
}