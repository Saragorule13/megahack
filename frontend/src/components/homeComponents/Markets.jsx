import React from 'react'
import Heading from '../Heading'
import { leaves } from '../../assets/assets'

export default function Markets() {
  return (
    <div>
       <section id="featured-markets" class="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4" id="el-kuxqhnv8">
      <div class="text-center mb-12" id="el-d68odkv5">
        <h2 class="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-3" id="el-v5fd8jtp">Featured Farmers Markets</h2>
        {/* <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" id="el-ikyznpdr">Discover some of our most popular markets with the freshest local produce, artisanal goods, and friendly vendors</p> */}
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-8" id="el-cooly7g1">
        <button class="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800" id="el-aej8l3sa">
          All Markets
        </button>
        <button class="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800" id="el-0qyn11pr">
          Weekend Only
        </button>
        <button class="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800" id="el-pue6kv8v">
          Indoor Markets
        </button>
        <button class="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800" id="el-o4ijr3ve">
          Year-Round
        </button>
        <button class="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800" id="el-mvdji1v5">
          Organic Focused
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="el-upisxseh">
     
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col" id="el-byygktf1">
          <div class="relative h-56 overflow-hidden" id="el-qtzjulwl">
            <div class="w-full h-full bg-green-100 flex items-center justify-center" id="el-4drz7vb6">
              {/* <img src="https://placehold.co/600x400/22543d/c5f6de?text=Downtown+Market" alt="Downtown Farmers Market" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" id="el-nj0uium0"> */}
            </div>
            <div class="absolute top-4 right-4 bg-green-600 text-white rounded-full px-3 py-1 text-xs font-semibold" id="el-q6j6xgbn">
              Popular
            </div>
            <div class="absolute bottom-4 left-4 bg-white dark:bg-gray-800 text-green-800 dark:text-green-300 rounded-full px-3 py-1 text-xs font-medium flex items-center" id="el-weux8669">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-8jgm3msl">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" id="el-a0e3puvr"></rect>
                <line x1="16" y1="2" x2="16" y2="6" id="el-m5ttdyr5"></line>
                <line x1="8" y1="2" x2="8" y2="6" id="el-7k32p9hq"></line>
                <line x1="3" y1="10" x2="21" y2="10" id="el-fcdxsl6p"></line>
              </svg>
              Sat-Sun, 8AM-2PM
            </div>
          </div>
          <div class="p-6 flex-grow" id="el-lxset6yn">
            <div class="flex justify-between items-start mb-2" id="el-csd3v0ms">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white" id="el-ln30a6ic">Downtown Farmers Market</h3>
              <div class="flex items-center" id="el-7s8xu5t4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" id="el-h7hypeg7">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" id="el-0heyqe8l"></path>
                </svg>
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1" id="el-himpirj6">4.8</span>
              </div>
            </div>
            <div class="flex items-center mb-4" id="el-w88cnxu2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-67a0ii37">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" id="el-cf4gvye4"></path>
                <circle cx="12" cy="10" r="3" id="el-0nwr1czl"></circle>
              </svg>
              <span class="text-gray-500 dark:text-gray-400 text-sm" id="el-rhm1vas9">123 Market Street, Downtown</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4" id="el-54o1pn7h">The Downtown Farmers Market features over 80 local vendors offering fresh produce, baked goods, artisanal crafts, and much more.</p>
            <div class="flex flex-wrap gap-2 mb-4" id="el-igqkqtnw">
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-sdou4b8n">Organic</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-fstbp51r">Crafts</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-559k4p9i">Live Music</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-ucmb7rl5">Food Trucks</span>
            </div>
          </div>
          <div class="px-6 pb-6 pt-2 mt-auto border-t border-gray-200 dark:border-gray-700" id="el-scsndefk">
            <div class="flex items-center justify-between" id="el-waf8jkwe">
              <div class="flex items-center" id="el-jhhmpu5c">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 dark:text-green-400 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-cirdj4vu">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" id="el-1toqshvh"></path>
                  <circle cx="9" cy="7" r="4" id="el-em4b2zu6"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" id="el-7vyrcfkq"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" id="el-jv7ttgif"></path>
                </svg>
                <span class="text-sm text-gray-600 dark:text-gray-400" id="el-zt6nwbkz">82 vendors</span>
              </div>
              <a href="#" class="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium text-sm" id="el-9hlgyj2a">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-b9zq1b4u">
                  <line x1="5" y1="12" x2="19" y2="12" id="el-27ospf0n"></line>
                  <polyline points="12 5 19 12 12 19" id="el-df61gla1"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col" id="el-tjbwlpba">
          <div class="relative h-56 overflow-hidden" id="el-8teyprw4">
            <div class="w-full h-full bg-green-100 flex items-center justify-center" id="el-pottinlz">
              {/* <img src="https://placehold.co/600x400/22543d/c5f6de?text=Riverside+Market" alt="Riverside Weekend Market" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" id="el-bchk9msg"> */}
            </div>
            <div class="absolute top-4 right-4 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-semibold" id="el-p92jhbjs">
              New
            </div>
            <div class="absolute bottom-4 left-4 bg-white dark:bg-gray-800 text-green-800 dark:text-green-300 rounded-full px-3 py-1 text-xs font-medium flex items-center" id="el-nzqt7ucc">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-mt36r648">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" id="el-vgrkd3vv"></rect>
                <line x1="16" y1="2" x2="16" y2="6" id="el-8hnu8vb7"></line>
                <line x1="8" y1="2" x2="8" y2="6" id="el-o1u29t58"></line>
                <line x1="3" y1="10" x2="21" y2="10" id="el-6ccnqez6"></line>
              </svg>
              Saturday, 9AM-3PM
            </div>
          </div>
          <div class="p-6 flex-grow" id="el-l5mv470b">
            <div class="flex justify-between items-start mb-2" id="el-rvwkqfbn">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white" id="el-1by45mfc">Riverside Weekend Market</h3>
              <div class="flex items-center" id="el-ummhk07j">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" id="el-ogx6yu7y">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" id="el-mdkdp874"></path>
                </svg>
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1" id="el-pgl63tb1">4.5</span>
              </div>
            </div>
            <div class="flex items-center mb-4" id="el-qx5dcl6n">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-a6l8wncu">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" id="el-j51m3g0v"></path>
                <circle cx="12" cy="10" r="3" id="el-myoso6wr"></circle>
              </svg>
              <span class="text-gray-500 dark:text-gray-400 text-sm" id="el-hhd1fa9l">456 River Walk, Riverside</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4" id="el-v0ac40dg">Enjoy a scenic market experience by the river with specialty farms, local honey producers, and artisanal cheeses. Perfect for a weekend outing.</p>
            <div class="flex flex-wrap gap-2 mb-4" id="el-pimf6zex">
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-nniifmcj">Organic</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-wivm3n6h">Waterfront</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-jp6u71qp">Pet Friendly</span>
            </div>
          </div>
          <div class="px-6 pb-6 pt-2 mt-auto border-t border-gray-200 dark:border-gray-700" id="el-wtxfrdrd">
            <div class="flex items-center justify-between" id="el-pmj8nra0">
              <div class="flex items-center" id="el-9o6v6jli">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 dark:text-green-400 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-hktqbybn">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" id="el-yqzirinh"></path>
                  <circle cx="9" cy="7" r="4" id="el-m13nbe4n"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" id="el-y6y7mu00"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" id="el-p2866mib"></path>
                </svg>
                <span class="text-sm text-gray-600 dark:text-gray-400" id="el-34x1x9ep">45 vendors</span>
              </div>
              <a href="#" class="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium text-sm" id="el-rfxnz1tt">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-yg202lto">
                  <line x1="5" y1="12" x2="19" y2="12" id="el-vnu4c7kq"></line>
                  <polyline points="12 5 19 12 12 19" id="el-4ntk5epg"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col" id="el-jdznbvh2">
          <div class="relative h-56 overflow-hidden" id="el-2ffique6">
            <div class="w-full h-full bg-green-100 flex items-center justify-center" id="el-qbcdzk3c">
              {/* <img src="https://placehold.co/600x400/22543d/c5f6de?text=Oakville+Market" alt="Oakville Farmers Market" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" id="el-zczpmqx9"> */}
            </div>
            <div class="absolute top-4 right-4 bg-amber-600 text-white rounded-full px-3 py-1 text-xs font-semibold" id="el-5o5gp1n1">
              Organic
            </div>
            <div class="absolute bottom-4 left-4 bg-white dark:bg-gray-800 text-green-800 dark:text-green-300 rounded-full px-3 py-1 text-xs font-medium flex items-center" id="el-fo83hnyr">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-ud2fvq9a">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" id="el-7u45acqd"></rect>
                <line x1="16" y1="2" x2="16" y2="6" id="el-4fqq3le9"></line>
                <line x1="8" y1="2" x2="8" y2="6" id="el-w5i8pxgv"></line>
                <line x1="3" y1="10" x2="21" y2="10" id="el-r7ie0vjv"></line>
              </svg>
              Wed &amp; Sun, 10AM-4PM
            </div>
          </div>
          <div class="p-6 flex-grow" id="el-h89yr0xq">
            <div class="flex justify-between items-start mb-2" id="el-y5mwng8a">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white" id="el-o3glmbmr">Oakville Farmers Market</h3>
              <div class="flex items-center" id="el-o6hbe9dk">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" id="el-v81073yu">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" id="el-r4auffql"></path>
                </svg>
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1" id="el-0ys79gca">4.9</span>
              </div>
            </div>
            <div class="flex items-center mb-4" id="el-11mkr293">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-h1tlxoz7">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" id="el-ovhfpsfr"></path>
                <circle cx="12" cy="10" r="3" id="el-vecywayq"></circle>
              </svg>
              <span class="text-gray-500 dark:text-gray-400 text-sm" id="el-wxfboaf5">789 Oak Street, Oakville</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4" id="el-786xxp21">A certified organic market with strict standards. Features local farmers committed to sustainable farming practices, heritage produce varieties, and eco-friendly products.</p>
            <div class="flex flex-wrap gap-2 mb-4" id="el-dc6blbjt">
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-scjlabk2">Certified Organic</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-9xuf8i8l">Sustainable</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs" id="el-13z8cey3">Year-Round</span>
            </div>
          </div>
          <div class="px-6 pb-6 pt-2 mt-auto border-t border-gray-200 dark:border-gray-700" id="el-nl48ykm4">
            <div class="flex items-center justify-between" id="el-k6gzcavz">
              <div class="flex items-center" id="el-mr9nusxc">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 dark:text-green-400 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-6h98yi6f">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" id="el-x626gxno"></path>
                  <circle cx="9" cy="7" r="4" id="el-gjm2d1cu"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" id="el-5d30s398"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" id="el-0joitxgp"></path>
                </svg>
                <span class="text-sm text-gray-600 dark:text-gray-400" id="el-5w8jfxq2">36 vendors</span>
              </div>
              <a href="#" class="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium text-sm" id="el-6zsi9ts4">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-azkivt6h">
                  <line x1="5" y1="12" x2="19" y2="12" id="el-v65jm00s"></line>
                  <polyline points="12 5 19 12 12 19" id="el-479cetjj"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-10 text-center" id="el-2fqe7e9k">
        <a href="#" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-3 md:text-lg md:px-8 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800" id="el-pu8pb263">
          View All Markets
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-sswjr6sh">
            <line x1="5" y1="12" x2="19" y2="12" id="el-27hla5dj"></line>
            <polyline points="12 5 19 12 12 19" id="el-8ddd482n"></polyline>
          </svg>
        </a>
      </div>

      <div class="mt-16 relative rounded-xl overflow-hidden shadow-lg" id="el-52gtqant">
        <h3 class="text-xl font-bold text-center mb-6" id="el-ljohxtjs">Markets Near You</h3>
        <div class="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center" id="el-p5pjba7x">
          <div class="text-center p-4" id="el-355q20ad">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-p5vpda5j">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" id="el-wue6lkgt"></rect>
              <circle cx="8.5" cy="8.5" r="1.5" id="el-3kl5t8hi"></circle>
              <polyline points="21 15 16 10 5 21" id="el-gypw0fjr"></polyline>
            </svg>
            <p class="text-gray-600 dark:text-gray-300" id="el-84akx8s5">Interactive map showing markets near your location</p>
            <button class="mt-4 inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800 transition-colors duration-300" id="el-o71q7y6i">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-te35hng5">
                <circle cx="12" cy="12" r="10" id="el-7q3wktik"></circle>
                <polygon points="10 8 16 12 10 16 10 8" id="el-f1mcm25u"></polygon>
              </svg>
              View Interactive Map
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
