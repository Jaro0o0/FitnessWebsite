export function form(){
    return  /*html*/ `
          <!--FORM-->
  <section class='py-[95px] bg-white relative overflow-hidden'>
  
    <div class='container mx-auto px-4 relative z-10'>
      <div class='flex flex-col lg:flex-row gap-16 items-center'>
        <div class='lg:w-1/2'>
            <span class='text-amber-500 font-bold uppercase tracking-widest text-sm'>Get In Touch</span>
            <h2 class='text-4xl md:text-6xl font-black text-gray-900 mt-4 mb-6 leading-tight'>Book Your <span class='text-amber-500'>FREE</span> <br/> Trial Session</h2>
            <p class='text-gray-600 text-lg mb-10'>Get professional coaching in your first days at the gym to help you achieve your sports goals safely and effectively.</p>
            <div class='space-y-6'>
                <div class='flex items-center gap-4 text-gray-900'>
                    <div class='w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-500'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                        <p class='text-gray-500 text-xs uppercase font-bold tracking-widest'>Call Us</p>
                        <p class='font-bold text-lg'>+1 (234) 567-890</p>
                    </div>
                </div>
                <div class='flex items-center gap-4 text-gray-900'>
                    <div class='w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-500'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                        <p class='text-gray-500 text-xs uppercase font-bold tracking-widest'>Email Us</p>
                        <p class='font-bold text-lg'>hello@usgym.com</p>
                    </div>
                </div>
            </div>
        </div>
        <!---FORM_BOX-->
        <div class='lg:w-1/2 w-full'>
            <div class='bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative border border-gray-100'>
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
                         <div class='space-y-2 md:col-span-2'>
                            <label class='text-xs font-bold uppercase text-gray-400 ml-1'>Message</label>
                            <textarea placeholder="Message" rows="4" class="w-full bg-gray-50 border-2 border-transparent focus:border-amber-500 focus:bg-white p-4 rounded-xl outline-none transition-all duration-300 resize-none"></textarea>
                        </div>
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
    `

}
