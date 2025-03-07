import React from 'react'

export default function Location() {
  return (
    <div className='border'>
      <section id="search" class="py-24 md:py-24 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4" id="el-hofwi0w9">
      <div class="max-w-4xl mx-auto" id="el-ds43ad6j">
        <div class="text-center mb-8" id="el-4c6vb6i8">
          <h2 class="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-3" id="el-qr71hbxy">Find Markets Near You</h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg" id="el-90bk1lvu">Discover fresh produce, artisanal goods, and sustainable products at your local farmers markets</p>
        </div>
        
        {/* <!-- Search Form --> */}
        <div class="bg-green-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg" id="el-72n8kybq">
          <form class="space-y-6" id="el-x7v3cnre">
            <div class=" gap-4" id="el-zv7ufp56">
              {/* <!-- Location Search --> */}
              <div class="relative" id="el-2n0l37zz">
                <label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" id="el-dfgn8agb">Location</label>
                <div class="relative" id="el-d2vlwpub">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" id="el-pnkmcpui">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-nsiau1bv">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" id="el-4digfvlq"></path>
                      <circle cx="12" cy="10" r="3" id="el-c1rkmj06"></circle>
                    </svg>
                  </div>
                  <input type="text" id="location" name="location" placeholder="Enter city, zip code, or address" class="block w-full pl-10 pr-3 py-3 border  border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-green-500 dark:focus:border-green-400"/>
                </div>
                <button type="button" class="mt-2 inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm" id="el-ezz4q16r">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-la4ser8q">
                    <circle cx="12" cy="12" r="10" id="el-f768byum"></circle>
                    <line x1="12" y1="8" x2="12" y2="12" id="el-lpn7878p"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16" id="el-9ng7f121"></line>
                  </svg>
                  Use my current location
                </button>
              </div>
            </div>
            
            
            {/* <!-- Search Button --> */}
            <div class="flex justify-center pt-2" id="el-9z74n0zi">
              <button type="submit" class="px-8 py-3 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white dark:text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-full md:w-auto" id="el-8xcuku92">
                <div class="flex items-center justify-center" id="el-la1yr0g4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-cpcw4f4z">
                    <circle cx="11" cy="11" r="8" id="el-9iczjsnw"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65" id="el-v42hzodu"></line>
                  </svg>
                  Search Markets
                </div>
              </button>
            </div>
          </form>
        </div>
 
      </div>
    </div>
  </section>
    </div>
  )
}
