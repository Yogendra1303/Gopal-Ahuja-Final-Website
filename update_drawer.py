with open('src/components/Header.tsx', 'r') as f:
    content = f.read()

import re

old_drawer_match = re.search(r'className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col p-8 md:p-12 z-\[101\] transform transition-transform"\s*>.*?</motion\.div>', content, re.DOTALL)

if old_drawer_match:
    old_drawer = old_drawer_match.group(0)
    
    new_drawer = """className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col z-[101] transform transition-transform"
            >
              <div className='flex flex-col h-full overflow-y-auto p-8 md:p-12 relative'>
                <button onClick={() => setIsAdvisoryOpen(false)} className='absolute top-6 right-6 p-2 text-gray-400 hover:text-[#C8102E] transition-colors bg-gray-50 hover:bg-gray-100 rounded-full'>
                  <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /></svg>
                </button>
                
                <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-3 block mt-4'>Initiate Advisory</span>
                <h2 className='text-black text-3xl font-extrabold tracking-tight mb-3'>ESTABLISH CONNECTION</h2>
                <p className='text-gray-600 text-sm leading-relaxed mb-8'>Connect with our lead transition partners to request custom allocation parameters or schedule a development advisory alignment.</p>
                
                {/* GOOGLE SSO BUTTON */}
                <button type='button' className='w-full flex items-center justify-center gap-3 bg-white border border-[#D1D5DB] text-gray-800 font-bold py-3.5 rounded-md hover:bg-gray-50 transition-all mb-4 shadow-sm'>
                  <svg className='w-5 h-5' viewBox='0 0 24 24'><path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/><path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/><path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/><path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/></svg>
                  Continue with Google
                </button>
                
                {/* WHATSAPP BUTTON */}
                <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer' className='w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-3.5 rounded-md hover:bg-[#20bd5a] transition-all mb-8 shadow-sm'>
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z'/></svg>
                  Chat via WhatsApp
                </a>
                
                {/* DIVIDER */}
                <div className='flex items-center gap-4 mb-8'>
                  <hr className='flex-grow border-gray-200' />
                  <span className='text-[10px] text-gray-400 font-bold uppercase tracking-widest'>Or submit an inquiry</span>
                  <hr className='flex-grow border-gray-200' />
                </div>
                
                {/* MANUAL FORM */}
                <form className='flex flex-col flex-grow'>
                  <label className='sr-only' htmlFor='email'>Institutional Email</label>
                  <input type='email' id='email' placeholder='partner@institution.com' className='w-full bg-[#F9FAFB] border border-gray-200 text-black px-4 py-4 text-sm focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all mb-5 rounded-sm' />
                  <label className='sr-only' htmlFor='parameters'>Parameters</label>
                  <textarea id='parameters' placeholder='Specify asset classes or yield parameters of interest...' className='w-full bg-[#F9FAFB] border border-gray-200 text-black px-4 py-4 text-sm focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all mb-6 min-h-[140px] resize-none rounded-sm'></textarea>
                  <button type='submit' className='w-full mt-auto bg-[#C8102E] text-white font-bold tracking-widest py-4 hover:bg-red-700 transition-colors uppercase text-sm rounded-sm'>Submit Advisory Request</button>
                </form>
              </div>
            </motion.div>"""
    
    content = content.replace(old_drawer, new_drawer)
    
    with open('src/components/Header.tsx', 'w') as f:
        f.write(content)
    print("Drawer updated successfully.")
else:
    print("Could not find the target drawer code.")

