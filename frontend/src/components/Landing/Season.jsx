import React from 'react'
import { asparagus, beans, brinjal, cucumber, karela, lauki, okra } from '../../assets/assets'

export default function Season() {
  return (
    <div>
      <section id="seasonal-produce" class="py-12 md:py-16 lg:py-20 bg-green-50 dark:bg-gray-800">
    <div class="container mx-auto px-4" id="el-cf0dof0v">
      <div class="text-center mb-12" id="el-1crlnezn">
        <h2 class="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-3" id="el-lk0yp3gt">What's In Season</h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" id="el-qa5puyor">Discover the freshest seasonal produce available at your local farmers markets right now</p>
      </div>

      {/* <!-- Season Selector Tabs --> */}
      <div class="flex justify-center mb-10" id="el-t9xa53ib">
        <div class="inline-flex bg-white dark:bg-gray-900 rounded-lg shadow-md p-1" id="el-a5bq187u">
          <button class="px-4 py-2 rounded-md text-sm font-medium bg-green-600 text-white" id="el-kff1dz55">
            Spring
          </button>
          <button class="px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" id="el-1ebyj9cb">
            Summer
          </button>
          <button class="px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" id="el-g4ob67ex">
            Fall
          </button>
          <button class="px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" id="el-btmtzy90">
            Winter
          </button>
        </div>
      </div>
      
      {/* <!-- Category Filters --> */}
      <div class="flex overflow-x-auto pb-4 md:flex-wrap md:justify-center mb-8 no-scrollbar" id="el-jiv64t9u">
        <button class="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-02mc052k">
          All Produce
        </button>
        <button class="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-vzbl79z4">
          Vegetables
        </button>
        <button class="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-3f7bhiey">
          Fruits
        </button>
        <button class="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-5mcaxvt5">
          Herbs
        </button>
        <button class="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-unh3k6m1">
          Flowers
        </button>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6" id="el-z96ot3zn">
      
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-9q2pg17n">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-hycu0e1t">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-7ygg4gh4">
              <img src={lauki} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-qjtvcdpp">
              <span class="text-white text-sm" id="el-cf5t11ky">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-kitqgd76">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-14b3a3qq">Lauki</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-ycg689pt">Apr - Jun</p>
          </div>
        </div>
        
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-gkq4k074">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-n5kup1h2">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-fgo8up52">
              <img src={cucumber} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-123jnmz3">
              <span class="text-white text-sm" id="el-mz34b9lj">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-52x5vqpv">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-1oxfyxpa">Cucumber</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-br6599ia">Apr - Jun</p>
          </div>
        </div>
        
      
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-pzpxjsdm">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-f17esp8x">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-igo6u07r">
              <img src={karela} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-zduvcytt">
              <span class="text-white text-sm" id="el-lq0241i9">Just Starting</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-8aoa1vio">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-sl01syyf">Karela (Bitter Guord)</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-inbarq08">Mar - Jun</p>
          </div>
        </div>
        
       
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-cph74hzb">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-bewk55hc">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-oh3hnj83">
                <img src={brinjal} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-guk0nwho">
              <span class="text-white text-sm" id="el-ccymmuj7">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-4n61crq1">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-gu3fy4y0">Brinjal (Baingan)</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-rtzor5iq">Mar - Jun</p>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-9nbg2s8m">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-eovg1uq6">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-x59z7avy">
              <img src={okra} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-3m4m6hc1">
              <span class="text-white text-sm" id="el-0lcpw69g">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-yi7ey6s1">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-1agziu22">Okra (Bhindi)</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-17cir583">Mar - Jun</p>
          </div>
        </div>
        
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-ib2pvf8y">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-o6f02j4z">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-41oke0wh">
              <img src={beans} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-u4j0q1l6">
              <span class="text-white text-sm" id="el-jitxi52m">Just Starting</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-x8y5jv6n">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-4xdbirhy">Green beans</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-kbq7nuwv">Apr - Jun</p>
          </div>
        </div>
        
       
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-zp00s6uk">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-aozwzkjv">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-akm45ffr">
              <div class="w-24 h-24 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center" id="el-rrhl4rsl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-600 dark:text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-lh399l1z">
                  <path d="M2 22s10-4.5 10-10V2.5" id="el-r0blzt5w"></path>
                  <path d="M7 7.5v4" id="el-1kawd4pg"></path>
                  <path d="M12 2.5C6 7 6.5 17.5 6.5 17.5L12 12l5.5 5.5c0 0 .5-10.5-5.5-15Z" id="el-zv3tabr8"></path>
                </svg>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-grbu06rv">
              <span class="text-white text-sm" id="el-rryrjef5">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-ce7i0o5q">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-hrjl0mxs">Spinach</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-izs1mif0">Mar - May</p>
          </div>
        </div>
        
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-h6xi7lf3">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-7sxflkuf">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-x55hsmkj">
              <div class="w-24 h-24 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center" id="el-90blzs44">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-600 dark:text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-m0czgj7x">
                  <path d="M2 22c1.25-1.25 2.5-3 3.6-5.75" id="el-f72ilsrg"></path>
                  <path d="M5.75 13C9 10 9.5 7.25 9.75 5.75" id="el-intzbsv7"></path>
                  <path d="M19.25 8C18.5 15.75 13.5 19.5 9.5 20.75" id="el-gljg5yif"></path>
                  <path d="M9.75 5.75C8 9.5 9.5 14.5 11 16.25" id="el-fwfk8rgf"></path>
                  <path d="M22 2c-1.25 1.25-2.5 3-3.5 5.75" id="el-6mhp1hb3"></path>
                </svg>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-h07iih6h">
              <span class="text-white text-sm" id="el-rpvgqhbh">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-bk57oeor">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-a37ovrwg">Mint</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-3cmlq68v">Apr - Oct</p>
          </div>
        </div>
        
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-4esye2a6">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-nkv154ob">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-jkrh0ghi">
              <div class="w-24 h-24 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center" id="el-6fqmxwp1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-600 dark:text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-4crwwn8a">
                  <path d="M22 14c0 5.5-3.5 10-8 10s-8-4.5-8-10c0-4 2-7.5 4-10 2 3.5 4 10 4 14 1.5-2 2-4 2-6 6-.5 6 2 6 2Z" id="el-qqeoaecl"></path>
                </svg>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-xaugnahh">
              <span class="text-white text-sm" id="el-rxhth5ed">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-iswv77ly">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-s7wthup6">Lettuce</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-0351umpb">Mar - Jun</p>
          </div>
        </div>
        
      
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-70319v87">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-wbiz4k3q">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-jgxl1pam">
              <div class="w-24 h-24 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center" id="el-zjm5rk58">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-600 dark:text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-s6djahl1">
                  <path d="M12 22c6.23-.05 11.25-7.25 9-13" id="el-5ysq77ug"></path>
                  <path d="M18 13.5c.5-6.25-7.5-5.5-7.5-5.5 2 5.5-9 6-9.75 8.25-.75 2.25 3 5.75 9.25 4.75" id="el-3a9d9pa9"></path>
                  <path d="M18 2c-.5 7.5-7.5 8-9.5 8l.5 2" id="el-b1hu1y4x"></path>
                </svg>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-j91flkvm">
              <span class="text-white text-sm" id="el-5yxrkcnt">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-gkkmsnqc">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-3naoz4b3">Spring Onions</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-j3cqibk3">Mar - Jun</p>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-3gg4m4bi">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-g19mldbl">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-8ayqvb27">
              <div class="w-24 h-24 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center" id="el-nch4qfj6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-600 dark:text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-b7zqoxej">
                  <path d="M19 9V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5" id="el-2k0v3zpv"></path>
                  <rect width="18" height="12" x="3" y="9" rx="2" id="el-1lwopoh9"></rect>
                </svg>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-0q56u5xe">
              <span class="text-white text-sm" id="el-witn0a3l">Just Starting</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-uj4voml2">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-9w7w6tql">Artichokes</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-pkd5cv03">Mar - May</p>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-taf8b3d1">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-57jgl0kl">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-rxf338qe">
              <img src={asparagus} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-cmm72ohz">
              <span class="text-white text-sm" id="el-g8m4v0sd">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-6tkb62ib">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-arf7io02">Asparagus</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-l90s8k4c">Apr - Jun</p>
          </div>
        </div>
      </div>
  
    </div>
  </section>
    </div>
  )
}
