with open('src/components/Header.tsx', 'r') as f:
    content = f.read()

old_form = """                {/* MANUAL FORM */}
                <form className='flex flex-col flex-grow'>
                  <label className='sr-only' htmlFor='email'>Institutional Email</label>
                  <input type='email' id='email' placeholder='partner@institution.com' className='w-full bg-[#F9FAFB] border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all mb-4 rounded-sm' />
                  <label className='sr-only' htmlFor='parameters'>Parameters</label>
                  <textarea id='parameters' placeholder='Specify asset classes or yield parameters of interest...' className='w-full bg-[#F9FAFB] border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all mb-4 min-h-[80px] resize-none rounded-sm'></textarea>
                  <button type='submit' className='w-full mt-auto bg-[#C8102E] text-white font-bold tracking-widest py-3 hover:bg-red-700 transition-colors uppercase text-xs md:text-sm rounded-sm'>Submit Advisory Request</button>
                </form>"""

new_form = """                {/* MANUAL FORM */}
                <form className='flex flex-col'>
                  <label className='sr-only' htmlFor='email'>Institutional Email</label>
                  <input type='email' id='email' placeholder='partner@institution.com' className='w-full bg-[#F9FAFB] border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all mb-4 rounded-sm' />
                  <label className='sr-only' htmlFor='parameters'>Parameters</label>
                  <textarea id='parameters' placeholder='Specify asset classes or yield parameters of interest...' className='w-full bg-[#F9FAFB] border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all mb-4 min-h-[80px] resize-none rounded-sm'></textarea>
                  <button type='submit' className='w-full mt-2 bg-[#C8102E] text-white font-bold tracking-widest py-3 hover:bg-red-700 transition-colors uppercase text-xs md:text-sm rounded-sm'>Submit Advisory Request</button>
                </form>"""

content = content.replace(old_form, new_form)

with open('src/components/Header.tsx', 'w') as f:
    f.write(content)
