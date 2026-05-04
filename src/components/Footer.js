export function Footer() {
    return /* html */ `
<footer class='bg-[#0a0a0a] pt-24 pb-12 text-white border-t border-gray-900'>
    <div class='container mx-auto px-6'>
  

        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20'>
            
            <!-- BRAND COLUMN -->
            <div class='space-y-8'>
                <div class='flex items-center gap-2'>
                    <div class='w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center'>
                        <svg class='w-6 h-6 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>
                    </div>
                    <h1 class='text-2xl font-black tracking-tighter'>FITNESS<span class='text-amber-500'>GYM</span></h1>
                </div>
                <p class='text-gray-400 leading-relaxed text-lg'>
                    Your journey to a stronger, healthier version of yourself starts here. Expert coaching, premium gear, and a community that pushes you.
                </p>
                <div class='flex gap-4'>
                    <a href='#' class='w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all group shadow-lg'>
                        <svg class='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/></svg>
                    </a>
                    <a href='#' class='w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all group shadow-lg'>
                        <svg class='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/></svg>
                    </a>
                </div>
            </div>

            <!-- QUICK LINKS -->
            <div>
                <h4 class='text-xl font-bold mb-8 relative inline-block'>
                    Quick Links
                    <span class='absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full'></span>
                </h4>
                <ul class='space-y-4 text-gray-400 font-medium'>
                    <li><a href='/' data-link class='hover:text-amber-500 transition-colors flex items-center gap-2 group'><span class='w-1.5 h-1.5 bg-gray-800 rounded-full group-hover:bg-amber-500 transition-all'></span>Home</a></li>
                    <li><a href='/about' class='hover:text-amber-500 transition-colors flex items-center gap-2 group'><span class='w-1.5 h-1.5 bg-gray-800 rounded-full group-hover:bg-amber-500 transition-all'></span>About</a></li>
                    <li><a href='/offer' class='hover:text-amber-500 transition-colors flex items-center gap-2 group'><span class='w-1.5 h-1.5 bg-gray-800 rounded-full group-hover:bg-amber-500 transition-all'></span>Offer</a></li>
                </ul>
            </div>

            <!-- WORKING HOURS -->
            <div>
                <h4 class='text-xl font-bold mb-8 relative inline-block'>
                    Opening Hours
                    <span class='absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full'></span>
                </h4>
                <ul class='space-y-4 text-gray-400'>
                    <li class='flex justify-between items-center pb-2 border-b border-gray-900'>
                        <span class='font-medium'>Mon - Fri:</span>
                        <span class='text-white font-bold'>06:00 - 22:00</span>
                    </li>
                    <li class='flex justify-between items-center pb-2 border-b border-gray-900'>
                        <span class='font-medium'>Saturday:</span>
                        <span class='text-white font-bold'>08:00 - 20:00</span>
                    </li>
                    <li class='flex justify-between items-center'>
                        <span class='font-medium'>Sunday:</span>
                        <span class='text-amber-500 font-bold italic'>Closed</span>
                    </li>
                </ul>
            </div>

            <!-- CONTACT INFO -->
            <div>
                <h4 class='text-xl font-bold mb-8 relative inline-block'>
                    Contact Us
                    <span class='absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full'></span>
                </h4>
                <div class='space-y-6'>
                    <div class='flex items-start gap-4'>
                        <div class='w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center shrink-0'>
                            <svg class='w-5 h-5 text-amber-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path></svg>
                        </div>
                        <p class='text-gray-400 leading-snug pt-1'>123 Fitness Street,<br/>Healthy City, HC 12345</p>
                    </div>
                    <div class='flex items-center gap-4'>
                        <div class='w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center shrink-0'>
                            <svg class='w-5 h-5 text-amber-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path></svg>
                        </div>
                        <p class='text-gray-400 font-medium'>+1 (234) 567-890</p>
                    </div>
                    <div class='flex items-center gap-4'>
                        <div class='w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center shrink-0'>
                            <svg class='w-5 h-5 text-amber-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path></svg>
                        </div>
                        <p class='text-gray-400 font-medium truncate'>hello@fitnessgym.com</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER BOTTOM -->
        <div class='border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm'>
            <p>&copy; 2026 <span class='text-white font-bold uppercase'>FitnessGym</span>. All Rights Reserved.</p>
            <div class='flex gap-8'>
                <a href='#' class='hover:text-white transition-colors'>Privacy Policy</a>
                <a href='#' class='hover:text-white transition-colors'>Terms of Service</a>
                <a href='#' class='hover:text-white transition-colors'>Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>
    `;
}
