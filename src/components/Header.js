export function initHeader() {
  const header = document.querySelector('header')
  const menuToggle = document.getElementById('menu-toggle')
  const menuClose = document.getElementById('menu-close')
  const sideMenu = document.getElementById('side-menu')
  const backdrop = document.getElementById('menu-backdrop')
  const sideMenuLinks = sideMenu?.querySelectorAll('a')

  if (!header) return

  const toggleMenu = () => {
    sideMenu?.classList.toggle('translate-x-full')
    backdrop?.classList.toggle('opacity-0')
    backdrop?.classList.toggle('pointer-events-none')
    document.body.classList.toggle('overflow-hidden')
  }

  menuToggle?.addEventListener('click', toggleMenu)
  menuClose?.addEventListener('click', toggleMenu)
  backdrop?.addEventListener('click', toggleMenu)
  
  // Close menu when clicking a link
  sideMenuLinks?.forEach(link => {
    link.addEventListener('click', toggleMenu)
  })

  const handleScroll = () => {
    if (window.scrollY > 0) {
      header.classList.add('bg-zinc-950', 'shadow-lg', 'py-4')
      header.classList.remove('p-6')
    } else {
      header.classList.remove('bg-zinc-950', 'shadow-lg', 'py-4')
      header.classList.add('p-6')
    }
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()
}

export function Header() {
    return /* html */ `
<header class='fixed top-0 left-0 w-full z-50 p-6 transition-all duration-300  '>
  <div class='container mx-auto flex justify-between items-center'>
      <a href="/" data-link class='text-white text-3xl font-black tracking-tighter' >FITNESS<span class='text-amber-500'>GYM</span></a>
      <ul class='hidden lg:flex text-white gap-8 uppercase text-sm font-bold tracking-widest'>
        <li><a href="/" data-link class='cursor-pointer hover:text-amber-500 transition-colors'>Home</a></li>
        <li><a href="/about" data-link class='cursor-pointer hover:text-amber-500 transition-colors'>About</a></li>
        <li><a href="/offer" data-link class='cursor-pointer hover:text-amber-500 transition-colors'>Offer</a></li>
      </ul>
      <div class='flex items-center gap-6'>
          <button class='px-6 py-2 border-2 border-amber-500 text-amber-500 font-bold rounded-full hover:bg-amber-500 hover:text-black transition-all transform active:scale-95 uppercase hidden md:block'>Buy Membership</button>
          
          <!-- MOBILE MENU TOGGLE -->
          <button id="menu-toggle" class="lg:hidden text-white hover:text-amber-500 transition-colors focus:outline-none">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
          </button>
      </div>
  </div>
</header>

<!-- SIDE MENU DRAWER -->
<div id="side-menu" class="fixed inset-y-0 right-0 w-full md:w-80 bg-zinc-950 z-[60] transform translate-x-full transition-transform duration-500 ease-in-out border-l border-zinc-900 shadow-2xl">
    <div class="p-8 flex justify-between items-center border-b border-zinc-900">
        <!--LOGO-->
         <a href="/" data-link class='text-white text-3xl font-black tracking-tighter' >FITNESS<span class='text-amber-500'>GYM</span></a>
        <button id="menu-close" class="text-white hover:text-amber-500 transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>
    <nav class="flex flex-col gap-4 p-8">
        <a href="/" data-link class="text-4xl font-black text-white hover:text-amber-500 transition-colors uppercase py-2">Home</a>
        <a href="/about" data-link class="text-4xl font-black text-white hover:text-amber-500 transition-colors uppercase py-2">About</a>
        <a href="/offer" data-link class="text-4xl font-black text-white hover:text-amber-500 transition-colors uppercase py-2">Offer</a>
        
        <div class="mt-12 pt-12 border-t border-zinc-900">
            <button class='w-full py-5 bg-amber-500 text-black font-black rounded-full hover:bg-white transition-all transform active:scale-95 uppercase shadow-xl shadow-amber-500/10'>
                Buy Membership
            </button>
            <div class="mt-8 flex justify-center gap-6">
                <!-- Simple Social Icons -->
                <a href="#" class="text-gray-500 hover:text-white transition-colors">FB</a>
                <a href="#" class="text-gray-500 hover:text-white transition-colors">IG</a>
            </div>
        </div>
    </nav>
</div>

<!-- BACKDROP OVERLAY -->
<div id="menu-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] opacity-0 pointer-events-none transition-opacity duration-500"></div>
    `;
}
