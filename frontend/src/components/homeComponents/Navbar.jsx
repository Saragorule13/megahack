import React from "react";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <header id="header" class="bg-green-50 fixed w-full z-30 top-0 shadow">
    <nav class="container mx-auto px-4 py-3" id="el-mj0l0sjt">
      <div class="flex items-center justify-between" id="el-3uddywkl">
        <div class="flex items-center space-x-2" id="el-t7wrapyd">
          <img src={Logo} className="w-12 h-12" alt="logo"/>
          <span class="text-xl font-bold text-green-800" id="el-742nk914">Kisan Kart</span>
        </div>
        
        <ul class="hidden md:flex items-center space-x-8" id="el-tw79rgzv">
          <li id="el-293p54ih"><a href="#" class="text-green-800 hover:text-green-600 transition-colors duration-300" id="el-4coverkc">Home</a></li>
          <li id="el-9xb85dn8"><a href="#" class="text-green-800 hover:text-green-600 transition-colors duration-300" id="el-ulrtslce">Markets</a></li>
          <li id="el-0pp0a1my"><a href="#" class="text-green-800 hover:text-green-600 transition-colors duration-300" id="el-lmoloegs">Vendors</a></li>
          <li id="el-q2cu62o3"><a href="#" class="text-green-800 hover:text-green-600 transition-colors duration-300" id="el-r9z8gbgh">About</a></li>
        </ul>
        
        <div class="hidden md:flex items-center space-x-4" id="el-k2s75zti">
          <a href="#" class="text-green-800 hover:text-green-600 transition-colors duration-300" id="el-5p4acmz0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-20fxu77i">
              <circle cx="11" cy="11" r="8" id="el-9vgwobx1"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65" id="el-q7q2nocx"></line>
            </svg>
          </a>
          <a href="#" class="text-green-800 hover:text-green-600 transition-colors duration-300" id="el-dxtnurzv">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-s6q49lgk">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" id="el-pwxspun7"></path>
              <circle cx="12" cy="7" r="4" id="el-yn6z5w02"></circle>
            </svg>
          </a>
        </div>
        
        <button class="md:hidden text-green-800 focus:outline-none" aria-label="Toggle menu" aria-expanded="false" id="el-r6zxca5k">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-wpzr2whx">
            <line x1="3" y1="12" x2="21" y2="12" id="el-ry3v8qr9"></line>
            <line x1="3" y1="6" x2="21" y2="6" id="el-9cz71yuv"></line>
            <line x1="3" y1="18" x2="21" y2="18" id="el-8cajanif"></line>
          </svg>
        </button>
      </div>
      
      <div class="md:hidden hidden" id="el-n81xutrh">
        <ul class="mt-4 space-y-4 pb-3" id="el-eg72kvxy">
          <li id="el-s2fve64o"><a href="#" class="block text-green-800 hover:text-green-600 transition-colors duration-300" id="el-p5m4z84d">Home</a></li>
          <li id="el-ptkhbv4m"><a href="#" class="block text-green-800 hover:text-green-600 transition-colors duration-300" id="el-14flay7n">Markets</a></li>
          <li id="el-i4se1cpp"><a href="#" class="block text-green-800 hover:text-green-600 transition-colors duration-300" id="el-480u4wln">Vendors</a></li>
          <li id="el-6fq2nooy"><a href="#" class="block text-green-800 hover:text-green-600 transition-colors duration-300" id="el-1tod1u17">Seasonal</a></li>
          {/* <li id="el-5zcolg2m"><a href="#" class="block text-green-800 hover:text-green-600 transition-colors duration-300" id="el-h4aqxozn">Blog</a></li> */}
          {/* <li id="el-pepnn4m0"><a href="#" class="block text-green-800 hover:text-green-600 transition-colors duration-300" id="el-ozp97suu">About</a></li> */}
          {/* <li id="el-byce3x6g"><a href="#" class="block text-green-800 hover:text-green-600 transition-colors duration-300" id="el-becydk3n">Contact</a></li> */}
          <li class="pt-2 flex space-x-4" id="el-bnp8k1nw">
            <a href="#" class="text-green-800 hover:text-green-600 transition-colors duration-300" id="el-qbk57vy7">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-0zamku7v">
                <circle cx="11" cy="11" r="8" id="el-284gnphq"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" id="el-cmnrupq7"></line>
              </svg>
            </a>
            <a href="#" class="text-green-800 hover:text-green-600 transition-colors duration-300" id="el-ugond77p">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="el-qin9hcj3">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" id="el-s8dist2k"></path>
                <circle cx="12" cy="7" r="4" id="el-w2gz8iti"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
