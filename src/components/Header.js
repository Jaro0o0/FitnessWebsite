export function Header() {
    return /* html */ `
<header class='fixed top-0 left-0 w-full z-50 p-6'>
  <div class='container mx-auto flex justify-between items-center'>
      <a href="/" data-link class='text-white text-3xl font-black tracking-tighter' >FITNESS<span class='text-amber-500'>GYM</span></a>
      <ul class='hidden lg:flex text-white gap-8 uppercase text-sm font-bold tracking-widest'>
        <li><a href="/" data-link class='cursor-pointer hover:text-amber-500 transition-colors'>Home</a></li>
        <li><a href="/about" data-link class='cursor-pointer hover:text-amber-500 transition-colors'>About</a></li>
        <li class='cursor-pointer hover:text-amber-500 transition-colors'>Classes</li>
        <li class='cursor-pointer hover:text-amber-500 transition-colors'>Results</li>
        <li class='cursor-pointer hover:text-amber-500 transition-colors'>Testimonials</li>
      </ul>
      <button class='px-6 py-2 border-2 border-amber-500 text-amber-500 font-bold rounded-full hover:bg-amber-500 hover:text-black transition-all'>JOIN NOW</button>
  </div>
</header>
    `;
}
